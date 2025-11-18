"use client";

import { loginSchema, LoginSchema } from "@/lib/schemas/login.schema"
import { Button } from "@/shared/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link";
import { useForm } from "react-hook-form"

export default function LoginForm() {
    const form = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    function handleLogin(values: LoginSchema) {
        console.log(`Dados: Email: ${values.email}, Senha: ${values.password}`)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleLogin)} className="flex flex-col gap-5 max-w-96 w-screen px-7">
                {/* Campo Email */}
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-normal text-lg">Email: </FormLabel>
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
                            <FormLabel className="font-normal text-lg">Senha: </FormLabel>
                            <FormControl>
                                <Input className="h-10" type="password" placeholder="******" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Botão */}
                <Button type="submit" className="text-base hover:bg-[#3B82F6] bg-[#005bed] w-full h-10 mt-4">
                    Entrar
                </Button>

                {/* Cadastro */}
                <p className="text-center text-sm text-gray-600 hover:text-gray-800 mt-2">
                    Não possui uma conta? 
                    <Link href="/auth/register" className="text-blue-600 hover:underline ml-1">
                        Cadastre-se
                    </Link>
                </p>
                
            </form>
        </Form>
    )
}