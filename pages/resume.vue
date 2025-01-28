<script setup></script>
<template>
  <!--  -->
  <div class="flex flex-col gap-16 p-10 py-20 xl:gap-24 xl:p-20 xl:pb-40">
    <UISection>
      <template #title>
        <UITitleMain noHover>Contact Info</UITitleMain>
      </template>
      <template #sub>
        <UITitleSub noHover>Yung Kuo</UITitleSub>
        <UITitleSub noHover>yungkuo429@gmail.com</UITitleSub>
        <UITitleSub noHover>Kaohsiung, Taiwan</UITitleSub>
      </template>
    </UISection>
    <!--  -->
    <UISection>
      <template #title>
        <UITitleMain noHover>Skills</UITitleMain>
      </template>
      <template #content>
        <div class="flex flex-wrap gap-10">
          <div
            class="min-h-40 min-w-60 border-l-8 border-neutral-400 px-4 py-2 dark:border-neutral-600 xl:min-h-60"
          >
            <UITitleSub noHover>Programming<br />Languages</UITitleSub>
            <div class="h-4" />
            <ul>
              <UITitleList>• JavaScript</UITitleList>
            </ul>
          </div>
          <div
            class="min-h-40 min-w-60 border-l-8 border-neutral-400 px-4 py-2 dark:border-neutral-600 xl:min-h-60"
          >
            <UITitleSub noHover>Technologies</UITitleSub>
            <div class="h-4" />
            <ul>
              <UITitleList>• Nuxt.js</UITitleList>
              <UITitleList>• Tailwind</UITitleList>
              <UITitleList>• Supabase</UITitleList>
              <UITitleList>• Pinia</UITitleList>
            </ul>
          </div>
          <div
            class="min-h-40 min-w-60 border-l-8 border-neutral-400 px-4 py-2 dark:border-neutral-600 xl:min-h-60"
          >
            <UITitleSub noHover>Tools</UITitleSub>
            <div class="h-4" />
            <ul>
              <UITitleList>• VSCode, Cursor, Zed</UITitleList>
              <UITitleList>• Vercel</UITitleList>
            </ul>
          </div>
        </div>
      </template>
    </UISection>
    <!--  -->
    <div class="flex flex-wrap gap-10 xl:gap-0">
      <!-- Projects -->
      <UISection expand class="max-w-screen-md xl:w-1/2 2xl:w-1/3">
        <template #title="titleProps">
          <UITitleMain expand :isExpand="titleProps.isExpand"
            >Projects</UITitleMain
          >
        </template>
        <template #sub>
          <ProjectsTwitterClone />
        </template>
      </UISection>
      <!-- Experience -->
      <UISection expand class="max-w-screen-md xl:w-1/2 2xl:w-1/3">
        <template #title="titleProps">
          <UITitleMain expand :isExpand="titleProps.isExpand"
            >Experience</UITitleMain
          >
        </template>
        <template #sub>
          <UITitleSub noHover>Wow, such empty</UITitleSub>
        </template>
      </UISection>
    </div>
    <!--  -->
    <UISection>
      <template #title>
        <UITitleMain noHover>Education</UITitleMain>
      </template>
      <template #sub>
        <UITitleSub noHover>B.S. Information Management, 2021</UITitleSub>
        <UITitleSub noHover>National Sun Yat-sen University(NSYSU)</UITitleSub>
      </template>
    </UISection>
    <!--  -->
    <UISection expand>
      <template #title="titleProps">
        <UITitleMain expand :isExpand="titleProps.isExpand"
          >Anything Else</UITitleMain
        >
      </template>
      <template #sub>
        <UITitleSub noHover>(rhetorical)</UITitleSub>
      </template>
    </UISection>
  </div>
</template>
