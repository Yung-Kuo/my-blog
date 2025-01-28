<script setup></script>
<template>
  <header
    id="header"
    class="group sticky left-0 top-0 z-20 w-full xl:h-[36rem]"
  >
    <!-- light mode -->
    <div
      class="absolute z-20 h-full w-full bg-cliff-meets-ocean bg-cover bg-center opacity-100 transition-all duration-300 dark:opacity-0"
    ></div>
    <!-- dark mode -->
    <div
      class="absolute z-20 h-full w-full bg-city-before-dawn bg-cover bg-center opacity-0 transition-all duration-300 dark:opacity-100"
    ></div>
    <!-- mask -->
    <div
      class="parent absolute z-30 h-full w-full overflow-y-hidden bg-black bg-opacity-20 transition-colors group-hover:bg-opacity-0"
    >
      <!-- for large screen -->
      <div id="logo" class="hidden h-full w-min pl-20 pt-20 xl:flex">
        <!-- blog logo -->
        <NuxtLink to="/">
          <div
            class="child group/logo flex h-min w-min flex-col py-[0cqh] font-semibold leading-none tracking-wider text-neutral-300 opacity-40 transition-colors hover:text-yellow-400 hover:opacity-80"
          >
            <div
              class="origin-bottom-left rotate-0 transition-transform group-hover/logo:-rotate-12"
            >
              <h1>Yung</h1>
              <h1>Kuo's</h1>
            </div>
            <h1
              class="origin-top-left rotate-0 transition-transform group-hover/logo:rotate-12"
            >
              Blog
            </h1>
          </div>
        </NuxtLink>
      </div>
      <!-- for small screen -->
      <div class="flex h-min w-min px-6 py-4 xl:hidden">
        <!-- blog logo -->
        <NuxtLink to="/">
          <div
            class="group/logo flex flex-col text-6xl font-semibold leading-none tracking-wider text-neutral-300 opacity-60 transition-colors hover:text-yellow-400 hover:opacity-100 dark:text-neutral-400 hover:dark:text-yellow-400"
          >
            <h1>Yung</h1>
            <h1>Kuo's</h1>
            <h1 class="origin-top-left rotate-0 transition-transform">Blog</h1>
          </div>
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<style scoped>
h1 {
  font-family: "Raleway";
}
.parent {
  container-type: size;
}
.child {
  font-size: max(16cqh, 1.6rem);
}
</style>
