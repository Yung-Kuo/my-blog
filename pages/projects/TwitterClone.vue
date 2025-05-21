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
  <div class="flex flex-col gap-20 xl:gap-40">
    <!-- twitter-clone logo -->
    <div class="flex justify-center">
      <NuxtLink
        to="https://twitter-clone-rho-smoky.vercel.app/"
        target="_blank"
        class="w-max border-b-4 border-transparent pb-2 hover:border-gray-400"
      >
        <LogoTwitterClone />
      </NuxtLink>
    </div>
    <!-- main image -->
    <NuxtImg :src="imageUrls?.['twitter_clone']" />
    <!-- intro -->
    <UISection>
      <template #content>
        <UITitleSub noHover
          >Inspired by the conversations surrounding Twitter's acquisition and
          Meta's Threads, I decided to build a Twitter clone as a learning
          project. This was my first major Nuxt application, and I used it to
          solidify my understanding of modern front-end frameworks and
          component-based development. I built the clone using Nuxt.js as the
          framework, Tailwind CSS for styling, Supabase as backend, Pinia for
          state management, and Vercel for deployment.</UITitleSub
        >
        <br />
        <br />
        <div class="md:flex md:gap-2">
          <UITitleSub noHover>Link to the project:</UITitleSub>
          <NuxtLink
            to="https://twitter-clone-rho-smoky.vercel.app"
            class="underline decoration-yellow-500 decoration-2 transition-all hover:decoration-yellow-400"
          >
            <UITitleSub noHover class="hover:!text-white">
              https://twitter-clone-rho-smoky.vercel.app
            </UITitleSub>
          </NuxtLink>
        </div>
      </template>
    </UISection>
    <!-- functionality showcase -->
    <UISection expand>
      <template #content>
        <div class="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
          <NuxtImg :src="imageUrls?.['OAuth_Login']" />
          <NuxtImg :src="imageUrls?.['SmallScreen_Layout']" />
          <NuxtImg :src="imageUrls?.['quote_layers']" />
          <NuxtImg :src="imageUrls?.['SmallScreen_SidePanel']" />
          <NuxtImg :src="imageUrls?.['profile']" />
          <NuxtImg :src="imageUrls?.['reply_thread']" />
          <NuxtImg :src="imageUrls?.['reply']" />
          <NuxtImg :src="imageUrls?.['quote']" />
        </div>
      </template>
    </UISection>
  </div>
</template>
