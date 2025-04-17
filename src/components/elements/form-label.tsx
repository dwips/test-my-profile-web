import { cn } from '@/lib/utils';

interface FormLabelProps extends React.ComponentProps<'label'> {
  children: React.ReactNode;
  label?: string;
  required?: boolean;
  htmlFor?: string;
}

function FormLabel({
  children,
  label,
  htmlFor,
  required,
  className,
}: FormLabelProps) {
  return (
    <div
      className={cn(
        'flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4',
        className
      )}
    >
      <label htmlFor={htmlFor} className="w-[100px] text-left sm:text-right">
        {label}
        {required ? '*' : ''}
      </label>{' '}
      <div className="flex-1">{children}</div>
    </div>
  );
}

export default FormLabel;
