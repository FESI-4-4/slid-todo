'use client';

import Button from './common/ButtonSlid';
import InputSlid from './common/InputSlid';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormData, loginSchema } from '@/lib/schemas/authSchemas';

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      // Here you would typically send the data to your backend
      console.log(data);
      // Simulating an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulating a server error for demonstration
      throw new Error('이메일 또는 비밀번호가 일치하지 않습니다.');

      // If login is successful, you might redirect or update state
      // history.push('/dashboard');
    } catch (error) {
      // Assuming the error is an Error object
      // 가입되지 않은 이메일입니다.
      // 비밀번호가 올바르지 않습니다.
      // 회원가입 관련
      // 이미 사용 중인 이메일입니다.
      if (error instanceof Error) {
        setError('password', {
          type: 'manual',
          message: error.message,
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-6 w-[343px] sm:w-[640px]'>
      <InputSlid
        type='text'
        label='이메일'
        placeholder='이메일을 입력해주세요'
        error={errors.email?.message}
        {...register('email')}
      />
      <InputSlid
        type='password'
        label='비밀번호'
        placeholder='비밀번호를 입력해주세요'
        error={errors.password?.message}
        {...register('password')}
      />
      <Button className='w-full' type='submit' disabled={isSubmitting}>
        로그인하기
      </Button>
    </form>
  );
};

export default LoginForm;
