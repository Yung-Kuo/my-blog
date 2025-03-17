<script setup>
const supabase = useSupabaseClient();
onMounted(async () => {
  const { data } = await supabase.storage
    .from("images")
    .getPublicUrl("projects/twitter-clone/twitter_clone.webp");
  image.value = data.publicUrl;
});
const image = ref("");
</script>
<template>
  <ProjectsTemplate :imgSrc="image" project="TwitterClone">
    <template #name>Twitter Clone </template>
    <template #description>Social platform with adaptive web design</template>
  </ProjectsTemplate>
</template>
