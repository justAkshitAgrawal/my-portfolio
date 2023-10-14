import z from "zod";

export const guestSignShema = z.object({
  name: z.string().min(1, "Name must be provided"),
  message: z
    .string()
    .min(1, "Message must be provided")
    .max(100, "Message must be less than 100 characters"),
});
