'use client';

import { SignupFormData, signupSchema } from '@/lib/schemas/authSchemas';
import Button from './common/ButtonSlid';
import InputSlid from './common/InputSlid';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { signUp } from '@/lib/api/signUp';

const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<SignupFormData> = async (data) => {
    // 인자로 받은 data에서 confirmPassword 필드를 제외한 나머지 값을 패치에 사용
    const fetchData = { name: data.name, email: data.email, password: data.password };
    try {
      const response = await signUp(fetchData);
      console.log(response);
      // Simulating an API call

      // If login is successful, you might redirect or update state
      // history.push('/dashboard');
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        console.log('통과');
        console.log(error);
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
        label='이름'
        placeholder='이름를 입력해주세요'
        {...register('name')}
        error={errors.name?.message}
      />
      <InputSlid
        type='text'
        label='이메일'
        placeholder='이메일을 입력해주세요'
        {...register('email')}
        error={errors.email?.message}
      />
      <InputSlid
        type='password'
        label='비밀번호'
        placeholder='비밀번호를 입력해주세요'
        {...register('password')}
        error={errors.password?.message}
      />
      <InputSlid
        type='password'
        label='비밀번호 확인'
        placeholder='비밀번호를 다시 한 번 입력해주세요'
        {...register('confirmPassword')}
        error={errors.confirmPassword?.message}
      />
      <Button className='w-full' type='submit' disabled={isSubmitting}>
        회원가입하기
      </Button>
    </form>
  );
};

export default SignUpForm;
