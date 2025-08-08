<script setup>
const supabase = useSupabaseClient();

onMounted(async () => {
  const { data, error } = await supabase.storage
    .from("images")
    .list("projects/twitter-clone");
  if (error) {
    console.error("Error fetching project images:", error.message);
    return;
  }

  for (const image of data) {
    const { data: publicUrl } = supabase.storage
      .from("images")
      .getPublicUrl(`projects/twitter-clone/${image.name}`);

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
  <ProjectsPagesTemplate link="https://twitter-clone-rho-smoky.vercel.app/">
    <template #logo>
      <LogoTwitterClone />
    </template>
    <template #mainImage
      ><NuxtImg :src="imageUrls?.['twitter_clone']"
    /></template>
    <template #description
      >Inspired by the conversations surrounding Twitter's acquisition and
      Meta's Threads, I decided to build a Twitter clone as a learning project.
      This was my first major Nuxt application, and I used it to solidify my
      understanding of modern front-end frameworks and component-based
      development. I built the clone using Nuxt.js as the frontend framework,
      Tailwind CSS for styling, Supabase as the backend, Pinia for state
      management, and Vercel for deployment.</template
    >
    <template #gallery>
      <div class="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
        <UIImageZoom :src="imageUrls?.['OAuth_Login']" />
        <UIImageZoom :src="imageUrls?.['SmallScreen_Layout']" />
        <UIImageZoom :src="imageUrls?.['quote_layers']" />
        <UIImageZoom :src="imageUrls?.['SmallScreen_SidePanel']" />
        <UIImageZoom :src="imageUrls?.['profile']" />
        <UIImageZoom :src="imageUrls?.['reply_thread']" />
        <UIImageZoom :src="imageUrls?.['reply']" />
        <UIImageZoom :src="imageUrls?.['quote']" />
      </div>
    </template>
  </ProjectsPagesTemplate>
</template>
