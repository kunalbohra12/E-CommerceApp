// utils/validators.js

export const validateEmail = ({email}:any) => {
  if (!email.trim()) return { valid: false, message: 'Email is required' };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return { valid: false, message: 'Invalid email format' };

  return { valid: true, message: '' };
};

export const validatePassword = ({password}:any) => {
  if (!password.trim()) return { valid: false, message: 'Password is required' };
  if (password.length < 8) return { valid: false, message: 'Password must be at least 8 characters' };

  return { valid: true, message: '' };
};


