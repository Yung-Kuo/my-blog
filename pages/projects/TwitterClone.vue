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
    const { data: publicUrl } = await supabase.storage
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
    <!-- Introduction -->
    <UISection expand>
      <template #title="titleProps">
        <UITitleMain expand :isExpand="titleProps.isExpand"
          >1. Introduction</UITitleMain
        >
      </template>
      <template #content></template>
    </UISection>
    <!-- Planning and Design -->
    <UISection expand>
      <template #title="titleProps">
        <UITitleMain expand :isExpand="titleProps.isExpand"
          >2. Planning and Design</UITitleMain
        >
      </template>
      <template #content>
        <UISection>
          <template #sub>
            <UITitleSub>Sign Up / Log In</UITitleSub>
          </template>
          <template #content>
            <div class="flex flex-shrink gap-5">
              <div>
                <UIImageZoom :src="imageUrls?.['OAuth_Login']" />
              </div>
              <div>
                <UIImageZoom :src="imageUrls?.['Password_Login']" />
              </div>
            </div>
          </template>
        </UISection>
        <UITitleSub>Main Layout</UITitleSub>
        <UITitleSub>Reply Thread</UITitleSub>
        <UITitleSub>Functionalities</UITitleSub>
        <UITitleSub>Different Layout for Small Screen</UITitleSub>
      </template>
    </UISection>
    <!-- Build the Functionality -->
    <UISection expand>
      <template #title="titleProps">
        <UITitleMain expand :isExpand="titleProps.isExpand"
          >3. Build the Functionality</UITitleMain
        >
      </template>
      <template #content>
        <UITitleSub>Component Architecture</UITitleSub>
        <UITitleSub>Data Handling</UITitleSub>
      </template>
    </UISection>
    <UISection expand>
      <template #title="titleProps">
        <UITitleMain expand :isExpand="titleProps.isExpand">4. UX</UITitleMain>
      </template>
      <template #content></template>
    </UISection>
  </div>
</template>
