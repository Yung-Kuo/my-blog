<script setup></script>
<template>
  <div
    id="root"
    class="h-screen w-full overflow-y-scroll bg-neutral-200 transition-all duration-300 dark:bg-neutral-900"
  >
    <!-- <LayoutHeader class="sticky top-0" /> -->
    <GadgetLightSwitch />
    <slot />
  </div>
</template>
