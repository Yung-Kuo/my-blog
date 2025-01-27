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
  <div>
    <div
      class="w-min"
      @mousedown="props.expand ? (isExpand = !isExpand) : null"
    >
      <slot name="title" :isExpand="isExpand" />
    </div>
    <div class="h-10" />
    <div class="min-h-20">
      <Transition
        enter-active-class="transition-all duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-all duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-show="!props.expand || isExpand">
          <slot name="sub" />
          <div v-if="$slots.content && $slots.sub" class="h-20" />
          <slot name="content" />
        </div>
      </Transition>
    </div>
  </div>
</template>
