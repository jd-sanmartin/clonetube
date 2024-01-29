<template>
  <div class=" flex flex-col p-8">
    <p class="text-center font-bold font-sans text-xl mb-5">Sign In</p>
    <div class="mb-3 flex gap-5">
      <label for="username">Username</label>
      <InputText id="username" type="text" v-model="username" />
    </div>
    <div class="mb-5 flex gap-5">
      <label for="password">Password</label>
      <Password id="password" v-model="password" />
    </div>
    <Button class="border p-2 justify-self-center" label="Login" @click="login" />
    Are you new? <NuxtLink class="underline" to="/auth/signup">Sign up</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { signInWithEmailAndPassword } from 'firebase/auth';

const username = ref('');
const password = ref('');

const login = () => {
  const nuxtApp = useNuxtApp();
  const authStore = useAuthStore();

  signInWithEmailAndPassword(nuxtApp.$auth, username.value, password.value)
    .then((userCredential: { user: any }) => {
      const user = userCredential.user;
      authStore.logIn(user)
      nuxtApp.$router.push('/')
    })
    .catch((error) => {
      // TODO: handle error
    });
};
</script>
