<script setup></script>
<template>
  <div>
    <div class="fixed right-6 top-6 flex gap-2 lg:gap-6">
      <GadgetHome />
      <GadgetGithub />
      <GadgetResume />
      <GadgetLightSwitch />
    </div>
    <div
      id="root"
      class="w-full bg-neutral-100 px-6 py-24 transition-all duration-300 dark:bg-neutral-900 xl:px-20 xl:py-40"
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
