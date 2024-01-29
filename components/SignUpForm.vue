<template>
  <div class=" flex flex-col p-8">
    <p class="text-center font-bold font-sans text-xl mb-5">Sign Up</p>
    <div class="mb-3 flex gap-5">
      <label for="username">Username</label>
      <InputText id="username" type="text" v-model="username" />
    </div>
    <div class="mb-5 flex gap-5">
      <label for="password">Password</label>
      <Password id="password" v-model="password" />
    </div>
    <Button class="border p-2" label="Sign Up" @click="signUp" />

    Already have an account? <NuxtLink class="underline" to="/auth/signin">Sign in</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { createUserWithEmailAndPassword } from 'firebase/auth';

const username = ref('');
const password = ref('');

const signUp = () => {
  const nuxtApp = useNuxtApp();
  const authStore = useAuthStore();

  createUserWithEmailAndPassword(nuxtApp.$auth, username.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      authStore.logIn(user)
      nuxtApp.$router.push('/')
    })
    .catch((error) => {
      // TODO: handle error
    });
};
</script>
