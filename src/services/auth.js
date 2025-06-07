import { supabase } from "../lib/supabaseClient";

// Sign in
export const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

// Sign out
export const signOut = async () =>{
    const {error} = await supabase.auth.signOut()
    return {error}
}

export const getCurrentUser = ()=>{
    return supabase.auth.getUser()
}

