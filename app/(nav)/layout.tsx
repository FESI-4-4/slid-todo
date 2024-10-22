import NavBar from '@/components/Nav/NavBar';

export default function NavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className='flex'>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
