
<template>
  <div class="card">
    <Menubar>
      <template #start>
        <div class="flex align-items-center gap-2">
          <Button icon="pi pi-bars" class="p-mr-2 p-button-rounded p-button-text" @click="$emit('menuButtonClick')" />
          <InputText placeholder="Search" class="w-8rem sm:w-auto px-3" />
        </div>
      </template>
      <template #end>
        <div class="flex align-items-center gap-2">
          <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
        </div>
      </template>
    </Menubar>
  </div>
</template>
