import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';

import FormInput from '@/components/elements/form-input';
import FormLabel from '@/components/elements/form-label';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { FormSchema, schema } from './schema';

interface FormLoginProps {
  onSubmit: (data) => void;
  isLoading?: boolean;
}

function FormLogin(props: FormLoginProps) {
  const { onSubmit, isLoading } = props;

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
      keepMeLoggedIn: false,
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
        name="keepMeLoggedIn"
        render={({ field: { onChange, value } }) => {
          return (
            <FormLabel>
              <label className="cursor-pointer inline-flex items-center gap-2">
                <Checkbox checked={value} onCheckedChange={onChange} />
                Keep me logged in
              </label>
            </FormLabel>
          );
        }}
      />

      <FormLabel>
        <Button
          disabled={isSubmitDisabled}
          className={`${
            isSubmitDisabled ? 'cursor-not-allowed' : 'cursor-pointer'
          }`}
          type="submit"
        >
          {isLoading && <Loader2 className="mr-2 animate-spin" />}
          Login
        </Button>
      </FormLabel>

      <p className="text-left sm:text-center">
        No account?{' '}
        <Link to={'/register'} className="underline">
          Register here
        </Link>
      </p>
    </form>
  );
}

export default FormLogin;
