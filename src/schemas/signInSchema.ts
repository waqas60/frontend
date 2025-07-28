import z from "zod";

export const SignInZodSchema = z.object({
  email: z.email(),
  password: z.string(),
});

export type SignInSchemaType = z.infer<typeof SignInZodSchema>;
