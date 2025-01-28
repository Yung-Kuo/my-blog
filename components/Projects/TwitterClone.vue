<template>
  <div class="flex w-min flex-col items-center gap-4">
    <NuxtLink to="https://twitter-clone-rho-smoky.vercel.app/" target="_blank">
      <UITitleSub
        class="text-sky-600 hover:text-sky-700 dark:text-sky-500 dark:hover:text-sky-400"
      >
        Twitter Clone
      </UITitleSub>
    </NuxtLink>
    <NuxtLink to="https://twitter-clone-rho-smoky.vercel.app/" target="_blank">
      <div
        class="group grid h-48 w-64 grid-cols-1 grid-rows-1 overflow-hidden rounded-md border-0 dark:border dark:border-neutral-700 xl:h-60 xl:w-80"
      >
        <div
          class="z-10 col-start-1 row-start-1 h-full w-full rounded-md bg-[url('/assets/photo/twitter-clone.webp')] bg-cover bg-center bg-no-repeat transition-all group-hover:scale-105"
        />
        <div
          class="z-20 col-start-1 row-start-1 flex h-full w-full items-center justify-center rounded-md bg-neutral-500 bg-opacity-0 transition-all hover:bg-opacity-30 hover:backdrop-blur-sm"
        >
          <UITitleAlt class="opacity-0 transition-all group-hover:opacity-100">
            Go to project
          </UITitleAlt>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
