import * as z from 'zod';

export const schema = z
  .object({
    userId: z.string().min(1, { message: 'User ID is required' }),
    password: z.string().min(1, { message: 'Password is required' }),
    confirmPassword: z
      .string()
      .min(1, { message: 'Confirm Password is required' }),
  })
  .refine(
    (data) => {
      if (data.password.length > 0 || data.confirmPassword.length > 0) {
        return data.password === data.confirmPassword;
      }
    },
    {
      message: 'Passwords do not match',
      path: ['confirmPassword'],
    }
  );

export type FormSchema = z.infer<typeof schema>;
