import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import fetch from '@/utils/fetch';

import { BASE_URL } from '@/utils/base-url';

export const useGetUser = (params) => {
  return useQuery({
    queryKey: ['user', params],
    queryFn: () => fetch.get(`${BASE_URL}/api/user`, { params }),
    enabled: !!params,
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => fetch.patch(`${BASE_URL}/api/user`, data),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });
};
