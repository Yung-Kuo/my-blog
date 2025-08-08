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
      // Remove file extension (.webp, .png, .jpg, .jpeg) from the name
      const nameWithoutExt = image.name.replace(/\.(webp|png|jpg|jpeg)$/i, "");
      imageUrls.value[nameWithoutExt] = publicUrl.publicUrl;
    }
  }
});

const imageUrls = ref({});
</script>
<template>
  <ProjectsTemplate :img-src="imageUrls?.['cookbook']" project="Cookbook">
    <template #name>Cookbook </template>
    <template #description
      >Recipes collection with a modern & user-friendly design</template
    >
  </ProjectsTemplate>
</template>
