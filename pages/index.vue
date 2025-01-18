<script setup></script>
<template>
  <div
    id="body"
    class="flex flex-col items-center gap-60 px-5 pb-40 pt-20 text-2xl text-neutral-500 xl:px-20"
  >
    <!-- Projects -->
    <div class="flex w-full flex-col">
      <UITitleMain> Projects </UITitleMain>
      <div class="h-4" />
      <!-- divider -->
      <div
        class="grow border-2 border-neutral-800 dark:border-neutral-300"
      ></div>
      <div class="h-8" />
      <!-- project links -->
      <div class="flex gap-10 xl:justify-center">
        <div class="flex flex-col items-center gap-4">
          <NuxtLink
            to="https://twitter-clone-rho-smoky.vercel.app/"
            target="_blank"
          >
            <UITitleSub> Twitter Clone </UITitleSub>
          </NuxtLink>
          <NuxtLink
            to="https://twitter-clone-rho-smoky.vercel.app/"
            target="_blank"
          >
            <div
              class="group grid h-60 w-80 grid-cols-1 grid-rows-1 overflow-hidden rounded-md border-0 dark:border dark:border-neutral-700"
            >
              <div
                class="z-10 col-start-1 row-start-1 h-full w-full rounded-md bg-[url('/assets/photo/twitter-clone.webp')] bg-cover bg-center bg-no-repeat transition-all group-hover:scale-105"
              />
              <div
                class="z-20 col-start-1 row-start-1 flex h-full w-full items-center justify-center rounded-md bg-neutral-500 bg-opacity-0 transition-all hover:bg-opacity-30 hover:backdrop-blur-sm"
              >
                <UITitleAlt
                  class="opacity-0 transition-all group-hover:opacity-100"
                >
                  Go to project
                </UITitleAlt>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <!-- Resume -->
    <NuxtLink to="/resume">
      <div
        class="group flex w-min cursor-pointer justify-center rounded-md bg-neutral-400 px-32 py-10 text-center transition-all hover:scale-105 active:scale-100 dark:bg-neutral-800 hover:dark:bg-neutral-700"
      >
        <UITitleAlt>Resume</UITitleAlt>
      </div>
    </NuxtLink>
    <!-- Gallery -->
    <div class="flex flex-col gap-10">
      <UITitleMain>Gallery</UITitleMain>
      <UITitleSub>Digital & Analog</UITitleSub>
      <div class="mt-16 flex flex-wrap gap-4 xl:gap-5">
        <div
          class="h-32 w-32 rounded-md border border-neutral-700 xl:h-60 xl:w-60"
        ></div>

        <div
          class="h-32 w-32 rounded-md border border-neutral-700 xl:h-60 xl:w-60"
        ></div>

        <div
          class="h-32 w-32 rounded-md border border-neutral-700 xl:h-60 xl:w-60"
        ></div>

        <div
          class="h-32 w-32 rounded-md border border-neutral-700 xl:h-60 xl:w-60"
        ></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
h1,
h2 {
  font-family: "Poppins";
}
</style>
