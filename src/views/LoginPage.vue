<script setup>
     import { ref } from 'vue';
     import { useRoute, useRouter } from 'vue-router'; 
     import { useAuth } from '../composables/useAuth';
     const { login, logout } = useAuth();

     const route = useRoute();
     const router = useRouter();

     const username = ref('');
     const password = ref('');

     const loginUserIn = async () => {
          if (await login(username.value, password.value)) {
               if(route.query.redirect) {
                    router.push(route.query.redirect);
               } else {
                    router.push({ name: 'SettingsPage' });
               }
          } else {
               logout();
          }
     }

</script>

<template>
     <form class="login-form" @submit.prevent="login">

          <div>
               <label for="username">Username:
                    <input type="text" v-model="username" placeholder="Username" />
               </label>
          </div>

          <div>
               <label for="Password">Password:
                    <input type="password" v-model="password" placeholder="Password" />
               </label> 
          </div>

          <button @click.prevent="loginUserIn" class="">LOGIN</button>
     </form>
</template>