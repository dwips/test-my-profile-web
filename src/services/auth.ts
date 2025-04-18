import { useMutation } from '@tanstack/react-query';

import { BASE_URL } from '@/utils/base-url';
import fetch from '@/utils/fetch';

export const useRegister = () => {
  return useMutation({
    mutationFn: (data: any) => {
      return fetch.post(`${BASE_URL}/api/register`, data);
    },
  });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (data: any) => {
      return fetch.post(`${BASE_URL}/api/login`, data);
    },
  });
};
