<script setup></script>
<template>
  <div
    id="body"
    class="flex flex-col gap-60 px-5 xl:px-20 text-gray-500 text-2xl pt-20 pb-40"
  >
    <!-- Projects -->
    <div class="flex flex-col">
      <h1
        class="text-4xl xl:text-6xl hover:scale-105 w-max cursor-pointer hover:text-neutral-900 transition-all dark:text-neutral-400 hover:dark:text-neutral-300 text-neutral-700"
      >
        Projects
      </h1>
      <div class="h-4" />
      <!-- divider -->
      <div
        class="grow border-neutral-700 dark:border-neutral-400 border-2"
      ></div>
      <div class="h-8" />
      <!-- project links -->
      <div class="flex gap-10 xl:justify-center">
        <div class="flex flex-col items-center gap-4">
          <a href="https://twitter-clone-rho-smoky.vercel.app/" target="_blank">
            <h2
              class="text-2xl xl:text-3xl font-semibold text-neutral-500 hover:text-neutral-700 hover:dark:text-sky-500 transition-all hover:scale-105"
            >
              Twitter Clone
            </h2>
          </a>
          <a href="https://twitter-clone-rho-smoky.vercel.app/" target="_blank">
            <div
              class="border group border-neutral-500 w-80 h-60 rounded-md grid grid-cols-1 grid-rows-1 overflow-hidden"
            >
              <div
                class="col-start-1 row-start-1 bg-[url('/assets/photo/twitter-clone.webp')] z-10 bg-cover bg-center bg-no-repeat rounded-md group-hover:scale-105 transition-all"
              />
              <div
                class="col-start-1 row-start-1 z-20 w-full h-full bg-neutral-500 bg-opacity-0 hover:bg-opacity-30 hover:backdrop-blur-sm transition-all rounded-md flex items-center justify-center"
              >
                <h3
                  class="text-3xl text-neutral-300 group-hover:flex group-hover:opacity-100 hidden opacity-0 transition-all"
                >
                  Go to project
                </h3>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <!-- Resume -->
    <div>
      <h1
        class="text-4xl xl:text-6xl hover:scale-105 w-max cursor-pointer hover:text-neutral-900 transition-all dark:text-neutral-400 hover:dark:text-neutral-300 text-neutral-700"
      >
        Resume
      </h1>
    </div>
    <!-- Gallery -->
    <div class="flex flex-col gap-10">
      <h1
        class="text-4xl xl:text-6xl hover:scale-105 w-max cursor-pointer hover:text-neutral-900 transition-all dark:text-neutral-400 hover:dark:text-neutral-300 text-neutral-700"
      >
        Gallery
      </h1>
      <h2
        class="w-max text-2xl xl:text-3xl dark:text-neutral-500 text-neutral-500"
      >
        Digital & Analog
      </h2>
      <div class="flex mt-16 xl:gap-5 gap-4 flex-wrap">
        <div
          class="xl:w-60 xl:h-60 h-32 w-32 border border-neutral-700 rounded-md"
        ></div>

        <div
          class="xl:w-60 xl:h-60 h-32 w-32 border border-neutral-700 rounded-md"
        ></div>

        <div
          class="xl:w-60 xl:h-60 h-32 w-32 border border-neutral-700 rounded-md"
        ></div>

        <div
          class="xl:w-60 xl:h-60 h-32 w-32 border border-neutral-700 rounded-md"
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
