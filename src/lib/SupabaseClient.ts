// import 'react-native-url-polyfill/auto';
// import { createClient } from '@supabase/supabase-js';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const SUPABASE_URL = 'https://vkgxbyhuofempxoixowo.supabase.co';
// const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrZ3hieWh1b2ZlbXB4b2l4b3dvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ5OTg4MDUsImV4cCI6MjA3MDU3NDgwNX0.GIGHv7VjJkTev8O4gNQ87B9_edp8eGL_OPXNU0IFb-k';

// export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
//   auth: {
//     storage: AsyncStorage,
//     autoRefreshToken: true,
//     persistSession: true,
//     detectSessionInUrl: false, 
//   },
// });
// // src/lib/supabaseAuth.js
// export const signUpUser = async (email, password) => {
//   const { data, error } = await supabase.auth.signUp({
//     email,
//     password,
//   });
//   return { data, error };
// };

// export const loginUser = async (email, password) => {
//   const { data, error } = await supabase.auth.signInWithPassword({
//     email,
//     password,
//   });
//   return { data, error };
// };

// export const logoutUser = async () => {
//   const { error } = await supabase.auth.signOut();
//   return error;
// };

// export const getCurrentUser = async () => {
//   const { data, error } = await supabase.auth.getUser();
//   return { user: data?.user, error };
// };

// export const onAuthChange = (callback) => {
//   const { data: listener } = supabase.auth.onAuthStateChange(callback);
//   return listener;
// };
