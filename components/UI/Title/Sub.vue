<script setup>
const props = defineProps({
  noHover: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <h3
    class="w-max text-2xl text-neutral-600 transition-all dark:text-neutral-400 xl:text-3xl"
    :class="{
      'hover:scale-105 hover:text-neutral-700 dark:hover:text-neutral-300':
        !props.noHover,
    }"
  >
    <slot />
  </h3>
</template>
