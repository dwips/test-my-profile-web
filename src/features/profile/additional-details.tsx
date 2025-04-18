import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';

import LabelProfile from '@/components/elements/label-profile';
import { AdditionalDetailsSchema, AdditionalDetailsType } from './schema';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Select from '@/components/elements/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface AdditionalDetailsProps {
  onSubmit?: (data: AdditionalDetailsType) => void;
  isLoading?: boolean;
  data?: any;
  isEdit?: boolean;
  onCancel?: () => void;
}

function AdditionalDetails(props: AdditionalDetailsProps) {
  const { onSubmit, isLoading, data, isEdit, onCancel } = props;

  const { control, handleSubmit } = useForm<AdditionalDetailsType>({
    resolver: zodResolver(AdditionalDetailsSchema),
    values: {
      address: data?.address || '',
      country: data?.country || '',
      postalCode: data?.postalCode || '',
      dateOfBirth: new Date(data?.dateOfBirth) || undefined,
      gender: data?.gender || undefined,
      maritalStatus: data?.maritalStatus || undefined,
    },
  });

  return (
    <div className="flex gap-10">
      <form
        className="flex flex-col gap-6 flex-1 max-w-[500px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          control={control}
          name={'address'}
          render={({ field: { value, onChange }, fieldState: { error } }) => {
            const renderForm = () => {
              if (isEdit) {
                return <Textarea value={value} onChange={onChange} />;
              }

              return value || '-';
            };

            return (
              <LabelProfile
                label="Home Address"
                required={true}
                errMessage={error?.message}
              >
                {isLoading ? (
                  <div className="rounded-sm w-full h-4 animate-pulse bg-gray-300"></div>
                ) : (
                  renderForm()
                )}
              </LabelProfile>
            );
          }}
        />

        <Controller
          control={control}
          name={'country'}
          render={({ field: { value, onChange }, fieldState: { error } }) => {
            const renderForm = () => {
              if (isEdit) {
                return <Input value={value} onChange={onChange} />;
              }

              return value || '-';
            };

            return (
              <LabelProfile
                label="Country"
                required={true}
                errMessage={error?.message}
              >
                {isLoading ? (
                  <div className="rounded-sm w-full h-4 animate-pulse bg-gray-300"></div>
                ) : (
                  renderForm()
                )}
              </LabelProfile>
            );
          }}
        />

        <Controller
          control={control}
          name={'postalCode'}
          render={({ field: { value, onChange }, fieldState: { error } }) => {
            const renderForm = () => {
              if (isEdit) {
                return <Input value={value} onChange={onChange} />;
              }

              return value || '-';
            };

            return (
              <LabelProfile
                label="Postal Code"
                required={true}
                errMessage={error?.message}
              >
                {isLoading ? (
                  <div className="rounded-sm w-full h-4 animate-pulse bg-gray-300"></div>
                ) : (
                  renderForm()
                )}
              </LabelProfile>
            );
          }}
        />

        <Controller
          control={control}
          name={'dateOfBirth'}
          render={({ field, fieldState: { error } }) => {
            const renderForm = () => {
              if (isEdit) {
                return (
                  <Popover>
                    <PopoverTrigger>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'w-[280px] justify-start text-left font-normal',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        <CalendarIcon />
                        {field.value ? (
                          format(field.value, 'PPP')
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                );
              }

              return field.value ? format(field.value, 'PPP') : '-';
            };

            return (
              <LabelProfile label="Date of Birth" errMessage={error?.message}>
                {isLoading ? (
                  <div className="rounded-sm w-full h-4 animate-pulse bg-gray-300"></div>
                ) : (
                  renderForm()
                )}
              </LabelProfile>
            );
          }}
        />

        <Controller
          control={control}
          name={'gender'}
          render={({ field: { value, onChange }, fieldState: { error } }) => {
            const renderForm = () => {
              if (isEdit) {
                return (
                  <Select
                    placeholder="Select Gender"
                    onChange={onChange}
                    value={value}
                    options={[
                      { label: 'Male', value: 'Male' },
                      { label: 'Female', value: 'Female' },
                    ]}
                  />
                );
              }

              return value || '-';
            };

            return (
              <LabelProfile label="Gender" errMessage={error?.message}>
                {isLoading ? (
                  <div className="rounded-sm w-full h-4 animate-pulse bg-gray-300"></div>
                ) : (
                  renderForm()
                )}
              </LabelProfile>
            );
          }}
        />

        <Controller
          control={control}
          name={'maritalStatus'}
          render={({ field: { value, onChange }, fieldState: { error } }) => {
            const renderForm = () => {
              if (isEdit) {
                return (
                  <Select
                    placeholder="Select Marital Status"
                    onChange={onChange}
                    value={value}
                    options={[
                      { label: 'Single', value: 'Single' },
                      { label: 'Married', value: 'Married' },
                    ]}
                  />
                );
              }

              return value || '-';
            };

            return (
              <LabelProfile label="Marital Status" errMessage={error?.message}>
                {isLoading ? (
                  <div className="rounded-sm w-full h-4 animate-pulse bg-gray-300"></div>
                ) : (
                  renderForm()
                )}
              </LabelProfile>
            );
          }}
        />

        {isEdit && (
          <div>
            <Button type="submit">Save & Update</Button>
            <Button
              variant="outline"
              className="ml-4"
              onClick={() => onCancel()}
            >
              Cancel
            </Button>
          </div>
        )}
      </form>
    </div>
  );
}

export default AdditionalDetails;
