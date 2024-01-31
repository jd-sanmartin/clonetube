<template>
  <div class="card">
    <Menubar>
      <template #start>
        <NuxtLink to="/" class="flex items-center pl-3">
          <span class="text-2xl font-bold">Clone<span class="text-green-500">Tube</span></span>
        </NuxtLink>
      </template>
      <template #end>
        <div class="flex align-items-center gap-2">
          <Button label="Log out" class="border p-2" @click="logOut" />
        </div>
      </template>
    </Menubar>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';

const authStore = useAuthStore();

const logOut = () => { 
  authStore.logOut();
  useNuxtApp().$router.push('/auth/signin') 
}
</script>
