import { apiFetch } from './interceptor';

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginResponse {
  user: {
    id: number;
    email: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
}

export const login = async (data: LoginFormData): Promise<LoginResponse> => {
  const response = await apiFetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message);
  }

  return responseData;
};
