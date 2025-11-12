<script setup>
const props = defineProps({
  imgSrc: {
    type: String,
    required: true,
  },
  project: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="flex w-full flex-col items-center gap-4">
    <NuxtLink :to="`/projects/${props.project}`" className="w-full">
      <UIImageZoom v-if="props.imgSrc" :src="props.imgSrc" class="w-full">
        <template #text>Go to project</template>
      </UIImageZoom>
      <div
        v-else
        class="flex w-full items-center justify-center bg-neutral-200 py-20 dark:bg-neutral-800"
      >
        <span class="text-neutral-500 dark:text-neutral-400"
          >Image loading...</span
        >
      </div>
    </NuxtLink>
    <div class="w-full">
      <NuxtLink :to="`/projects/${props.project}`">
        <div
          class="group text-2xl text-neutral-700 transition-all dark:text-neutral-300 xl:text-3xl"
        >
          <slot name="name" />
          <span
            class="text-neutral-500 transition-all group-hover:opacity-100 dark:text-neutral-500 xl:opacity-0"
          >
            <slot name="description" />
          </span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
