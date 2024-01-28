<script setup lang="ts">
const sidebarVisible = ref(false);

const menuItems = [
  { label: 'Home', icon: 'pi pi-home' },
  { label: 'Subscriptions', icon: 'pi pi-heart' },
]
</script>

<template>
  <div class="layout">
    <Navbar @menu-button-click="sidebarVisible = true" />
    <Sidebar
      v-model:visible="sidebarVisible"
      header="Sidebar"
    >
      <Menu :model="menuItems" />
    </Sidebar>

    <main class="layout__content">
      <slot />
    </main>
  </div>
</template>

<style>
body {
  margin: unset;
}

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.layout__content {
  display: flex;
  overflow: auto;
}
</style>
