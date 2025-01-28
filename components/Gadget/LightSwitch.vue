<script setup>
const isDark = ref(false);
onMounted(() => {
  isDark.value =
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  if (isDark.value) {
    document.documentElement.classList.add("dark");
  }
});
function toggleDark() {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  // document.documentElement.classList.toggle("dark");
}
</script>
<template>
  <div
    class="group fixed right-6 top-6 z-30 flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-neutral-500 text-3xl transition-all dark:bg-neutral-800"
    @mousedown="toggleDark()"
  >
    <div
      class="flex h-full w-full items-center justify-center bg-sky-500 bg-opacity-40 text-yellow-400 transition-all hover:bg-sky-700 hover:bg-opacity-60 dark:bg-indigo-400 dark:bg-opacity-0 hover:dark:bg-opacity-20"
    >
      <Transition
        enter-active-class="transition-all duration-500"
        enter-from-class="translate-x-8 translate-y-8 text-sm"
        enter-to-class=""
        leave-active-class="transition-all duration-500"
        leave-from-class=""
        leave-to-class="-translate-x-8 translate-y-8 text-sm"
      >
        <IconsSun v-if="!isDark" class="absolute transition-all" />
      </Transition>
      <Transition
        enter-active-class="transition-all duration-500"
        enter-from-class="translate-x-8 translate-y-8 text-sm"
        enter-to-class=""
        leave-active-class="transition-all duration-500"
        leave-from-class=""
        leave-to-class="-translate-x-8 translate-y-8 text-sm"
      >
        <IconsMoon v-if="isDark" class="absolute transition-all" />
      </Transition>
    </div>
  </div>
</template>
