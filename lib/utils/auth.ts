interface User {
  id: number;
  email: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export const setUserToStorage = (user: User) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const getUserFromStorage = (): User | null => {
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
};

export const removeUserFromStorage = () => {
  localStorage.removeItem('user');
};
