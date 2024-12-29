<script setup></script>
<template>
        <header id="header" class="group w-full h-[36rem] z-20">
                <!-- light mode -->
                <div
                        class="z-20 dark:opacity-0 opacity-100 absolute bg-cover bg-center transition-all duration-300 bg-cliff-meets-ocean top-0 left-0 w-full h-full"
                ></div>
                <!-- dark mode -->
                <div
                        class="z-20 opacity-0 dark:opacity-100 absolute bg-cover bg-center transition-all duration-300 bg-city-before-dawn top-0 left-0 w-full h-full"
                ></div>
                <!-- mask -->
                <div
                        class="z-30 absolute parent bg-gradient-to-t from-black/40 to-black/20 group-hover:bg-opacity-10 w-full h-full transition-all overflow-y-hidden"
                >
                        <!-- for large screen -->
                        <div
                                id="logo"
                                class="xl:flex hidden h-full pl-20 pt-20 w-min"
                        >
                                <!-- blog logo -->
                                <NuxtLink to="/">
                                        <div
                                                class="child group/logo py-[0cqh] text-neutral-300 dark:text-neutral-400 hover:dark:text-yellow-400 hover:text-yellow-400 leading-none transition-colors flex flex-col w-min h-min tracking-wider font-semibold"
                                        >
                                                <h1>Yung</h1>
                                                <h1>Kuo's</h1>
                                                <h1
                                                        class="rotate-12 group-hover/logo:rotate-[30deg] origin-top-left transition-transform"
                                                >
                                                        Blog
                                                </h1>
                                        </div>
                                </NuxtLink>
                        </div>
                        <!-- for small screen -->
                        <div class="flex xl:hidden h-min w-min py-5 px-7">
                                <!-- blog logo -->
                                <NuxtLink to="/">
                                        <div
                                                class="text-6xl text-neutral-300 dark:text-neutral-400 hover:dark:text-yellow-400 hover:text-yellow-400 leading-none transition-colors flex flex-col tracking-wider font-semibold"
                                        >
                                                <h1>Yung</h1>
                                                <h1>Kuo's</h1>

                                                <h1
                                                        class="rotate-12 -translate-x-1"
                                                >
                                                        Blog
                                                </h1>
                                        </div>
                                </NuxtLink>
                        </div>
                </div>
                <GadgetLightSwitch />
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
