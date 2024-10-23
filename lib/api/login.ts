interface LoginFormData {
  email: string;
  password: string;
}

export interface User {
  id: number;
  email: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

interface LoginResponse {
  user: User;
}

export const login = async (data: LoginFormData): Promise<LoginResponse> => {
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    // 응답 데이터 파싱
    const responseData = await response.json();

    // HTTP 오류 처리
    if (!response.ok) {
      throw new Error(responseData.message || '로그인 요청이 실패했습니다.');
    }

    return responseData;
  } catch (error) {
    // 에러 처리
    console.error('로그인 중 오류 발생:', error);
    throw new Error(error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.');
  }
};
