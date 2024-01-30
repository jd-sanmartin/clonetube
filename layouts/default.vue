<template>
  <div class="flex flex-col h-screen">
    <Navbar />

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
