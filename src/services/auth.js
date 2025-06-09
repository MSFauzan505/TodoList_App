import { supabase } from "../lib/supabaseClient";

// check session
export const isLogged = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const { data: userData } = await supabase.auth.getUser();
  return !!session || !!userData?.user;
};

// Sign in
export const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

// Sign up
export const signUp = async (email, password, username) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    username,
  });

  return { data, error };
};

// Sign out
export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

export const getCurrentUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return { user };
};
