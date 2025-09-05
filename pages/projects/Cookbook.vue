<script setup>
const supabase = useSupabaseClient();

onMounted(async () => {
  const { data, error } = await supabase.storage
    .from("images")
    .list("projects/cookbook");
  if (error) {
    console.error("Error fetching project images:", error.message);
    return;
  }

  for (const image of data) {
    const { data: publicUrl } = supabase.storage
      .from("images")
      .getPublicUrl(`projects/cookbook/${image.name}`);

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
  <ProjectsPagesTemplate link="https://cookbook-fawn-three.vercel.app/">
    <template #warning>
      <GadgetNotFinished
        >Database down (Render free tier expired)</GadgetNotFinished
      >
    </template>
    <template #logo>
      <LogoCookbook />
    </template>
    <template #mainImage><NuxtImg :src="imageUrls?.['cookbook']" /></template>
    <template #description>
      A cookbook app that can be your personal recipe collection! Built with
      React and Django. The modern, slick, and user-friendly design makes
      reading recipes feel like a breeze.
    </template>
    <template #gallery>
      <div class="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
        <UIImageZoom :src="imageUrls?.['small-screen']" />
        <UIImageZoom :src="imageUrls?.['recipe']" />
        <UIImageZoom :src="imageUrls?.['create-new-recipe']" />
        <UIImageZoom :src="imageUrls?.['create-new-recipe-more']" />
      </div>
    </template>
  </ProjectsPagesTemplate>
</template>
