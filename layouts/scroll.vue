<script setup>
function logoPadding() {
  // header
  const header = document.querySelector("#header");
  const rect = header.getBoundingClientRect();
  // logo
  const logo = document.querySelector("#logo");
  const logoRect = logo.getBoundingClientRect();
  // rem
  const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
  logo.style.paddingLeft = `${Math.max(
    5 * rem * ((rect.height - 6 * rem) / (30 * rem)),
    1 * rem
  )}px`;
  logo.style.paddingTop = `${Math.max(
    5 * rem * ((rect.height - 6 * rem) / (30 * rem)),
    0.5 * rem
  )}px`;
}

let startY = 0; // Keep track of the starting Y coordinate
let initialHeaderHeight = 0; // Store initial header height

function handleTouchStart(event) {
  console.log("touch start");
  startY = event.touches[0].clientY;
  initialHeaderHeight = parseFloat(
    getComputedStyle(document.querySelector("#header")).height
  );
}

function handleTouchMove(event) {
  console.log("touch move");
  event.preventDefault(); // Prevent default scrolling behavior
  const html = document.documentElement;
  const header = document.querySelector("#header");
  const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
  let deltaY = event.touches[0].clientY - startY;
  let newHeight = initialHeaderHeight + deltaY;

  //Boundary checks
  newHeight = Math.max(0, Math.min(newHeight, 36 * rem));
  console.log(newHeight, deltaY);

  header.style.height = `${newHeight}px`;
  logoPadding();

  //Control overflow based on header height

  if (newHeight === 0) {
    html.style.overflowY = "auto";
  } else if (newHeight === 36 * rem) {
    html.style.overflowY = "hidden";
  }
}
</script>

<template>
  <div>
    <GadgetLightSwitch />
    <div
      id="root"
      class="w-full bg-neutral-200 transition-all duration-300 dark:bg-neutral-900"
      @touchstart="handleTouchStart($event)"
      @touchmove="handleTouchMove($event)"
    >
      <LayoutHeader class="sticky top-0" />
      <slot />
    </div>
  </div>
</template>

<style scoped>
html {
  overflow-y: hidden;
}
</style>
