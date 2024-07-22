<script setup>
function handleWheelEvent(event) {
    // root
    const root = document.querySelector("#root");
    // header
    const header = document.querySelector("#header");
    const rect = header.getBoundingClientRect();
    // body
    const body = document.querySelector("#body");
    const bodyRect = body.getBoundingClientRect();
    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
    if (rect.height === 6 * rem && bodyRect.top < rect.height) return;
    if (rect.height - event.deltaY < 6 * rem) {
        // header.style.height = "100px";
        header.style.height = `${6 * rem}px`;
    } else if (rect.height - event.deltaY > 36 * rem) {
        header.style.height = `${36 * rem}px`;
    } else {
        header.style.height = `${rect.height - event.deltaY}px`;
        if (root.classList.contains("overflow-y-scroll")) {
            root.classList.add("overflow-y-hidden");
            root.classList.remove("overflow-y-scroll");
        }
    }

    if (header.style.height === `${6 * rem}px`) {
        root.classList.add("overflow-y-scroll");
        root.classList.remove("overflow-y-hidden");
    } else if (header.style.height === `${36 * rem}px`) {
        root.classList.add("overflow-y-hidden");
        root.classList.remove("overflow-y-scroll");
    }
}
</script>
<template>
    <div
        id="root"
        class="bg-neutral-300 dark:bg-neutral-900 h-screen w-full transition-all duration-500 overflow-y-scroll"
        @wheel="handleWheelEvent($event)"
    >
        <LayoutHeader class="sticky top-0" />
        <!-- <GadgetLightSwitch /> -->
        <slot />
    </div>
</template>
