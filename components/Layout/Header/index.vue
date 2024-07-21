<script setup></script>
<template>
    <header
        id="header"
        class="group bg-tree-of-life bg-cover bg-center bg-opacity-50 w-full h-[36rem] z-20"
    >
        <div
            class="bg-black bg-opacity-40 group-hover:bg-opacity-20 dark:bg-opacity-60 dark:group-hover:bg-opacity-30 w-full h-full transition-all duration-500 overflow-y-hidden parent"
        >
            <div
                id="blog_logo"
                class="child text-neutral-300 p-[10cqh] pl-12 hover:text-yellow-400 leading-none transition-colors flex flex-col w-min h-min"
            >
                <h1>Yung</h1>
                <h1>Kuo's</h1>
                <h1>Blog</h1>
            </div>
        </div>
    </header>
</template>

<style>
h1 {
    font-family: "Ubuntu";
}
.parent {
    container-type: size;
}
.child {
    font-size: max(16cqh, 1.6em);
    padding-top: min();
}
</style>
