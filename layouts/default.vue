<script setup></script>
<template>
  <div
    id="root"
    class="h-screen w-full overflow-y-scroll bg-neutral-200 transition-all duration-300 dark:bg-neutral-900"
  >
    <GadgetHome />
    <GadgetLightSwitch />
    <slot />
  </div>
</template>
