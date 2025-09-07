import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dwccpbzpzcrooxqqmcma.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3Y2NwYnpwemNyb294cXFtY21hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcyMzQ5MTcsImV4cCI6MjA3MjgxMDkxN30.JyV5vOIH_6o4O8NAuXO1o_erZZGsuLW9eAEZMGoKq9M";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
