<template>
  <div class="flex flex-col px-8 pb-8 pt-4 card">
    <p class="text-center font-bold font-sans text-3xl mb-5">Sign In</p>
    <div class="mb-3 flex gap-5">
      <InputText
        v-model="username"
        type="text"
        placeholder="Email"
        class="py-2 px-5 w-full"
      />
    </div>
    <div class="mb-5 flex gap-5">
      <InputText
        v-model="password"
        type="password"
        placeholder="Password"
        class="py-2 px-5 w-full"
      />
    </div>
    <Button class="border p-2 justify-self-center" label="Login" @click="login" />
    <span class="mt-3">Are you new? <NuxtLink class="underline" to="/auth/signup">Sign up</NuxtLink></span>
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
