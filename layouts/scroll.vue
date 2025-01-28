<script setup>
const headerHeight = ref(36); // Initial header height in rems
const minHeaderHeight = ref(0); // Minimum header height in rems
const maxHeaderHeight = ref(36); // Maximum header height in rems
const scrollPosition = ref(0); // Current scroll position

function updateHeaderHeight(delta) {
  headerHeight.value = Math.max(
    minHeaderHeight.value,
    Math.min(maxHeaderHeight.value, headerHeight.value - delta)
  );
  // Apply headerHeight to your header element.  E.g.,
  const header = document.querySelector("#header");
  if (header) header.style.height = `${headerHeight.value}rem`;
}

onMounted(() => {
  const root = document.getElementById("root");
  root.addEventListener("wheel", (event) => {
    updateHeaderHeight(event.deltaY / 100); // Adjust the divisor (100) for sensitivity
  });

  // For touch devices, use touch events and calculate the delta
  root.addEventListener("touchstart", (event) => {
    scrollPosition.value = window.pageYOffset;
  });

  root.addEventListener("touchmove", (event) => {
    const delta = scrollPosition.value - window.pageYOffset;
    updateHeaderHeight(delta);
    scrollPosition.value = window.pageYOffset;
    event.preventDefault(); // Prevent default scroll behavior
  });
});
</script>

<template>
  <div>
    <GadgetLightSwitch />
    <div
      id="root"
      class="w-full bg-neutral-200 transition-all duration-300 dark:bg-neutral-900"
    >
      <LayoutHeader
        id="header"
        :style="{ height: `${headerHeight}rem` }"
        class="sticky top-0"
      />
      <slot />
    </div>
  </div>
</template>

<style scoped>
html {
  overflow-y: auto; /* Always allow scrolling */
}
</style>
