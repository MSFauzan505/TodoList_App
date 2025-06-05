import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ixpgqzkyvkcdwedpmkeg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4cGdxemt5dmtjZHdlZHBta2VnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwODI5MjIsImV4cCI6MjA2NDY1ODkyMn0.ZqhgU4CmjyZEWg9X60ak6ls81JOYfib1SNOILLenirI";

export const supabase = createClient(supabaseUrl, supabaseKey);