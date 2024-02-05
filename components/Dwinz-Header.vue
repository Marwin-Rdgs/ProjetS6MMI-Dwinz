<script setup>
// import { createClient } from '@supabase/supabase-js';
// import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient';

// // const SUPABASE_URL = 'https://aglwlxinesjnvxdjfdqx.supabase.co'
// // const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnbHdseGluZXNqbnZ4ZGpmZHF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcxMTc2OTMsImV4cCI6MjAyMjY5MzY5M30.Xkfnez7lHZcwnMYNd8dIkoVJWq0nUCN2iNpPE19UlYA'
// const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// const user = ref()
// console.log(user.value);
// supabase.auth.onAuthStateChange(async () => {
//     const { data, error } = await supabase.auth.getSession()
//     user.value = data.session.user
//     console.log('tu fais quoi toi')
// })
import {user} from '../supabase'
</script>

<template>
        <div class="header">
            <NuxtLink to="/"><img src="../assets/icons/LogoComplet.svg" alt="Logo Dwinz" class="header__logo"></NuxtLink>
            <h1 class="header__title">Refléter votre personnalité à travers un immense univers musicale</h1>
            <div class="header__profil">
              <NuxtLink to="/profil/12"><img src="../assets/icons/profil.svg" alt="Icon to settings" class="header__settings"></NuxtLink>
              <p class="header__profil-connect"><span @click="loginSpotify()">Connexion</span> / <span @click="logout">Déconnexion</span></p>
            </div>
    </div>
</template>

<script>
import { createClient } from '@supabase/supabase-js';
const SUPABASE_URL = 'https://aglwlxinesjnvxdjfdqx.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnbHdseGluZXNqbnZ4ZGpmZHF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcxMTc2OTMsImV4cCI6MjAyMjY5MzY5M30.Xkfnez7lHZcwnMYNd8dIkoVJWq0nUCN2iNpPE19UlYA'
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

export default {
    methods: {  
       //this method allows to release the connexion with the Google account 
async logout(){ 
      try { 
        const { user, session, error } = await supabase.auth.signOut(); 
        if (error) throw error; 
        document.getElementById('status').innerHTML='You are disconnected !' 
      } catch (error) { 
        alert(error.error_description || error.message); 
      }  
    }, 
    //this method allows to log in the system using Google provider
    async loginSpotify(){ 
      try { 
        const { user, session, error } = await supabase.auth.signInWithOAuth({ 
          provider: 'spotify', 
        }); 
        if (error) throw error; 
      } catch (error) { 
        alert(error.error_description || error.message); 
      }  
    },
    },
    mounted() {
        supabase.auth.onAuthStateChange(async (event, session) => {
        if (event == 'PASSWORD_RECOVERY') {
          const newPassword = prompt('What would you like your new password to be ?')
          const { data,error } = await supabase.auth.update ({
            password: newPassword,
          })
  
          if (data) alert ('Password updated successfully')
          if (error) alert ('There was an error updating your password')
        }
      })
    }
}

</script>

<style lang="scss">
    .header {
        background-color: $d-black;
        
        display: grid;
        grid-template-columns: 20% 60% 20%;
        margin-bottom: 10%;

        align-items: center;
        justify-content: center;

        &__logo {
            width: 100%;
            margin: 12%;

            transition: all 0.3s ease;
            transform: scale(100%);

            @include x-large-up {
                width: 40%;
            }

            &:hover {
                transform: scale(110%);
            }
        }

        &__title {
            margin-left: auto;
            margin-right: auto;
            
            text-align: center;
            
            font-family: $primary-font-family;
            color: $d-white;

            font-size: 14px;
            @include x-large-up {
                font-size: 24px;
                width: 50%;
            }
        }

        &__settings {
            
            @include x-large-up {
                width: 15%;
            }
            margin-left: auto;
            margin-right: auto;

            transform: scale(100%);
            transition: all 0.3s ease;

            &:hover {
                transform: scale(105%);
            }
        }

        &__profil {

          display: grid;
          
          &-connect {
            background-color: rgba(255, 0, 0, 0);
            border: none;

            color: $d-white;
            font-family: $secondary-font-family;
            font-weight: normal;

            text-align: center;

            font-size: 8px;
            @include x-large-up {
              font-size: 14px;
            }

            &:hover {
              text-decoration: underline;
              font-weight: bold;
            }
            
          }
        }
    }
</style>