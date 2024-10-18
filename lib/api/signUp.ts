import { API_BASE_URL } from '@/constants/api';

interface SignupFormData {
  name: string;
  email: string;
  password: string;
}

interface SignupResponse {
  user: {
    id: number;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  };
}

export const signUp = async (data: SignupFormData): Promise<SignupResponse> => {
  const response = await fetch(`${API_BASE_URL}/user`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }
  return response.json();
};
