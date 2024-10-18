'use client';

import IconModalClose from '@/public/icons/IconModalClose';
import {
  Children,
  cloneElement,
  ComponentPropsWithoutRef,
  createContext,
  isValidElement,
  MouseEventHandler,
  PropsWithChildren,
  useContext,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';

const ModalContext = createContext({ isOpen: false, handleOpen: () => {}, handleClose: () => {} });

const ModalProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);

  return <ModalContext.Provider value={{ isOpen, handleOpen, handleClose }}>{children}</ModalContext.Provider>;
};

const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('ModalProvider 안에서 사용해야합니다.');
  }

  return context;
};

const ModalTrigger = ({ children, ...props }: ComponentPropsWithoutRef<'button'>) => {
  const { handleOpen } = useModalContext();

  return (
    <button onClick={handleOpen} {...props}>
      {children}
    </button>
  );
};

const ModalContent = ({ className, children, ...props }: ComponentPropsWithoutRef<'div'>) => {
  const { isOpen, handleClose } = useModalContext();

  const ref = useRef<HTMLDivElement | null>(null);

  const handleClickOverlay: MouseEventHandler = (e) => {
    e.stopPropagation();
    if (!ref.current?.contains(e.target as Node)) handleClose();
  };

  return (
    <>
      {isOpen &&
        createPortal(
          <div className='fixed inset-0 flex justify-center items-center' onClick={handleClickOverlay}>
            <div className='absolute inset-0 bg-black opacity-50'></div>
            <div className={twMerge('p-6 rounded-xl bg-white z-10', className)} ref={ref} {...props}>
              {children}
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

const ModalClose = ({
  asChild = false,
  children,
  ...props
}: ComponentPropsWithoutRef<'button'> & { asChild?: boolean }) => {
  const { handleClose } = useModalContext();

  if (asChild && Children.count(children) === 1 && isValidElement(children)) {
    return cloneElement(children, {
      ...props,
      ...children.props,
      onClick: () => {
        if (children.props.onClick) children.props.onClick();
        handleClose();
      },
    });
  }

  return (
    <button onClick={handleClose} {...props}>
      {children ? children : <IconModalClose />}
    </button>
  );
};

export { ModalProvider, ModalTrigger, ModalContent, ModalClose };
