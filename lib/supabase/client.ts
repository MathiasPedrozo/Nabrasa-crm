import { createBrowserClient } from "@supabase/ssr";
import { supabaseKey, supabaseUrl } from "@/lib/supabase/config";

export const createClientSupabaseClient = () => createBrowserClient(supabaseUrl, supabaseKey);
