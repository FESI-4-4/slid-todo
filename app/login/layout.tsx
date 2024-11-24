import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '로그인',
};

// TODO: 레이아웃 컴포넌트를 만들어주세요.
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // TODO: 불필요하게 감싸고 있는 div를 제거해주세요.
    <div>
      <div>{children}</div>
    </div>
  );
}
