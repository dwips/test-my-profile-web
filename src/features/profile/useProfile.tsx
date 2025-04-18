import { useState } from 'react';
import { useGetUser, useUpdateUser } from '@/services/user';
import { toast } from 'sonner';
import { useSearchParams } from 'react-router-dom';

export function useProfile() {
  const [searchParams] = useSearchParams();
  const isEditParam = searchParams.get('isEdit') === 'true';

  const [activeMenu, setActiveMenu] = useState(0);
  const [isEdit, setIsEdit] = useState(isEditParam || false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { data, isLoading } = useGetUser({});

  const { mutate: updateUser } = useUpdateUser();

  const onSubmit = (data: any) => {
    setIsSubmitting(true);

    updateUser(data, {
      onSuccess: () => {
        setIsSubmitting(false);
        toast.success('Profile updated successfully!');
      },
      onError: () => {
        setIsSubmitting(false);
      },
    });
  };

  const isMarried = data?.maritalStatus === 'Married';

  return {
    activeMenu,
    setActiveMenu,
    isLoading,
    data,
    isEdit,
    setIsEdit,
    onSubmit,
    isSubmitting,
    isMarried,
  };
}
