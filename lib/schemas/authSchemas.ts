import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('유효한 이메일 주소를 입력해주세요.'),
  password: z.string().min(1, '비밀번호를 입력해 주세요.'),
});

export const signupSchema = z
  .object({
    name: z.string().min(1, '이름을 입력해 주세요.').min(2, '이름은 최소 2자 이상이어야 합니다.'),
    email: z.string().email('유효한 이메일 주소를 입력해주세요.'),
    password: z.string().min(1, '비밀번호를 입력해 주세요.').min(8, '비밀번호가 8자 이상이 되도록 해 주세요.'),
    confirmPassword: z.string().min(1, '비밀번호를 입력해 주세요.'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  });

export type LoginFormData = z.infer<typeof loginSchema>;
export type SignupFormData = z.infer<typeof signupSchema>;
