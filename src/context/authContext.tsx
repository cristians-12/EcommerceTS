"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import Cookies from "js-cookie";

interface AuthContextType {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  signIn: (user: User) => Promise<void>;
  signOut: () => void;
}

interface AuthProps {
  children: ReactNode;
}

interface User {
  name?: string;
  password?: string;
  email?: string;
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
      alert("Login failed: " + (await response.text()));
    }
  };

  const signOut = () => {
    console.log('saliendo de sesion')
    Cookies.remove("cookie_token");
    setIsLogged(false);
    setUser({ email: "", password: "" });
  };

  return (
    <AuthContext.Provider
      value={{ isLogged, setIsLogged, user, setUser, signIn, signOut }}
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
