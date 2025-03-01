<script setup>
const props = defineProps({
  src: {
    type: String,
    default: null,
  },
});
</script>
<template>
  <div
    class="group grid grid-cols-1 grid-rows-1 overflow-hidden border-0"
    :class="{ 'rounded-md dark:border dark:border-neutral-700': $slots.text }"
  >
    <NuxtImg
      :src="props.src"
      class="col-start-1 row-start-1 h-full w-full object-cover transition-all group-hover:scale-110"
      :class="!$slots.text ? 'duration-500' : 'rounded-md'"
      loading="lazy"
    />
    <div
      v-if="$slots.text"
      class="z-10 col-start-1 row-start-1 flex h-full w-full items-center justify-center rounded-md bg-neutral-500 bg-opacity-0 transition-all hover:bg-opacity-30 hover:backdrop-blur-sm"
      :class="!$slots.text ? 'duration-500' : ''"
    >
      <UITitleAlt
        class="opacity-0 transition-all group-hover:opacity-100"
        :class="!$slots.text ? 'duration-500' : ''"
      >
        <slot name="text" />
      </UITitleAlt>
    </div>
  </div>
</template>
