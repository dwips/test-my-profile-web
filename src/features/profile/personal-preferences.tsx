import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import LabelProfile from '@/components/elements/label-profile';
import { PersonalPreferencesSchema, PersonalPreferencesType } from './schema';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface PersonalPreferencesProps {
  onSubmit?: (data: PersonalPreferencesType) => void;
  isLoading?: boolean;
  data?: any;
  isEdit?: boolean;
  onCancel?: () => void;
}

function PersonalPreferences(props: PersonalPreferencesProps) {
  const { onSubmit, isLoading, data, isEdit, onCancel } = props;

  const { control, handleSubmit } = useForm<PersonalPreferencesType>({
    resolver: zodResolver(PersonalPreferencesSchema),

    values: {
      hobbies: data?.hobbies || '',
      sports: data?.sports || '',
      musics: data?.musics || '',
      movies: data?.movies || '',
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
          name={'hobbies'}
          render={({ field: { value, onChange }, fieldState: { error } }) => {
            const renderForm = () => {
              if (isEdit) {
                return <Textarea onChange={onChange} value={value} />;
              }

              return value || '-';
            };

            return (
              <LabelProfile
                label="Hobbies and interests"
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
          name={'sports'}
          render={({ field: { value, onChange }, fieldState: { error } }) => {
            const renderForm = () => {
              if (isEdit) {
                return <Textarea onChange={onChange} value={value} />;
              }

              return value || '-';
            };

            return (
              <LabelProfile
                label="Favorite Sport(s)"
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
          name={'musics'}
          render={({ field: { value, onChange }, fieldState: { error } }) => {
            const renderForm = () => {
              if (isEdit) {
                return <Textarea onChange={onChange} value={value} />;
              }

              return value || '-';
            };

            return (
              <LabelProfile
                label="Prefered Music genre(s)"
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
          name={'movies'}
          render={({ field: { value, onChange }, fieldState: { error } }) => {
            const renderForm = () => {
              if (isEdit) {
                return <Textarea onChange={onChange} value={value} />;
              }

              return value || '-';
            };

            return (
              <LabelProfile
                label="Prefered Movie/TV Show(s)"
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

export default PersonalPreferences;
