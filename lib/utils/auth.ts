interface User {
  id: number;
  email: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export const setUserToStorage = (user: User) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('user', JSON.stringify(user));
  }
};

export const getUserFromStorage = (): User | null => {
  if (typeof window === 'undefined') return null;

  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
};

export const removeUserFromStorage = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('user');
  }
};
