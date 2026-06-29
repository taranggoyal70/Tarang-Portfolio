import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zryzndiqpjsytzihbiab.supabase.co";
const supabaseAnonKey = "sb_publishable_LyjnSV8vVZl2Rm0VAVK2Mg_lk5sOWQU";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
