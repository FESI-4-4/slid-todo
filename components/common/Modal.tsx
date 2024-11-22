'use client';

import ModalManagerStore from '@/lib/bear/ModalManagerStore';
import IconModalClose from '@/public/icons/IconModalClose';
import {
  Children,
  cloneElement,
  ComponentPropsWithoutRef,
  createContext,
  forwardRef,
  isValidElement,
  memo,
  PropsWithChildren,
  Ref,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';

const ModalContext = createContext<
  { isOpen: boolean; handleOpenChange: (value: boolean) => void; beforeClose?: () => void } | undefined
>(undefined);

const ModalProvider = memo(
  ({
    isOpen: open,
    onChangeIsOpen,
    beforeClose,
    children,
  }: PropsWithChildren<{ isOpen?: boolean; onChangeIsOpen?: (isOpen: boolean) => void; beforeClose?: () => void }>) => {
    const isControlled = open !== undefined;
    const [internalOpen, setInternalOpen] = useState(false);
    const isOpen = isControlled ? open : internalOpen;

    const handleOpenChange = useCallback(
      (newState: boolean) => {
        if (!isControlled) {
          setInternalOpen(newState);
        }
        onChangeIsOpen?.(newState);
      },
      [isControlled, onChangeIsOpen]
    );

    const { pushModal, popModal, modalStack } = ModalManagerStore();
    const modalId = useRef<string>(Math.random().toString(36));

    useEffect(() => {
      if (isOpen) {
        pushModal(modalId.current);
      } else {
        popModal();
      }

      return () => {
        popModal();
      };
    }, [isOpen, pushModal, popModal]);

    useEffect(() => {
      const handleKeyUpOnBody = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          const topModalId = modalStack[modalStack.length - 1];
          if (topModalId === modalId.current) {
            handleOpenChange(false);
          }
        }
      };

      if (isOpen) document.body.addEventListener('keyup', handleKeyUpOnBody);

      return () => document.body.removeEventListener('keyup', handleKeyUpOnBody);
    }, [handleOpenChange, isOpen, modalStack]);

    return (
      <ModalContext.Provider
        value={{
          isOpen,
          handleOpenChange,
          beforeClose,
        }}
      >
        {children}
      </ModalContext.Provider>
    );
  }
);

ModalProvider.displayName = 'ModalProvider';

const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('ModalProvider 안에서 사용해야합니다.');
  }

  return context;
};

const ModalTrigger = forwardRef(
  ({ children, ...props }: ComponentPropsWithoutRef<'button'>, ref: Ref<HTMLButtonElement>) => {
    const { handleOpenChange } = useModalContext();

    return (
      <button onClick={() => handleOpenChange(true)} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

ModalTrigger.displayName = 'ModalTrigger';

const ModalContent = memo(
  ({
    overlayClassName,
    className,
    closeOnClickOverlay = true,
    children,
    ...props
  }: ComponentPropsWithoutRef<'div'> & { overlayClassName?: string; closeOnClickOverlay?: boolean }) => {
    const { isOpen, handleOpenChange } = useModalContext();
    const ref = useRef<HTMLDivElement | null>(null);
    const handleClickOverlay = () => {
      if (!closeOnClickOverlay) return;
      handleOpenChange(false);
    };

    return (
      <>
        {isOpen &&
          createPortal(
            <div
              role='dialog'
              aria-modal='true'
              className={twMerge('fixed inset-0 flex justify-center items-center z-20', overlayClassName)}
              onClick={(e) => e.stopPropagation()}
              ref={ref}
            >
              <div className='absolute inset-0 bg-black opacity-50' onClick={handleClickOverlay}></div>
              <div className={twMerge('p-6 rounded-xl bg-white z-10', className)} {...props}>
                {children}
              </div>
            </div>,
            document.body
          )}
      </>
    );
  }
);

ModalContent.displayName = 'ModalContent';

const ModalClose = memo(
  forwardRef(
    (
      { asChild = false, children, ...props }: ComponentPropsWithoutRef<'button'> & { asChild?: boolean },
      ref: Ref<HTMLButtonElement>
    ) => {
      const { handleOpenChange } = useModalContext();

      if (asChild && Children.count(children) === 1 && isValidElement(children)) {
        return cloneElement(children, {
          ...props,
          ...children.props,
          onClick: () => {
            if (children.props.onClick) children.props.onClick();
            handleOpenChange(false);
          },
          ref,
        });
      }

      return (
        <button type='button' onClick={() => handleOpenChange(false)} {...props} ref={ref}>
          {children ? children : <IconModalClose />}
        </button>
      );
    }
  )
);

ModalClose.displayName = 'ModalClose';

export { ModalProvider, ModalTrigger, ModalContent, ModalClose, useModalContext };
