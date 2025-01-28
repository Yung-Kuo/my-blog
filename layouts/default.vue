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
