import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

import { Input } from '../ui/input';
import FormLabel from './form-label';

interface FormInputProps extends React.ComponentProps<'input'> {
  label?: string;
  required?: boolean;
  htmlFor?: string;
  showEye?: boolean;
  errorMessage?: string;
}

function FormInput(props: FormInputProps) {
  const {
    label,
    htmlFor,
    required,
    type,
    showEye = true,
    errorMessage,
    ...rest
  } = props;

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const renderInput = () => {
    if (type === 'password') {
      return (
        <div className="relative">
          <Input
            type={isPasswordVisible ? 'text' : 'password'}
            {...rest}
            style={{
              paddingRight: '50px',
            }}
          />
          {showEye && (
            <span
              className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setIsPasswordVisible((prev) => !prev)}
            >
              {isPasswordVisible ? <EyeOff /> : <Eye />}
            </span>
          )}
        </div>
      );
    }

    return <Input {...rest} />;
  };

  return (
    <div>
      <FormLabel label={label} htmlFor={htmlFor} required={required}>
        <>
          {renderInput()}
          {errorMessage && (
            <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
          )}
        </>
      </FormLabel>
    </div>
  );
}

export default FormInput;
