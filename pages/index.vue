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
    class="flex flex-col items-center gap-36 px-5 pb-40 pt-20 text-2xl text-neutral-500 xl:gap-60 xl:px-20"
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
      <div class="flex justify-center gap-10">
        <ProjectsTwitterClone />
      </div>
    </div>
    <!-- Resume -->
    <NuxtLink to="/resume">
      <div
        class="group flex w-min cursor-pointer justify-center rounded-md bg-neutral-400 bg-opacity-50 px-16 py-6 text-center transition-all hover:scale-105 active:scale-100 dark:bg-neutral-700 xl:px-28 xl:py-8"
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
