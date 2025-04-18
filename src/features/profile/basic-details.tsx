import { UserIcon } from 'lucide-react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import LabelProfile from '@/components/elements/label-profile';
import { BasicDetailsSchema, BasicDetailsType } from './schema';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Select from '@/components/elements/select';

const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};

interface BasicDetailsProps {
  onSubmit?: (data: BasicDetailsType) => void;
  isLoading?: boolean;
  data?: any;
  isEdit?: boolean;
  onCancel?: () => void;
}

function BasicDetails(props: BasicDetailsProps) {
  const { onSubmit, isLoading, data, isEdit, onCancel } = props;

  const { control, handleSubmit } = useForm<BasicDetailsType>({
    resolver: zodResolver(BasicDetailsSchema),
    defaultValues: {
      image: '',
      salutation: '',
      firstName: '',
      lastName: '',
      email: '',
    },
    values: {
      image: data?.image || '',
      salutation: data?.salutation || '',
      firstName: data?.firstName || '',
      lastName: data?.lastName || '',
      email: data?.email || '',
    },
  });

  return (
    <div className="flex flex-col md:flex-row gap-10">
      <div>
        <Controller
          control={control}
          name={'image'}
          render={({ field: { onChange, value } }) => {
            if (isLoading) {
              return (
                <div className="rounded-full w-36 h-36 animate-pulse bg-gray-300"></div>
              );
            }

            if (isEdit) {
              return (
                <label className="cursor-pointer inline-flex md:flex flex-col items-center">
                  {value ? (
                    <img
                      src={value}
                      alt="profile picture"
                      className="h-36 w-36 object-contain object-center"
                    />
                  ) : (
                    <UserIcon className="h-36 w-36" />
                  )}

                  <Input
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files?.[0];

                      fileToBase64(file as File).then((base64) => {
                        console.log('base64', base64);
                        onChange(base64 as string);
                      });
                    }}
                    className="hidden"
                    accept=".png, .jpg, .jpeg"
                  />
                  <span className="underline text-sm">Upload image</span>
                </label>
              );
            }

            return value ? (
              <img
                src={value}
                alt="profile picture"
                className="h-36 w-36 object-contain object-center"
              />
            ) : (
              <UserIcon className="h-36 w-36" />
            );
          }}
        />
      </div>
      <form
        className="flex flex-col gap-6 flex-1 max-w-[500px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          control={control}
          name={'salutation'}
          render={({ field: { value, onChange }, fieldState: { error } }) => {
            const renderForm = () => {
              if (isEdit) {
                return (
                  <Select
                    placeholder="Select Salutation"
                    onChange={onChange}
                    value={value}
                    options={[
                      { label: 'Mr', value: 'Mr' },
                      { label: 'Mrs', value: 'Mrs' },
                      { label: 'Ms', value: 'Ms' },
                    ]}
                  />
                );
              }

              return value || '-';
            };

            return (
              <LabelProfile
                label="Salutation"
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
          name={'firstName'}
          render={({ field: { value, onChange }, fieldState: { error } }) => {
            const renderForm = () => {
              if (isEdit) {
                return <Input onChange={onChange} value={value} />;
              }

              return value || '-';
            };

            return (
              <LabelProfile
                label="First Name"
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
          name={'lastName'}
          render={({ field: { value, onChange }, fieldState: { error } }) => {
            const renderForm = () => {
              if (isEdit) {
                return <Input onChange={onChange} value={value} />;
              }

              return value || '-';
            };

            return (
              <LabelProfile
                label="Last Name"
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
          name={'email'}
          render={({ field: { value, onChange }, fieldState: { error } }) => {
            const renderForm = () => {
              if (isEdit) {
                return <Input onChange={onChange} value={value} />;
              }

              return value || '-';
            };

            return (
              <LabelProfile
                label="Email"
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

export default BasicDetails;
