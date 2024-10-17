import { ModalContent, ModalProvider, ModalTrigger } from '@/components/common/Modal';

export default function Home() {
  return (
    <div>
      <main>slid todo</main>
      <ModalProvider>
        <ModalTrigger>open</ModalTrigger>
        <ModalContent>
          modal
          <ModalProvider>
            <ModalTrigger>second open</ModalTrigger>
            <ModalContent>second</ModalContent>
          </ModalProvider>
        </ModalContent>
      </ModalProvider>
    </div>
  );
}
