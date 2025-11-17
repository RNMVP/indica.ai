import LoginForm from "@/features/authentication/components/LoginForm";
import AuthLayout from "@/features/authentication/layouts/AuthLayout";

export default function Page() {
    return (
        <AuthLayout title="Login">
            <LoginForm/>
        </AuthLayout>
    )
}