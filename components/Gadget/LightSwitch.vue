<script setup>
function toggleDark() {
    document.documentElement.classList.toggle("dark");
}
</script>
<template>
    <div
        class="absolute top-6 right-12 flex z-30 w-12 h-12 items-center justify-center bg-neutral-500 dark:bg-neutral-900 rounded-lg"
    >
        <IconsSun
            class="inline-flex text-yellow-400 text-3xl dark:hidden transition-all"
            @click="toggleDark()"
        />
        <IconsMoon
            class="hidden text-yellow-400 text-3xl dark:inline-flex dark:text-yellow-400 transition-all"
            @click="toggleDark()"
        />
    </div>
</template>
