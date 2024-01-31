<template>
  <div class=" flex flex-col p-8">
    <p class="text-center font-bold font-sans text-xl mb-5">Sign Up</p>
    <div class="mb-3 flex gap-5">
      <InputText
        v-model="email"
        type="text"
        placeholder="Email"
        class="py-2 px-5 w-full"
      />
    </div>
    <div class="mb-3 flex gap-5">
      <InputText
        v-model="password"
        type="password"
        placeholder="Password"
        class="py-2 px-5 w-full"
      />
    </div>
    <div class="mb-5 flex gap-5">
      <InputText
        type="password"
        placeholder="Confirm Password"
        class="py-2 px-5 w-full"
      />
    </div>
    <Button class="border p-2" label="Sign Up" @click="signUp" />

    <span>Already have an account? <NuxtLink class="underline" to="/auth/signin">Sign in</NuxtLink></span>
  </div>
</template>

<script setup lang="ts">
import { createUserWithEmailAndPassword } from 'firebase/auth';

const email = ref('');
const password = ref('');

const signUp = () => {
  const nuxtApp = useNuxtApp();
  const authStore = useAuthStore();

  createUserWithEmailAndPassword(nuxtApp.$auth, email.value, password.value)
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
