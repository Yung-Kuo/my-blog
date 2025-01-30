<script setup>
const props = defineProps({
  expand: {
    type: Boolean,
    default: false,
  },
  compact: {
    type: Boolean,
    default: false,
  },
});
const isExpand = ref(true);
</script>
<template>
  <div class="flex w-full flex-col">
    <div
      class="w-max"
      @mousedown="props.expand ? (isExpand = !isExpand) : null"
    >
      <slot name="title" :isExpand="isExpand" />
    </div>
    <div v-if="props.compact" class="h-2" />
    <div v-else class="h-4 xl:h-10" />
    <div class="min-h-20 w-full overflow-hidden">
      <Transition
        enter-active-class="transition-all duration-500"
        enter-from-class="opacity-0 max-h-0"
        enter-to-class="opacity-100 max-h-screen"
        leave-active-class="transition-all duration-500"
        leave-from-class="opacity-100 max-h-screen"
        leave-to-class="opacity-0 max-h-0"
      >
        <div v-show="!props.expand || isExpand">
          <div class="w-full">
            <slot name="sub" />
          </div>
          <div v-if="$slots.content && $slots.sub">
            <div v-if="props.compact" class="h-10 xl:h-16" />
            <div v-else class="h-12 xl:h-20" />
          </div>
          <div class="w-full">
            <slot name="content" />
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>
