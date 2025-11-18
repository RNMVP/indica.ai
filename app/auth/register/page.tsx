import RegisterForm from "@/features/authentication/components/RegisterForm";
import AuthLayout from "@/features/authentication/layouts/AuthLayout";

export default function Page() {
    return (
        <AuthLayout title="Cadastro">
            <RegisterForm/>
        </AuthLayout>
    )
}