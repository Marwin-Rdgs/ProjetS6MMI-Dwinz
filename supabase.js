import { createClient } from '@supabase/supabase-js';
import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient';

const SUPABASE_URL = 'https://aglwlxinesjnvxdjfdqx.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnbHdseGluZXNqbnZ4ZGpmZHF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcxMTc2OTMsImV4cCI6MjAyMjY5MzY5M30.Xkfnez7lHZcwnMYNd8dIkoVJWq0nUCN2iNpPE19UlYA'
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

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
