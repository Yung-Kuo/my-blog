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
    class="group z-0 grid grid-cols-1 grid-rows-1 overflow-hidden border-0"
    :class="{ 'rounded-md dark:border dark:border-neutral-700': $slots.text }"
  >
    <NuxtImg
      v-if="props.src"
      :src="props.src"
      class="col-start-1 row-start-1 h-full w-full object-cover transition-all group-hover:scale-110"
      :class="!$slots.text ? 'duration-500' : 'rounded-md'"
      loading="lazy"
    />
    <!-- placeholder -->
    <div
      v-else
      class="col-start-1 row-start-1 flex h-full w-full items-center justify-center object-cover py-20 transition-all"
    >
      <span class="text-neutral-500 dark:text-neutral-400"
        >Image loading...</span
      >
    </div>
    <div
      v-if="$slots.text"
      class="z-10 col-start-1 row-start-1 flex h-full w-full items-center justify-center rounded-md bg-neutral-800 bg-opacity-0 transition-all hover:bg-opacity-50 hover:backdrop-blur-sm"
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
