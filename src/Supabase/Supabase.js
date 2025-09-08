import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const Supabase = createClient(
  process.env.NEXT_SUPABASE_PUBLIC_URL,
  process.env.NEXT_SUPABASE_ANON_API_KEY
);
