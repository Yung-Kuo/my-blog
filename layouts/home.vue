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
    // header.style.height = "100px";
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
    if (root.classList.contains("overflow-y-scroll")) {
      root.classList.add("overflow-y-hidden");
      root.classList.remove("overflow-y-scroll");
      html.classList.add("overflow-hidden");
    }
    // expand or collapse header
    header.style.height = `${rect.height - event.deltaY}px`;
    // logo padding
    logoPadding();
  }

  if (header.style.height === `${0 * rem}px`) {
    root.classList.add("overflow-y-scroll");
    root.classList.remove("overflow-y-hidden");

    html.classList.remove("overflow-hidden");
  } else if (header.style.height === `${36 * rem}px`) {
    root.classList.add("overflow-y-hidden");
    root.classList.remove("overflow-y-scroll");

    html.classList.add("overflow-hidden");
  }
}
</script>
<template>
  <div
    id="root"
    class="w-full bg-neutral-200 transition-all duration-300 dark:bg-neutral-900"
    @wheel="handleWheelEvent($event)"
  >
    <LayoutHeader class="sticky top-0" />
    <slot />
  </div>
</template>

<style scoped>
html {
  overflow: hidden;
}
</style>
