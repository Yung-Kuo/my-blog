<script setup>
const props = defineProps({
  noHover: {
    type: Boolean,
    default: false,
  },
  isLink: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <div
    class="w-max max-w-full break-words text-2xl text-neutral-800 transition-all dark:text-neutral-300 xl:text-3xl"
    :class="{
      'hover:scale-105 hover:text-neutral-700 dark:hover:text-neutral-200':
        !props.noHover,
      'underline decoration-yellow-400 decoration-4 underline-offset-8 transition-all hover:text-neutral-500 hover:decoration-yellow-600 dark:decoration-2 dark:hover:text-white':
        props.isLink,
    }"
  >
    <h3 class="flex items-center gap-2">
      <slot />
    </h3>
  </div>
</template>
