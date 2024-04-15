import { z } from "zod";

const registrationSchema = z.object({
  firstname: z.string({ required_error: "firstname is required" }),
  lastname: z.string({ required_error: "lastname is required" }),
  username: z.string({ required_error: "username is required" }),

  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Not a valid email"),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(8, { message: "password must have at least 8 characters" }),

  role: z.string({ required_error: "Role is required" }),
});
export default registrationSchema;
