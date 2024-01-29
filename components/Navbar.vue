<template>
  <div class="card">
    <Menubar>
      <template #start>
        <div class="flex align-items-center gap-2">
          <Button icon="pi pi-bars" class="p-mr-2 p-button-rounded p-button-text" @click="$emit('menuButtonClick')" />
          <span style="display: flex; align-items: center;">CloneTube</span>
          <InputText placeholder="Search" class="w-8rem sm:w-auto px-3" />
        </div>
      </template>
      <template #end>
        <div class="flex align-items-center gap-2">
          <!-- TODO: Fix outlined button -->
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
