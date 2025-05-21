import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jheytdveryzjwznjluwj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpoZXl0ZHZlcnl6and6bmpsdXdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxODcwNDcsImV4cCI6MjA2MTc2MzA0N30.2Y0Ko7cwH3q8YfOOy1sADypoWzcNNxqSvU8a8jrc2-Q';

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 