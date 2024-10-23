'use client';

import Button from './common/ButtonSlid';
import InputSlid from './common/InputSlid';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormData, loginSchema } from '@/lib/schemas/authSchemas';
import { login } from '@/lib/api/login';
import { setUserToStorage } from '@/lib/utils/auth';

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
      const response = await login(data);
      setUserToStorage(response.user);
      window.location.href = '/dashboard';
    } catch (error) {
      if (error instanceof Error) {
        // 서버에서 받은 에러 메시지를 적절한 필드에 설정
        if (error.message.includes('이메일')) {
          setError('email', {
            type: 'manual',
            message: error.message,
          });
        } else if (error.message.includes('비밀번호')) {
          setError('password', {
            type: 'manual',
            message: error.message,
          });
        } else {
          // 일반적인 에러의 경우 비밀번호 필드에 표시 (임시)
          setError('password', {
            type: 'manual',
            message: error.message,
          });
        }
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
