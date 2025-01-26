<script setup></script>
<template>
  <!--  -->
  <div class="flex flex-col gap-20 p-10 xl:p-20">
    <div>
      <UITitleMain>Contact Info</UITitleMain>
      <div class="h-6" />
      <UITitleSub noHover>Yung Kuo</UITitleSub>
      <UITitleSub noHover>yungkuo429@gmail.com</UITitleSub>
      <UITitleSub noHover>Kaohsiung, Taiwan</UITitleSub>
    </div>
    <!--  -->
    <div>
      <UITitleMain>Skills</UITitleMain>
      <div class="h-6" />
      <div class="flex flex-wrap gap-10">
        <div
          class="min-h-60 min-w-60 rounded-md border border-neutral-600 px-4 py-2"
        >
          <UITitleSub noHover>Programming<br />Languages</UITitleSub>
          <div class="h-4" />
          <UITitleList>JavaScript</UITitleList>
        </div>
        <div
          class="min-h-60 min-w-60 rounded-md border border-neutral-600 px-4 py-2"
        >
          <UITitleSub noHover>Technologies</UITitleSub>
          <div class="h-4" />
          <UITitleList>• Nuxt.js</UITitleList>
          <UITitleList>• Tailwind</UITitleList>
          <UITitleList>• Supabase</UITitleList>
          <UITitleList>• Pinia</UITitleList>
        </div>
        <div
          class="min-h-60 min-w-60 rounded-md border border-neutral-600 px-4 py-2"
        >
          <UITitleSub noHover>Tools</UITitleSub>
          <div class="h-4" />
          <UITitleList>VSCode, Cursor, Zed</UITitleList>
          <UITitleList>Vercel</UITitleList>
        </div>
      </div>
    </div>
    <!--  -->
    <div>
      <UITitleMain class="group flex gap-4"
        >Experience
        <span
          class="opacity-0 transition-all group-hover:scale-105 group-hover:opacity-100"
          >+</span
        >
      </UITitleMain>
      <div class="h-6" />
      <UITitleSub noHover>Wow, such empty</UITitleSub>
    </div>
    <!--  -->
    <div>
      <UITitleMain>Education</UITitleMain>
      <div class="h-6" />
    </div>
    <!--  -->
    <div>
      <UITitleMain>Anything Else</UITitleMain>
      <div class="h-6" />
      <UITitleSub noHover>(rhetorical)</UITitleSub>
    </div>
  </div>
</template>
