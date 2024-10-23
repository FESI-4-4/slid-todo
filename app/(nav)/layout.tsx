import NavBar from '@/components/Nav/NavBar';

export default function NavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex w-screen h-screen'>
      <NavBar />
      <div className='flex-1'>{children}</div>
    </div>
  );
}
