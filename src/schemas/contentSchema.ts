import z from "zod";

export const ContentSchemaZod = z.object({
  title: z
    .string()
    .min(3, "title must be above 3 characters")
    .max(15, "title must not be 20 characters long."),
  type: z.enum(
    ["youtube", "twitter"],
    "expected one of youtube or twitter only"
  ),
  link: z.url("invalid or empty link"),
});

export type ContentSchemaType = z.infer<typeof ContentSchemaZod>;
