import z from "zod";

const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const SignUpZodSchema = z.object({
  username: z
    .string()
    .min(3, "username must be above 3 characters")
    .max(30, "username must not be 30 characters long."),
  email: z.email(),
  password: z
    .string()
    .regex(
      passwordRegex,
      "password must be 8+ chars, include uppercase, number & symbol"
    ),
});

export type SignSchemaType = z.infer<typeof SignUpZodSchema>;
