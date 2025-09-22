<script setup></script>
<template>
  <div>
    <div class="fixed top-6 z-30 flex gap-2 lg:gap-6 w-full justify-between px-6">
      <GadgetHome />
      <div class="flex gap-2 lg:gap-6">
        <GadgetGithub />
        <GadgetResume />
        <GadgetLightSwitch />
      </div>
    </div>
    <div
      id="root"
      class="w-full bg-neutral-100 px-6 py-40 transition-all duration-300 dark:bg-neutral-900 xl:px-20 xl:py-40 xl:pt-24"
    >
      <slot />
    </div>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
