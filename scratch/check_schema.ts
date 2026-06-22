import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bssusudaiacmgudqfxfe.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzc3VzdWRhaWFjbWd1ZHFmeGZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzNDE0MDcsImV4cCI6MjA5NjkxNzQwN30.-H3kyON1xrTl5ppc7gM6mlLm7EVrjfTSUjlPjAUSgcA';
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkSchema() {
  const { data, error } = await supabase.from('profiles').select('*').limit(1);
  console.log('Profiles Data:', data);
  console.log('Profiles Error:', error);
}

checkSchema();
