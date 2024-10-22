export async function fetchNewAccessToken(refreshToken: string, baseURL: string) {
  try {
    const refreshResponse = await fetch(`${baseURL}/auth/tokens`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${refreshToken}`,
      },
    });

    if (refreshResponse.ok) {
      const data = await refreshResponse.json();
      return data.accessToken;
    } else {
      throw new Error('Failed to refresh token');
    }
  } catch (error) {
    console.error('Error refreshing token:', error);
    return null;
  }
}
