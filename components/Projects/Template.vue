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
    <NuxtLink :to="`/projects/${props.project}`" class="w-full">
      <!-- v-if="props.imgSrc"  -->
      <UIImageZoom :src="props.imgSrc">
        <template #text>Go to project</template>
      </UIImageZoom>
      <!-- <div
        v-else
        class="flex w-full items-center justify-center rounded-md bg-neutral-200 py-20 dark:bg-neutral-800"
      >
        <span class="text-neutral-500 dark:text-neutral-400"
          >Image loading...</span
        >
      </div> -->
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
            <!-- bg-gradient-to-b from-neutral-500 to-neutral-500 bg-[length:0_0.1em] bg-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_0.1em] -->
            <slot name="description" />
          </span>
          <!-- <div
            class="h-1 w-0 bg-neutral-300 transition-all group-hover:w-full"
          ></div> -->
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.multi-line-hover-link {
  background-image: linear-gradient(
    currentColor,
    currentColor
  ); /* Use current text color for the line */
  /* Use current text color for the line */
  background-position: 0% 100%;
  /* Position the line at the bottom (100% vertical) */
  background-repeat: no-repeat;

  /* 2. Initial State (Hidden Line) */
  background-size: 0% 0.1em; /* Width is 0%, height is 0.1em (or desired thickness) */

  /* 3. Transition for Smooth Effect */
  transition: background-size 500ms ease; /* Animate background-size over 500ms */
}

.multi-line-hover-link:hover {
  /* 4. Hover State (Visible Line) */
  background-size: 100% 0.1em; /* Width is 100%, height remains 0.1em */
}
</style>
