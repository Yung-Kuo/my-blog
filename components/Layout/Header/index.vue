<script setup></script>
<template>
    <header
        id="header"
        class="group bg-cliff-meets-ocean bg-cover bg-center bg-opacity-50 w-full h-[36rem] z-20"
    >
        <div
            class="parent bg-black bg-opacity-30 group-hover:bg-opacity-20 dark:bg-opacity-50 dark:group-hover:bg-opacity-30 w-full h-full transition-all duration-500 overflow-y-hidden"
        >
            <div
                class="child text-neutral-300 dark:text-neutral-400 py-[10cqh] px-6 hover:dark:text-yellow-400 hover:text-yellow-400 leading-none transition-colors flex flex-col w-min h-min cursor-pointer"
            >
                <NuxtLink to="/">
                    <h1>Yung</h1>
                    <h1>Kuo's</h1>
                    <h1>Blog</h1>
                </NuxtLink>
            </div>
        </div>
        <GadgetLightSwitch />
    </header>
</template>

<style scoped>
h1 {
    font-family: "Ubuntu";
}
.parent {
    container-type: size;
}
.child {
    font-size: max(16cqh, 1.6rem);
    padding-left: max(10cqh, 1.5rem);
}
</style>
