import { createClient } from '@supabase/supabase-js';
import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient';

const SUPABASE_URL = 'https://nmblwsaflcsvzrwfkybl.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tYmx3c2FmbGNzdnpyd2ZreWJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQyNDE0NDYsImV4cCI6MTk4OTgxNzQ0Nn0.kUNnwOb667kh1RG0YNFBMCDubpEjaE_2EyhAuPEtMhY'
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export const user = ref()
supabase.auth.onAuthStateChange(async () => {
    const { data, error } = await supabase.auth.getSession()
    if(data.session.user){
    user.value = data.session.user
    console.log(user.value)

    } else {
        user.value = null;
        console.log(user.value)

    }
})
console.log(user.value)
