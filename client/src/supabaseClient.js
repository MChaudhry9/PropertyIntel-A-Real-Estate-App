import { createClient } from '@supabase/supabase-js';

// Supabase Project URL and Anon Key
const supabaseUrl = 'https://cqxpnpyadahljkjdvwgj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxeHBucHlhZGFobGpramR2d2dqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxMjc0NjgsImV4cCI6MjA0OTcwMzQ2OH0.Di0j390u55HFHC74PKEKZJR1n17ySCzSOIKWWVjQ7E0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey); //database password: y3Mv4FhgfSihAMYy
