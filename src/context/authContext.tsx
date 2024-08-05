"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

interface AuthContextType {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  signIn: (user: User) => Promise<void>;
  signOut: () => void;
  register: () => Promise<void>; // <-- Agregado
  getUser: () => Promise<void>; // <-- Agregado
}

interface AuthProps {
  children: ReactNode;
}

interface User {
  name?: string;
  password?: string;
  email?: string;
  password_confirmation?: string;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function AuthProvider({ children }: AuthProps) {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [user, setUser] = useState<User>({ email: "", password: "" });

  useEffect(() => {
    console.log(user);
    const checkLogin = () => {
      const cookie = Cookies.get("cookie_token");
      if (cookie) {
        setIsLogged(true);
      }
    };
    checkLogin();
  }, []);

  const register = async () => {
    if (user.password === user.password_confirmation) {
      const response = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          password: user.password,
          name: user.name,
          password_confirmation: user.password_confirmation,
        }),
      });
      const data = await response.json();
      console.log(data);
      if (data.response === "ok") {
        setIsLogged(true);
      }
    } else {
      alert("Invalido");
    }
  };

  const signIn = async () => {
    const response = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    });
    const data = await response.json();
    console.log(data);

    if (response.ok) {
      Cookies.set("cookie_token", data.token, { expires: 1, path: "/" });
      setIsLogged(true);
      setUser(data.user);
    } else {
      alert("Login failed:");
    }
  };

  const signOut = () => {
    console.log("saliendo de sesion");
    Cookies.remove("cookie_token");
    setIsLogged(false);
    setUser({ email: "", password: "" });
  };

  const getUser = async () => {
    const response = await fetch("http://localhost:8000/api/userProfile", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("cookie_token")}`,
      },
    });
    const data = await response.json();
    console.log(data);
    const {name, email} = data.userData;
    console.log(name)
    setUser({...user, name:name})
  };

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        setIsLogged,
        user,
        setUser,
        signIn,
        signOut,
        register,
        getUser, // <-- Agregado aquí
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
}
