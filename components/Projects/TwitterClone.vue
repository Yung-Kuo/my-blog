<script setup>
const supabase = useSupabaseClient();
onMounted(async () => {
  const { data } = await supabase.storage
    .from("images")
    .getPublicUrl("projects/twitter-clone/twitter-clone.webp");
  twitterClone.value = data.publicUrl;
});
const twitterClone = ref("");
</script>
<template>
  <div class="flex w-max flex-col items-center gap-4">
    <NuxtLink to="https://twitter-clone-rho-smoky.vercel.app/" target="_blank">
      <UITitleSub
        class="text-sky-600 hover:text-sky-700 dark:text-sky-500 dark:hover:text-sky-400"
      >
        Twitter Clone
      </UITitleSub>
    </NuxtLink>
    <NuxtLink to="https://twitter-clone-rho-smoky.vercel.app/" target="_blank">
      <UIImageZoom :src="twitterClone" class="h-48 w-64 lg:h-60 lg:w-80">
        <template #text>Go to project</template>
      </UIImageZoom>
    </NuxtLink>
    <NuxtLink to="/projects/TwitterClone">
      <UITitleSideFrame>
        <UITitleSub>Project Deep Dive →</UITitleSub>
      </UITitleSideFrame>
    </NuxtLink>
  </div>
</template>
