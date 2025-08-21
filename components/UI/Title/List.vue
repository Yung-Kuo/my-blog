<template>
  <li
    class="flex w-full gap-4 text-pretty text-xl text-neutral-600 transition-all hover:text-sky-600 dark:text-neutral-400 dark:hover:text-yellow-400 xl:text-2xl"
  >
    <h3>•</h3>
    <h3 class="w-full">
      <slot />
    </h3>
  </li>
</template>
