import * as z from 'zod';

export const schema = z.object({
  userId: z.string().min(1, { message: 'User ID is required' }),
  password: z.string().min(1, { message: 'Password is required' }),
  keepMeLoggedIn: z.boolean().optional(),
});

export type FormSchema = z.infer<typeof schema>;
