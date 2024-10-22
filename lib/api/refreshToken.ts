interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
}

export async function fetchNewAccessToken(refreshToken: string, baseURL: string): Promise<RefreshTokenResponse> {
  try {
    const refreshResponse = await fetch(`${baseURL}/auth/tokens`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${refreshToken}`,
      },
    });
    if (!refreshResponse.ok) {
      const errorData = await refreshResponse.json();
      throw new Error(errorData.message);
    }
    return refreshResponse.json();
  } catch (error) {
    console.error('Error fetching new access token:', error);
    throw new Error(error instanceof Error ? error.message : 'An unknown error occurred.');
  }
}
