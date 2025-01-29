<script setup></script>
<template>
  <div>
    <GadgetHome />
    <GadgetLightSwitch />
    <div
      id="root"
      class="w-full bg-neutral-200 transition-all duration-300 dark:bg-neutral-900"
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
