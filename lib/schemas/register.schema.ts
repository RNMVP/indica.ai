import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(3, "O nome deve ter no mínimo 3 caracteres.").trim(),
  email: z.string().pipe(
        z.email({ message: "Informe um e-mail válido."})
    ),
  password: z.string().min(6, { message: "A senha deve ter no mínimo 6 caracteres." }),
  confirmPassword: z.string().min(6, { message: "A confirmação de senha deve ter no mínimo 6 caracteres." }),
}).refine(
  (data) => data.password === data.confirmPassword,
  {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  }
);

export type RegisterSchema = z.infer<typeof registerSchema>;