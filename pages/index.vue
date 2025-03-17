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
    class="flex flex-col items-center gap-36 px-6 pb-40 pt-20 text-2xl text-neutral-500 xl:gap-48 xl:px-20"
  >
    <!-- Projects -->
    <UISection compact>
      <template #title>
        <UITitleMain> Projects </UITitleMain>
      </template>
      <!-- divider -->
      <template #sub>
        <div
          class="w-full border-2 border-neutral-400 transition-all dark:border-neutral-700"
        ></div>
      </template>
      <!-- project links -->
      <template #content>
        <div class="grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3">
          <ProjectsTwitterClone />
          <ProjectsReactTaskTracker />
        </div>
      </template>
    </UISection>
    <!-- Resume -->
    <UISection>
      <template #content>
        <div class="flex w-full justify-center">
          <NuxtLink to="/resume">
            <div
              class="group flex w-60 cursor-pointer justify-center rounded-md bg-neutral-400 bg-opacity-50 py-6 text-center transition-all hover:scale-105 active:scale-100 dark:bg-neutral-700 lg:w-80 xl:py-10"
            >
              <UITitleAlt
                class="text-neutral-700 group-hover:font-semibold group-hover:text-neutral-800 dark:text-neutral-300 dark:group-hover:text-neutral-200"
                >Resume</UITitleAlt
              >
            </div>
          </NuxtLink>
        </div>
      </template>
    </UISection>

    <!-- Gallery -->
    <UISection>
      <template #title>
        <UITitleMain>Gallery</UITitleMain>
      </template>
      <template #sub>
        <UITitleSub>Digital & Analog</UITitleSub>
      </template>
      <template #content>
        <ul class="flex w-full flex-wrap gap-2 xl:gap-8">
          <li v-for="pic in gallery">
            <UIImageZoom
              :src="pic"
              class="h-40 w-40 rounded-sm xl:h-64 xl:w-64"
            />
          </li>
        </ul>
      </template>
    </UISection>
  </div>
</template>
<style scoped>
h1,
h2 {
  font-family: "Poppins";
}
</style>
