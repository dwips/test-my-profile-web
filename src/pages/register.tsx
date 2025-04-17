import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import LoginLayout from '../components/layouts/login-layout';
import FormRegister from '@/features/register/form-register';
import { useRegister } from '@/services/auth';
import { ModalDialog } from '@/components/elements/dialog';

function Register() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    document.title = 'Register - MyApp';
  }, []);

  const { mutate: register } = useRegister();

  const onSubmit = (data: any) => {
    setIsLoading(true);

    register(data, {
      onSuccess: () => {
        setIsLoading(false);
        setShowModal(true);
      },
      onError: (error) => {
        console.log(error);

        setIsLoading(false);
        toast.warning(error.message);
      },
    });
  };

  return (
    <div>
      <LoginLayout>
        <p className="text-center text-md mb-3">
          Create your account or{' '}
          <Link to={'/login'} className="underline">
            log in
          </Link>
        </p>
        <FormRegister onSubmit={onSubmit} isLoading={isLoading} />
      </LoginLayout>

      <ModalDialog
        open={showModal}
        title="Registration Successful"
        description="You have successfully registered. Please continue to login."
        onAction={() => {
          navigate('/login');
          setShowModal(false);
        }}
      />
    </div>
  );
}

export default Register;
