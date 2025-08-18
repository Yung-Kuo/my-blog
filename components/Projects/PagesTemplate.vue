<script setup>
const props = defineProps({
  link: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="flex flex-col gap-20 pt-20 xl:gap-40">
    <!-- project logo -->
    <div class="flex justify-center">
      <NuxtLink
        :to="props.link"
        target="_blank"
        class="w-max transition-all hover:scale-125"
      >
        <!-- border-b-4 border-transparent pb-2 hover:border-gray-400 -->
        <slot name="logo" />
      </NuxtLink>
    </div>
    <!-- main image -->
    <slot name="mainImage" />
    <!-- intro -->
    <UISection>
      <template #content>
        <UITitleSub noHover>
          <slot name="description" />
        </UITitleSub>
        <br />
        <br />
        <div class="md:flex md:gap-2">
          <UITitleSub noHover>Link to the project:</UITitleSub>
          <NuxtLink :to="props.link" target="_blank">
            <UITitleSub noHover isLink>
              {{ props.link }}
            </UITitleSub>
          </NuxtLink>
        </div>
      </template>
    </UISection>
    <!-- functionality showcase -->
    <UISection expand>
      <template #content>
        <slot name="gallery" />
        <!-- <div class="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
          <NuxtImg :src="imageUrls?.['OAuth_Login']" />
          <NuxtImg :src="imageUrls?.['SmallScreen_Layout']" />
          <NuxtImg :src="imageUrls?.['quote_layers']" />
          <NuxtImg :src="imageUrls?.['SmallScreen_SidePanel']" />
          <NuxtImg :src="imageUrls?.['profile']" />
          <NuxtImg :src="imageUrls?.['reply_thread']" />
          <NuxtImg :src="imageUrls?.['reply']" />
          <NuxtImg :src="imageUrls?.['quote']" />
        </div> -->
      </template>
    </UISection>
  </div>
</template>
