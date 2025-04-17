import { useEffect } from 'react';

import LoginLayout from '../components/layouts/login-layout';
import FormLogin from '@/features/login/form-login';

function Login() {
  useEffect(() => {
    document.title = 'Login - MyApp';
  }, []);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <LoginLayout>
        <FormLogin onSubmit={onSubmit} />
      </LoginLayout>
    </div>
  );
}

export default Login;
