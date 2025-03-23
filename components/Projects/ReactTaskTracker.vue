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
  <ProjectsTemplate
    :img-src="imageUrls?.['react-task-tracker']"
    project="ReactTaskTracker"
  >
    <template #name>Task Tracker </template>
    <template #description>A simple todo list app</template>
  </ProjectsTemplate>
</template>
