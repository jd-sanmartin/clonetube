<script setup lang="ts">
const sidebarVisible = ref(false);

const menuItems = [
  { label: 'Home', icon: 'pi pi-home' },
  { label: 'Subscriptions', icon: 'pi pi-heart' },
]
</script>

<template>
  <div class="flex flex-col h-screen">
    <Navbar @menu-button-click="sidebarVisible = true" />
    <Sidebar
      v-model:visible="sidebarVisible"
      header="Sidebar"
    >
      <Menu :model="menuItems" />
    </Sidebar>

    <main class="flex overflow-auto">
      <slot />
    </main>
  </div>
</template>

<style>
body {
  margin: unset;
}
</style>
