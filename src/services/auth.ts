import { useMutation } from '@tanstack/react-query';

import fetch from '@/utils/fetch';

export const useRegister = () => {
  return useMutation({
    mutationFn: (data: any) => {
      return fetch.post('http://localhost:3000/api/register', data);
    },
  });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (data: any) => {
      return fetch.post('http://localhost:3000/api/login', data);
    },
  });
};
