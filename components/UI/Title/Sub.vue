<script setup>
const props = defineProps({
  noHover: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <div
    class="w-max max-w-full break-words text-2xl text-neutral-600 transition-all dark:text-neutral-400 xl:text-3xl"
    :class="{
      'hover:scale-105 hover:text-neutral-700 dark:hover:text-neutral-300':
        !props.noHover,
    }"
  >
    <h3>
      <slot />
    </h3>
  </div>
</template>
