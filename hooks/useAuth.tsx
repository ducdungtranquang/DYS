// hooks/useAuth.ts
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import React from "react";

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  signIn: (email: string, password: string, name: string) => void;
  signUp: (email: string, password: string, name: string) => void;
  signOut: () => void;
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  // Simulate a sign-in function
  const signIn = async (email: string, password: string, name: string) => {
    const dummyUser: User = {
      id: "1",
      email: email,
      name: name,
    };

    setUser(dummyUser);
    router.push("/home"); // Redirect to dashboard after sign-in
  };

  const signUp = async (email: string, password: string, name: string) => {
    signIn(email, password, name);
  };

  // Sign-out function
  const signOut = () => {
    setUser(null);
    router.push("/");
  };

  useEffect(() => {
    const authenticatedUser: User = {
      id: "1",
      email: "example@example.com",
      name: "Dungtqt",
    };
    setUser(authenticatedUser);
  }, []);

  // Provide the AuthContext value
  const contextValue: AuthContextType = {
    user,
    signIn,
    signUp,
    signOut,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

// useAuth hook
export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    console.log("useAuth must be used within an AuthProvider");
  }
  return context;
};
