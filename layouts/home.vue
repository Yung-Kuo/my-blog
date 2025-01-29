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

function handleWheelEvent(event) {
  // html
  const html = document.documentElement;
  // root
  const root = document.querySelector("#root");
  // header
  const header = document.querySelector("#header");
  const rect = header.getBoundingClientRect();
  // logo
  const logo = document.querySelector("#logo");
  const logoRect = logo.getBoundingClientRect();
  // body
  const body = document.querySelector("#body");
  const bodyRect = body.getBoundingClientRect();
  // rem
  const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
  // fully collapsed && use already scroll down
  if (rect.height === 0 * rem && bodyRect.top < rect.height) return;
  // fully collapsed and still scrolling, prevent further collpase
  if (rect.height - event.deltaY < 0 * rem) {
    header.style.height = `${0 * rem}px`;
    // logo padding
    logoPadding();
  }
  // fully expanded and still scrolling, prevent further expand
  else if (rect.height - event.deltaY > 36 * rem) {
    header.style.height = `${36 * rem}px`;
    // logo padding
    logoPadding();
  }
  // in the middle
  else {
    // body at the top, prevent scrolling
    // if (root.classList.contains("overflow-y-scroll")) {
    //   html.classList.add("overflow-hidden");
    // }
    // expand or collapse header
    header.style.height = `${rect.height - event.deltaY}px`;
    // logo padding
    logoPadding();
  }

  if (header.style.height === `${0 * rem}px`) {
    // html.style.overflowY = "auto";
    // root.classList.add("overflow-y-scroll");
    root.classList.remove("xl:overflow-y-hidden");
  } else if (header.style.height === `${36 * rem}px`) {
    // html.style.overflowY = "hidden";
    root.classList.add("xl:overflow-y-hidden");
    // root.classList.remove("overflow-y-scroll");
  }
}
</script>
<template>
  <div>
    <GadgetLightSwitch />
    <div
      id="root"
      class="h-screen w-full overflow-y-scroll bg-neutral-200 transition-all duration-300 dark:bg-neutral-900 xl:overflow-y-hidden"
      @wheel="handleWheelEvent($event)"
    >
      <LayoutHeader />
      <slot />
    </div>
  </div>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

<!-- <style scoped>
html {
  overflow: hidden;
}
</style> -->
