<script setup>
const supabase = useSupabaseClient();
onMounted(async () => {
  const { data } = await supabase.storage
    .from("images")
    .getPublicUrl("projects/twitter-clone/twitter_clone.webp");
  twitterClone.value = data.publicUrl;
});
const twitterClone = ref("");
</script>
<template>
  <div class="flex w-full flex-col items-center gap-4">
    <NuxtLink to="https://twitter-clone-rho-smoky.vercel.app/" target="_blank">
      <UIImageZoom :src="twitterClone" class="h-auto w-full">
        <template #text>Go to project</template>
      </UIImageZoom>
    </NuxtLink>
    <div class="w-full">
      <NuxtLink to="/projects/TwitterClone">
        <div
          class="group text-3xl text-neutral-700 transition-all dark:text-neutral-300"
        >
          Twitter Clone
          <span
            class="text-neutral-500 opacity-0 transition-all group-hover:opacity-100 dark:text-neutral-500"
            >Social platform replica</span
          >
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
