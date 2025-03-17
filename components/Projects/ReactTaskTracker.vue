<script setup>
const supabase = useSupabaseClient();
onMounted(async () => {
  const { data } = await supabase.storage
    .from("images")
    .getPublicUrl("projects/react-task-tracker/react-task-tracker.webp");
  image.value = data.publicUrl;
});
const image = ref("");
</script>
<template>
  <ProjectsTemplate :img-src="image">
    <template #name>Task Tracker </template>
    <template #description>A simple todo list app</template>
  </ProjectsTemplate>
</template>
