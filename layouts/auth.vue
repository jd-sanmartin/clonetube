<template>
  <div class="flex flex-col-reverse justify-center md:flex-row px-10 items-center gap-5 h-screen w-screen mesh-background">
    <div class="w-full sm:w-1/2 bg-gray-900 rounded-md p-5">
      <slot />
    </div>

    <div class="flex flex-col w-full sm:w-1/2">
      <h1 class="text-5xl font-bold">Welcome to <span>Clone<span class="text-green-500">Tube</span></span></h1>
      <p class="text-xl font-light">A YouTube clone built with Nuxt.js and Firebase</p>
    </div>
  </div>
</template>

<style>
.mesh-background {
  background-color:hsla(120,100%,0%,1);
  background-image:
  radial-gradient(at 32% 4%, #280a8a 0px, transparent 50%),
  radial-gradient(at 62% 49%, #2c0242 0px, transparent 50%),
  radial-gradient(at 35% 98%, #0d007f 0px, transparent 50%),
  radial-gradient(at 22% 1%, #1d0372 0px, transparent 50%),
  radial-gradient(at 71% 39%, #2ab170 0px, transparent 50%),
  radial-gradient(at 21% 67%, #18004d 0px, transparent 50%),
  radial-gradient(at 72% 82%, #620165 0px, transparent 50%);
}
</style>
