'use client';

import Button from './common/ButtonSlid';
import InputSlid from './common/InputSlid';

const SignUpForm: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('폼 제출');
  };
  return (
    <form onSubmit={handleSubmit} className='space-y-6 w-[343px] sm:w-[640px]'>
      <InputSlid type='text' label='이름' placeholder='이름를 입력해주세요' />
      <InputSlid type='email' label='이메일' placeholder='이메일을 입력해주세요' />
      <InputSlid type='password' label='비밀번호' placeholder='비밀번호를 입력해주세요' />
      <InputSlid type='password' label='비밀번호 확인' placeholder='비밀번호를 다시 한 번 입력해주세요' />
      <Button className='w-full' type='submit'>
        회원가입하기
      </Button>
    </form>
  );
};

export default SignUpForm;
