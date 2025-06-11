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
    options: {
      data: {username}
    }
  });

  if(error || !data.user) return {data, error}

  const {error: profileError} = await supabase.from('profiles').insert([
    {
      id: data.user.id,
      username: username
    }
  ])

  return { data, error: error || profileError };
};

// Sign out
export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

// get current username
export const getCurrentUser = async () => {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return { error: userError || new Error("user not found") };
  }

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("username")
    .eq("id", user.id)
    .single();

  return {username: profile?.username || 'Guest', error}
};
