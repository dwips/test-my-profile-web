import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import LabelProfile from '@/components/elements/label-profile';
import { SpouseDetailsSchema, SpouseDetailsType } from './schema';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Select from '@/components/elements/select';

interface SpouseDetailsProps {
  onSubmit?: (data: SpouseDetailsType) => void;
  isLoading?: boolean;
  data?: any;
  isEdit?: boolean;
  onCancel?: () => void;
}

function SpouseDetails(props: SpouseDetailsProps) {
  const { onSubmit, isLoading, data, isEdit, onCancel } = props;

  const { control, handleSubmit } = useForm<SpouseDetailsType>({
    resolver: zodResolver(SpouseDetailsSchema),
    values: {
      spouseSalutation: data?.spouseSalutation || '',
      spouseFirstName: data?.spouseFirstName || '',
      spouseLastName: data?.spouseLastName || '',
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
          name={'spouseSalutation'}
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
          name={'spouseFirstName'}
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
          name={'spouseLastName'}
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

export default SpouseDetails;
