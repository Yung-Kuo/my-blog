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
    class="w-max max-w-full break-words text-2xl text-neutral-800 transition-all dark:text-neutral-400 xl:text-3xl"
    :class="{
      'hover:scale-105 hover:text-neutral-700 dark:hover:text-neutral-300':
        !props.noHover,
      'underline decoration-yellow-500 decoration-2 transition-all hover:!text-white hover:decoration-yellow-400':
        props.isLink,
    }"
  >
    <h3 class="flex items-center gap-2">
      <slot />
    </h3>
  </div>
</template>
