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
    <NuxtLink to="/projects/TwitterClone">
      <UIImageZoom :src="twitterClone" class="h-auto w-full">
        <template #text>Go to project</template>
      </UIImageZoom>
    </NuxtLink>
    <div class="w-full">
      <NuxtLink to="/projects/TwitterClone">
        <div
          class="group text-2xl text-neutral-700 transition-all dark:text-neutral-300 xl:text-3xl"
        >
          Twitter Clone
          <span
            class="text-neutral-500 transition-all group-hover:opacity-100 dark:text-neutral-500 xl:opacity-0"
            >Social platform with adaptive web design</span
          >
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
