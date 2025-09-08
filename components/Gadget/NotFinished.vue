<template>
  <div
    class="fixed bottom-6 left-1/2 z-40 flex max-w-full -translate-x-1/2 px-2"
  >
    <div
      class="h-full w-max items-center justify-center rounded-lg bg-red-500 p-2 px-10 dark:bg-red-700"
    >
      <span
        class="whitespace-wrap text-xl font-bold text-neutral-800 transition-all dark:text-neutral-200"
      >
        <slot> Still in the works... </slot>
      </span>
    </div>
  </div>
</template>
