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
     <form class="m-10" @submit.prevent="login">

          <div>
               <label for="username" class="block mb-2 font-bold">Username:
                    <input type="text" v-model="username" placeholder="Username" />
               </label>
          </div>

          <div>
               <label for="Password" class="block mb-2 font-bold">Password:
                    <input type="password" v-model="password" placeholder="Password" />
               </label> 
          </div>

          <button @click.prevent="loginUserIn" class="bg-green-500 mt-4 px-4 py-2 hover:bg-green-800 hover:text-white">LOGIN</button>
     </form>
</template>