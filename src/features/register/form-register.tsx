import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

import FormInput from '@/components/elements/form-input';
import FormLabel from '@/components/elements/form-label';
import { Button } from '@/components/ui/button';
import { FormSchema, schema } from './schema';

interface FormRegisterProps {
  onSubmit: (data) => void;
  isLoading?: boolean;
}

function FormRegister(props: FormRegisterProps) {
  const { onSubmit, isLoading } = props;

  const navigate = useNavigate();

  const {
    handleSubmit,
    formState: { errors },
    trigger,
    control,
  } = useForm<FormSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      userId: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'all',
  });

  useEffect(() => {
    trigger();
  }, []);

  const isSubmitDisabled = Object.keys(errors).length > 0;

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="userId"
        render={({ field: { onChange, value } }) => {
          return (
            <FormInput
              label="User ID"
              required={true}
              value={value}
              onChange={onChange}
            />
          );
        }}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => {
          return (
            <FormInput
              label="Password"
              type="password"
              required={true}
              value={value}
              onChange={onChange}
            />
          );
        }}
      />

      <Controller
        control={control}
        name="confirmPassword"
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          let errMsg = '';

          if (error?.message === 'Passwords do not match') {
            errMsg = 'Passwords do not match';
          }

          return (
            <FormInput
              label="Confirm Password"
              type="password"
              required={true}
              value={value}
              onChange={onChange}
              showEye={false}
              errorMessage={errMsg}
            />
          );
        }}
      />

      <FormLabel>
        <div className="flex gap-4">
          <Button
            variant="outline"
            type="button"
            className="cursor-pointer"
            onClick={() => navigate('/login')}
          >
            Cancel
          </Button>
          <Button
            disabled={isSubmitDisabled}
            className={`${
              isSubmitDisabled ? 'cursor-not-allowed' : 'cursor-pointer'
            }`}
            type="submit"
          >
            {isLoading && <Loader2 className="animate-spin" />}
            Register
          </Button>
        </div>
      </FormLabel>
    </form>
  );
}

export default FormRegister;
