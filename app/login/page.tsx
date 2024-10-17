import AuthContainer from '@/components/AuthContainer';
import LoginForm from '@/components/LoginForm';

const link = {
  text: '슬리드 투 두가 처음이신가요?',
  hrefText: '회원가입',
  href: '/signup',
};

export default function Login() {
  return (
    <AuthContainer link={link}>
      <LoginForm />
    </AuthContainer>
  );
}
