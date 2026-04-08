// import { createContext, useContext, useState, useEffect, ReactNode } from "react";
// import { supabase } from "@/integrations/supabase/client";
// import { lovable } from "@/integrations/lovable";
// import type { User, Session } from "@supabase/supabase-js";

// interface AuthContextType {
//   user: User | null;
//   session: Session | null;
//   loading: boolean;
//   signUp: (email: string, password: string, fullName: string) => Promise<{ error: Error | null }>;
//   signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
//   signInWithGoogle: () => Promise<{ error: Error | null }>;
//   signOut: () => Promise<void>;
// }

// const AuthContext = createContext<AuthContextType | null>(null);

// export const useAuth = () => {
//   const ctx = useContext(AuthContext);
//   if (!ctx) throw new Error("useAuth must be within AuthProvider");
//   return ctx;
// };

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<User | null>(null);
//   const [session, setSession] = useState<Session | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
//       setSession(session);
//       setUser(session?.user ?? null);
//       setLoading(false);
//     });

//     supabase.auth.getSession().then(({ data: { session } }) => {
//       setSession(session);
//       setUser(session?.user ?? null);
//       setLoading(false);
//     });

//     return () => subscription.unsubscribe();
//   }, []);

//   const signUp = async (email: string, password: string, fullName: string) => {
//     const { error } = await supabase.auth.signUp({
//       email,
//       password,
//       options: { data: { full_name: fullName } },
//     });
//     return { error: error ? new Error(error.message) : null };
//   };

//   const signIn = async (email: string, password: string) => {
//     const { error } = await supabase.auth.signInWithPassword({ email, password });
//     return { error: error ? new Error(error.message) : null };
//   };

//   const signInWithGoogle = async () => {
//     const result = await lovable.auth.signInWithOAuth("google", {
//       redirect_uri: window.location.origin,
//       extraParams: {
//         prompt: "select_account",
//       },
//     });

//     if (result.error) {
//       return { error: result.error instanceof Error ? result.error : new Error(String(result.error)) };
//     }

//     return { error: null };
//   };

//   const signOut = async () => {
//     await supabase.auth.signOut();
//   };

//   return (
//     <AuthContext.Provider value={{ user, session, loading, signUp, signIn, signInWithGoogle, signOut }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { User, Session } from "@supabase/supabase-js";

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string, fullName: string) => Promise<{ error: Error | null }>;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signInWithGoogle: () => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be within AuthProvider");
  return ctx;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async (email: string, password: string, fullName: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    return { error: error ? new Error(error.message) : null };
  };

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    return { error: error ? new Error(error.message) : null };
  };

  // ✅ FIXED GOOGLE LOGIN
  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
        queryParams: {
          prompt: "select_account",
        },
      },
    });

    return { error: error ? new Error(error.message) : null };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        loading,
        signUp,
        signIn,
        signInWithGoogle,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};