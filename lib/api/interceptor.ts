// 쿠키 관련 요청을 할 때 사용 apiFetch 함수

async function refreshTokens() {
  const response = await fetch('/api/auth/refresh', {
    method: 'POST',
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error('Failed to refresh tokens');
  }

  return response.json();
}

export async function apiFetch(url: string, options: RequestInit = {}) {
  const response = await fetch(url, {
    ...options,
    credentials: 'include',
  });

  if (response.status === 401) {
    try {
      await refreshTokens();
      // 토큰 재발급이 성공했다면 실패했던 요청을 다시 시도합니다.
      return apiFetch(url, options);
    } catch (error) {
      console.error('Token refresh failed:', error);
      throw error;
    }
  }

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }
  return response;
}
