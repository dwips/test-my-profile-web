import * as z from 'zod';
import { intervalToDuration } from 'date-fns';

export const BasicDetailsSchema = z.object({
  image: z.string().optional(),
  salutation: z.string().min(1, 'Salutation is required'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
});

export type BasicDetailsType = z.infer<typeof BasicDetailsSchema>;

const calculateAge = (dob: string): number => {
  const interval = intervalToDuration({
    start: new Date(dob),
    end: new Date(),
  });

  return interval.years ? interval.years : 0;
};

export const AdditionalDetailsSchema = z
  .object({
    address: z.string().min(1, 'Address is required'),
    country: z.string().min(1, 'Country is required'),
    postalCode: z.string().min(1, 'Postal code is required'),
    dateOfBirth: z.date().optional(),
    gender: z.string().optional(),
    maritalStatus: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.dateOfBirth) {
        const age = calculateAge(data.dateOfBirth.toString());
        return age >= 17;
      }
      return true;
    },
    {
      message: 'You must be at least 17 years old',
      path: ['dateOfBirth'],
    }
  );

export type AdditionalDetailsType = z.infer<typeof AdditionalDetailsSchema>;

export const SpouseDetailsSchema = z.object({
  spouseSalutation: z.string().optional(),
  spouseFirstName: z.string().optional(),
  spouseLastName: z.string().optional(),
});

export type SpouseDetailsType = z.infer<typeof SpouseDetailsSchema>;

export const PersonalPreferencesSchema = z.object({
  hobbies: z.string().optional(),
  sports: z.string().optional(),
  musics: z.string().optional(),
  movies: z.string().optional(),
});

export type PersonalPreferencesType = z.infer<typeof PersonalPreferencesSchema>;
