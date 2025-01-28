<script setup>
const props = defineProps({
  noHover: {
    type: Boolean,
    default: false,
  },
  expand: {
    type: Boolean,
    default: false,
  },
  isExpand: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <div
    class="flex w-full text-4xl text-neutral-800 transition-all dark:text-neutral-300 xl:text-6xl"
    :class="{
      'cursor-pointer hover:scale-105 hover:text-neutral-900 active:scale-100 dark:hover:text-neutral-200':
        !props.noHover,
      'group flex cursor-pointer gap-2': props.expand,
    }"
  >
    <h1>
      <slot />
    </h1>

    <span
      v-if="props.expand"
      class="grid w-8 grid-cols-1 grid-rows-1 place-items-center transition-all xl:opacity-0 xl:group-hover:opacity-100"
    >
      <Transition
        enter-active-class="transition-all duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-all duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <span
          v-show="props.expand && !props.isExpand"
          class="col-start-1 row-start-1"
        >
          <span class="transition-all group-hover:scale-105">+</span>
        </span>
      </Transition>
      <Transition
        enter-active-class="transition-all duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-all duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <span
          v-show="props.expand && props.isExpand"
          class="col-start-1 row-start-1"
        >
          <span class="transition-all group-hover:scale-105">-</span>
        </span>
      </Transition>
    </span>
  </div>
</template>
