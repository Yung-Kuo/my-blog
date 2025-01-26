<script setup>
definePageMeta({
  layout: "home",
});

const supabase = useSupabaseClient();

onMounted(async () => {
  const { data: images, error: error } = await supabase.storage
    .from("images")
    .list("gallery");

  if (error) {
    console.error("Error fetching gallery images:", error.message);
    return;
  } else {
    const publicUrls = [];
    for (const image of images) {
      const { data: publicUrl } = await supabase.storage
        .from("images")
        .getPublicUrl(`gallery/${image.name}`);

      if (publicUrl) {
        publicUrls.push(publicUrl.publicUrl);
      }
    }
    gallery.value = publicUrls;
  }
});

const gallery = ref([]);
</script>
<template>
  <div
    id="body"
    class="flex flex-col items-center gap-60 px-5 pb-40 pt-20 text-2xl text-neutral-500 xl:px-20"
  >
    <!-- Projects -->
    <div class="flex w-full flex-col">
      <UITitleMain> Projects </UITitleMain>
      <div class="h-4" />
      <!-- divider -->
      <div
        class="grow border-2 border-neutral-400 transition-all dark:border-neutral-700"
      ></div>
      <div class="h-8" />
      <!-- project links -->
      <div class="flex gap-10 xl:justify-center">
        <div class="flex flex-col items-center gap-4">
          <NuxtLink
            to="https://twitter-clone-rho-smoky.vercel.app/"
            target="_blank"
          >
            <UITitleSub
              class="text-sky-600 hover:text-sky-700 dark:text-sky-500 dark:hover:text-sky-400"
            >
              Twitter Clone
            </UITitleSub>
          </NuxtLink>
          <NuxtLink
            to="https://twitter-clone-rho-smoky.vercel.app/"
            target="_blank"
          >
            <div
              class="group grid h-60 w-80 grid-cols-1 grid-rows-1 overflow-hidden rounded-md border-0 dark:border dark:border-neutral-700"
            >
              <div
                class="z-10 col-start-1 row-start-1 h-full w-full rounded-md bg-[url('/assets/photo/twitter-clone.webp')] bg-cover bg-center bg-no-repeat transition-all group-hover:scale-105"
              />
              <div
                class="z-20 col-start-1 row-start-1 flex h-full w-full items-center justify-center rounded-md bg-neutral-500 bg-opacity-0 transition-all hover:bg-opacity-30 hover:backdrop-blur-sm"
              >
                <UITitleAlt
                  class="opacity-0 transition-all group-hover:opacity-100"
                >
                  Go to project
                </UITitleAlt>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <!-- Resume -->
    <NuxtLink to="/resume">
      <div
        class="group flex w-min cursor-pointer justify-center rounded-md bg-neutral-400 bg-opacity-50 px-28 py-8 text-center transition-all hover:scale-105 active:scale-100 dark:bg-neutral-700"
      >
        <UITitleAlt
          class="text-neutral-700 group-hover:text-neutral-800 dark:text-neutral-300 dark:group-hover:text-neutral-200"
          >Resume</UITitleAlt
        >
      </div>
    </NuxtLink>
    <!-- Gallery -->
    <div class="flex flex-col gap-6">
      <UITitleMain>Gallery</UITitleMain>
      <UITitleSub>Digital & Analog</UITitleSub>
      <div class="mt-12">
        <ul class="flex flex-wrap gap-4 xl:gap-5">
          <li
            v-for="pic in gallery"
            class="h-32 w-32 overflow-hidden xl:h-60 xl:w-60"
          >
            <NuxtImg
              :src="pic"
              class="h-full w-full object-cover transition-all duration-500 hover:scale-110"
              loading="lazy"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
h1,
h2 {
  font-family: "Poppins";
}
</style>
