"use client";

import { LoginSchema } from "@/lib/schemas/login.schema"
import { registerSchema, RegisterSchema } from "@/lib/schemas/register.schema";
import { Button } from "@/shared/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link";
import { useForm } from "react-hook-form"

export default function RegisterForm() {
    const form = useForm<RegisterSchema>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    function handleRegister(values: RegisterSchema) {
        console.log(`
            Dados: 
            Nome: ${values.name}, 
            Email: ${values.email}, 
            Senha: ${values.password}, 
            Confirmar Senha: ${values.confirmPassword}`)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleRegister)} className="flex flex-col gap-5 max-w-96 w-screen px-7">
                {/* Campo Nome */}
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-secondary-foreground font-normal text-base">Nome Completo: </FormLabel>
                            <FormControl>
                                <Input className="h-10" placeholder="Digite seu nome..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Campo Email */}
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-secondary-foreground font-normal text-base">Email: </FormLabel>
                            <FormControl>
                                <Input className="h-10" placeholder="email@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Campo Senha */}
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-secondary-foreground font-normal text-base">Senha: </FormLabel>
                            <FormControl>
                                <Input className="h-10" type="password" placeholder="******" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Confirmar Senha */}
                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-secondary-foreground font-normal text-base">Confirmar senha: </FormLabel>
                            <FormControl>
                                <Input className="h-10" type="password" placeholder="******" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Botão */}
                <Button type="submit" className="text-base hover:bg-[#3B82F6] bg-primary w-full h-10 mt-4">
                    Cadastrar
                </Button>

                {/* Cadastro */}
                <p className="text-center text-sm text-secondary-foreground mt-2">
                    Já possui uma conta? 
                    <Link href="/auth/login" className="text-chart-3 hover:underline ml-1">
                        Faça login
                    </Link>
                </p>
                
            </form>
        </Form>
    )
}