import AuthContainer from '@/components/AuthContainer';

const link = {
  text: '이미 회원이신가요?',
  hrefText: '로그인',
  href: '/login',
};

export default function SignUp() {
  return (
    <AuthContainer link={link}>
      <div>폼위치</div>
    </AuthContainer>
  );
}
