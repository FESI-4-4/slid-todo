import PageContainer from '@/components/common/pageLayout/PageContainer';
import Nav from '@/components/nav/Nav';
import ScrollToTop from '@/components/ScrollToTop';

export default function NavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex flex-col min-h-screen sm:flex-row lg:flex-row'>
      <Nav />
      <div className='flex-1 overflow-auto'>
        <PageContainer>{children}</PageContainer>
      </div>
      <ScrollToTop />
    </div>
  );
}
