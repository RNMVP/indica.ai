"use client";

import { createContext, useCallback, useEffect, useState } from "react";
import { User } from "../models/user";
import { RegisterDTO } from "@/lib/schemas/register.schema";
import { LoginDTO } from "@/lib/schemas/login.schema";
import { useRouter } from "next/navigation";

interface AuthContextProps {
  user: User | null;
  loading: boolean;
  login: (data: LoginDTO) => Promise<void>;
  register: (data: RegisterDTO) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const loadUser = useCallback(() => {
    const stored = localStorage.getItem("auth:user");
    if (stored) setUser(JSON.parse(stored));
    setLoading(false);
  }, []);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  async function login(data: LoginDTO) {
    setLoading(true);

    const user = {
      id: "teste-id",
      name: "Teste Usuário",
      email: data.email,
    };

    setUser(user);
    localStorage.setItem("auth:user", JSON.stringify(user));

    setLoading(false);
  }

  async function register(data: RegisterDTO) {
    setLoading(true);

    // const newUser = {
    //   id: "teste-id",
    //   name: data.name,
    //   email: data.email,
    //   password: data.password,
    // };

    router.push("/auth/login");

    setLoading(false);
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("auth:user");
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
