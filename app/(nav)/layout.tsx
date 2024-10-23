import NavBar from '@/components/Nav/NavBar';

export default function NavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex'>
      <NavBar />
      <div>{children}</div>
    </div>
  );
}
