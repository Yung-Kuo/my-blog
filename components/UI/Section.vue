<script setup>
const props = defineProps({
  expand: {
    type: Boolean,
    default: false,
  },
});
const isExpand = ref(true);
</script>
<template>
  <div class="flex w-full flex-col">
    <div
      class="w-max max-w-full"
      @mousedown="props.expand ? (isExpand = !isExpand) : null"
    >
      <slot name="title" :isExpand="isExpand" />
    </div>
    <div class="min-h-20 w-full">
      <Transition
        enter-active-class="transition-all duration-500 overflow-y-hidden"
        enter-from-class="opacity-0 max-h-0"
        enter-to-class="opacity-100 max-h-screen"
        leave-active-class="transition-all duration-500 overflow-y-hidden"
        leave-from-class="opacity-100 max-h-screen"
        leave-to-class="opacity-0 max-h-0"
      >
        <div v-show="!props.expand || isExpand">
          <!-- gap -->
          <div v-if="$slots.title && $slots.sub" class="h-4 xl:h-10" />
          <div v-else-if="$slots.title && $slots.content" class="h-8 xl:h-20" />
          <!-- subtitle -->
          <div class="w-full">
            <slot name="sub" />
          </div>
          <!-- gap -->
          <div v-if="$slots.content && $slots.sub">
            <div v-if="!$slots.title && $slots.sub" class="h-4 xl:h-10" />
            <div v-else class="h-12 xl:h-20" />
          </div>
          <!-- content -->
          <div class="w-full">
            <slot name="content" />
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>
