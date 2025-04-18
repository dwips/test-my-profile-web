import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

import LoginLayout from '../components/layouts/login-layout';
import FormLogin from '@/features/login/form-login';
import { useLogin } from '@/services/auth';
import { setAccessToken } from '@/utils/storage';

function Login() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const { mutate: login } = useLogin();

  useEffect(() => {
    document.title = 'Login - MyApp';
  }, []);

  const onSubmit = (data: any) => {
    setIsLoading(true);

    login(data, {
      onSuccess: (res: { accessToken: string }) => {
        setIsLoading(false);
        setAccessToken(res.accessToken);
        navigate('/profile');
      },
      onError: (error) => {
        setIsLoading(false);
        toast.warning(error.message);
      },
    });
  };

  return (
    <div>
      <LoginLayout>
        <div className="mt-7" />
        <FormLogin onSubmit={onSubmit} isLoading={isLoading} />
      </LoginLayout>
    </div>
  );
}

export default Login;
