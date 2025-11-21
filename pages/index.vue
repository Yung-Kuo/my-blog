<script setup>
useSeoMeta({
  title: "Yung Kuo's Blog",
  description: "Portfolio & Photography",
});
definePageMeta({
  layout: "home",
});

const supabase = useSupabaseClient();
const gallery = ref([]);

const showGoToTop = ref(false);
const triggerSection = ref(null);
let observer = null;

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

  // Check if the browser supports IntersectionObserver (it usually does)
  console.log("triggerSection: ", triggerSection.value);
  if (!triggerSection.value) return;

  const options = {
    root: null, // null means relative to the viewport
    threshold: 0, // Trigger as soon as even 1 pixel is visible/invisible
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // logic: If element is NOT intersecting (not visible)
      // AND its position is negative (meaning it went up, not down)
      if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
        showGoToTop.value = true;
      } else {
        showGoToTop.value = false;
      }
    });
  }, options);

  // Start watching the element
  observer.observe(triggerSection.value);
});
// Cleanup to prevent memory leaks
onUnmounted(() => {
  if (observer && triggerSection.value) {
    observer.unobserve(triggerSection.value);
  }
});
</script>
<template>
  <div
    id="body"
    class="flex flex-col items-center gap-36 px-6 pb-40 text-2xl text-neutral-500 xl:gap-48 xl:px-20"
  >
    <!-- scroll to top -->
    <GadgetGoToTop v-show="showGoToTop" />
    <!-- Projects -->
    <UISection id="goToTop" class="pt-32 xl:pt-20">
      <template #title>
        <UITitleMain> Projects /</UITitleMain>
      </template>
      <!-- project links -->
      <template #content>
        <div class="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
          <ProjectsTwitterClone />
          <ProjectsReactTaskTracker />
          <ProjectsCookbook />
        </div>
      </template>
    </UISection>
    <!-- Resume -->
    <div ref="triggerSection">
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
    </div>

    <!-- Gallery -->
    <UISection>
      <template #title>
        <UITitleMain>Gallery</UITitleMain>
      </template>
      <template #sub>
        <UITitleSub>Digital & Analog</UITitleSub>
      </template>
      <template #content>
        <ul
          class="grid w-full grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 xl:gap-8 2xl:grid-cols-6"
        >
          <li v-for="pic in gallery">
            <UIImageZoom :src="pic" class="aspect-square rounded-sm" />
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
