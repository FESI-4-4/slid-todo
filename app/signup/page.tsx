import AuthContainer from '@/components/AuthContainer';
import SignUpForm from '@/components/SignUpForm';

const link = {
  text: '이미 회원이신가요?',
  hrefText: '로그인',
  href: '/login',
};

export default function SignUp() {
  return (
    <AuthContainer link={link}>
      <SignUpForm />
    </AuthContainer>
  );
}
