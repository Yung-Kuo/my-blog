<script setup>
const supabase = useSupabaseClient();

onMounted(async () => {
  const { data, error } = await supabase.storage
    .from("images")
    .list("projects/react-task-tracker");
  if (error) {
    console.error("Error fetching project images:", error.message);
    return;
  }

  for (const image of data) {
    const { data: publicUrl } = supabase.storage
      .from("images")
      .getPublicUrl(`projects/react-task-tracker/${image.name}`);

    if (publicUrl) {
      // Remove .webp extension from the name
      const nameWithoutExt = image.name.replace(".webp", "");
      imageUrls.value[nameWithoutExt] = publicUrl.publicUrl;
    }
  }
});

const imageUrls = ref({});
</script>
<template>
  <GadgetNotFinished />
  <div class="flex flex-col gap-20 xl:gap-40">
    <!-- Task Tracker title -->
    <div class="flex justify-center">
      <NuxtLink
        to="https://react-task-tracker-rust.vercel.app/"
        target="_blank"
        class="w-max border-b-4 border-transparent hover:border-gray-400"
      >
        <h1 class="text-4xl font-bold text-neutral-800 dark:text-neutral-300">
          Task Tracker
        </h1>
      </NuxtLink>
    </div>
    <!-- main image -->
    <NuxtImg :src="imageUrls?.['react-task-tracker']" />
    <!-- intro -->
    <UISection>
      <template #content>
        <UITitleSub noHover>
          A simple todo list/task tracker app. My entry point of learning React
          framework.
        </UITitleSub>
        <br />
        <br />

        <div class="md:flex md:gap-2">
          <UITitleSub noHover>Link to the project:</UITitleSub>
          <NuxtLink
            to="https://react-task-tracker-rust.vercel.app/"
            class="underline decoration-yellow-500 decoration-2 transition-all hover:decoration-yellow-400"
          >
            <UITitleSub noHover class="hover:!text-white">
              https://react-task-tracker-rust.vercel.app/
            </UITitleSub>
          </NuxtLink>
        </div>
      </template>
    </UISection>
    <!-- functionality showcase -->
    <UISection expand>
      <template #content>
        <div class="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
          <UIImageZoom :src="imageUrls?.['small-screen']" />
          <UIImageZoom :src="imageUrls?.['add-task']" />
          <UIImageZoom :src="imageUrls?.['view-task']" />
        </div>
      </template>
    </UISection>
  </div>
</template>
