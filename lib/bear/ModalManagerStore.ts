import { create } from 'zustand';

type ModalManagerStore = {
  isScrollLocked: boolean;
  modalStack: string[];
  lockScroll: () => void;
  unlockScroll: () => void;
  pushModal: (modalId: string) => void;
  popModal: () => void;
};

let scrollPosition = 0;

const ModalManagerStore = create<ModalManagerStore>((set, get) => ({
  isScrollLocked: false,
  modalStack: [],
  lockScroll: () => {
    if (typeof window === 'undefined') return;

    scrollPosition = window.scrollY;
    const body = document.body;

    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.top = `-${scrollPosition}px`;
    body.style.width = '100%';

    set({ isScrollLocked: true });
  },
  unlockScroll: () => {
    if (typeof window === 'undefined') return;

    const body = document.body;

    body.style.removeProperty('overflow');
    body.style.removeProperty('position');
    body.style.removeProperty('top');
    body.style.removeProperty('width');

    window.scrollTo(0, scrollPosition);
    set({ isScrollLocked: false });
  },
  pushModal: (modalId: string) => {
    const currentStack = get().modalStack;

    if (currentStack.length === 0) {
      get().lockScroll();
    }

    set({ modalStack: [...currentStack, modalId] });
  },
  popModal: () => {
    const currentStack = get().modalStack;

    if (currentStack.length === 0) return;

    const updatedStack = currentStack.slice(0, -1);

    if (updatedStack.length === 0) {
      get().unlockScroll();
    }

    set({ modalStack: updatedStack });
  },
}));

export default ModalManagerStore;
