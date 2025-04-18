import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import fetch from '@/utils/fetch';

export const useGetUser = (params) => {
  return useQuery({
    queryKey: ['user', params],
    queryFn: () => fetch.get(`http://localhost:3000/api/user`, { params }),
    enabled: !!params,
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => fetch.patch(`http://localhost:3000/api/user`, data),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });
};
