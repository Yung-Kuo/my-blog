<script setup></script>
<template>
  <!--  -->
  <div class="flex flex-col gap-16 px-6 py-24 xl:gap-24 xl:px-20 xl:py-40">
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
              <UITitleList>JavaScript</UITitleList>
            </ul>
          </div>
          <div
            class="min-h-40 min-w-60 border-l-8 border-neutral-400 px-4 py-2 dark:border-neutral-600 xl:min-h-60"
          >
            <UITitleSub noHover>Technologies</UITitleSub>
            <div class="h-4" />
            <ul>
              <UITitleList>Nuxt.js</UITitleList>
              <UITitleList>Tailwind</UITitleList>
              <UITitleList>Supabase</UITitleList>
              <UITitleList>Pinia</UITitleList>
            </ul>
          </div>
          <div
            class="min-h-40 min-w-60 border-l-8 border-neutral-400 px-4 py-2 dark:border-neutral-600 xl:min-h-60"
          >
            <UITitleSub noHover>Tools</UITitleSub>
            <div class="h-4" />
            <ul>
              <UITitleList>VSCode, Cursor, Zed</UITitleList>
              <UITitleList>Vercel</UITitleList>
            </ul>
          </div>
        </div>
      </template>
    </UISection>
    <!--  -->
    <!-- <div class="flex flex-wrap gap-10 xl:gap-0"> -->
    <!-- Projects -->
    <UISection expand>
      <template #title="titleProps">
        <UITitleMain expand :isExpand="titleProps.isExpand"
          >Projects</UITitleMain
        >
      </template>
      <template #content>
        <div class="flex w-full flex-col gap-10 md:flex-row md:gap-20 md:pr-20">
          <ProjectsTwitterClone />
          <ul>
            <UITitleList
              >Developed a social media application using Nuxt.js for frontend
              development.</UITitleList
            >
            <UITitleList
              >Implemented responsive styling with Tailwind CSS to ensure a
              consistent user experience across devices.</UITitleList
            >
            <UITitleList
              >Integrated Supabase for backend services, including user
              authentication with OAuth.</UITitleList
            >
            <UITitleList
              >Utilized Pinia for state management to improve application
              performance and user experience.</UITitleList
            >
            <UITitleList
              >Used Git for version control and learned basic Git
              commands.</UITitleList
            >
          </ul>
        </div>
      </template>
    </UISection>
    <!-- Experience -->
    <UISection expand>
      <template #title="titleProps">
        <UITitleMain expand :isExpand="titleProps.isExpand"
          >Experience</UITitleMain
        >
      </template>
      <template #sub>
        <UITitleSub noHover>Wow, such empty</UITitleSub>
      </template>
    </UISection>
    <!-- </div> -->
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
