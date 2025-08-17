<script setup>
useSeoMeta({
  title: "Yung Kuo's Resume",
  description: "Check out my resume and projects!",
});
</script>
<template>
  <!--  -->
  <div class="flex flex-col gap-20 xl:gap-40">
    <UISection>
      <template #title>
        <UITitleMain noHover>Contact Info</UITitleMain>
      </template>
      <template #content>
        <div>
          <UITitleSub noHover>Yung Kuo</UITitleSub>
          <UITitleSub noHover>yungkuo429@gmail.com</UITitleSub>
          <UITitleSub noHover>+886 970912590</UITitleSub>
          <UITitleSub noHover>Kaohsiung, Taiwan</UITitleSub>
        </div>

        <UITitleSideFrame>
          <UITitleSub noHover
            >Yung is a frontend developer with experience with modern frontend
            frameworks, Tailwind, BaaS, Django, Docker, and Git</UITitleSub
          >
        </UITitleSideFrame>
        <div>
          <UITitleSub noHover
            >Check out my resume & portfolio on my blog:
          </UITitleSub>
          <NuxtLink to="https://my-blog-one-gamma.vercel.app/resume">
            <UITitleSub noHover isLink
              >https://my-blog-one-gamma.vercel.app/resume</UITitleSub
            >
          </NuxtLink>
        </div>
      </template>
    </UISection>
    <!--  -->
    <UISection>
      <template #title>
        <UITitleMain noHover>Skills</UITitleMain>
      </template>
      <template #content>
        <div>
          <UITitleSub noHover>Native Mandarin speaker</UITitleSub>
          <UITitleSub noHover
            >Fluent in English – TOEIC 990, 4 years of flatmate experience with
            foreign students
          </UITitleSub>
        </div>
        <div class="flex flex-wrap gap-10">
          <UITitleSideFrame class="min-h-40 min-w-60 xl:min-h-60">
            <UITitleSub noHover>Programming Languages</UITitleSub>
            <div class="h-4" />
            <ul>
              <UITitleList>JavaScript</UITitleList>
              <UITitleList>Python</UITitleList>
            </ul>
          </UITitleSideFrame>
          <UITitleSideFrame class="min-h-40 min-w-60 xl:min-h-60">
            <UITitleSub noHover>Frameworks & Libraries</UITitleSub>
            <div class="h-4" />
            <ul>
              <UITitleList>Nuxt.js</UITitleList>
              <UITitleList>Next.js</UITitleList>
              <UITitleList>Vue</UITitleList>
              <UITitleList>React</UITitleList>
              <UITitleList>Tailwind</UITitleList>
              <UITitleList>Django</UITitleList>
              <UITitleList>Pinia</UITitleList>
            </ul>
          </UITitleSideFrame>
          <UITitleSideFrame class="min-h-40 min-w-60 xl:min-h-60">
            <UITitleSub noHover>Tools & Platforms</UITitleSub>
            <div class="h-4" />
            <ul>
              <UITitleList>VSCode, Cursor, Zed</UITitleList>
              <UITitleList>Vercel</UITitleList>
              <UITitleList>Docker</UITitleList>
              <UITitleList>Supabase</UITitleList>
              <UITitleList>Appwrite</UITitleList>
              <UITitleList>Render</UITitleList>
            </ul>
          </UITitleSideFrame>
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
        <div class="flex flex-col gap-20">
          <!-- twitter-clone -->
          <div
            class="grid w-full grid-cols-1 gap-10 md:grid-cols-2 2xl:grid-cols-3"
          >
            <ProjectsTwitterClone />
            <ul>
              <UITitleList
                >Developed a social media application using Nuxt.js for frontend
                development.</UITitleList
              >
              <UITitleList
                >Implemented core social media functionalities such as posting,
                replying, retweeting, liking, and bookmarking
                tweets.</UITitleList
              >
              <UITitleList
                >Styled the application with Tailwind CSS for a responsive and
                visually appealing user interface across desktop and mobile
                devices.</UITitleList
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
                >Used Git for version control, branching for feature
                development, and pushing updates to the GitHub
                repository.</UITitleList
              >
              <UITitleList
                >Deployed the project on Vercel for reliable hosting and
                streamlined deployment processes.</UITitleList
              >
            </ul>
          </div>

          <!-- react-task-tracker -->
          <div
            class="grid w-full grid-cols-1 gap-10 md:grid-cols-2 2xl:grid-cols-3"
          >
            <ProjectsReactTaskTracker />
            <ul>
              <UITitleList
                >A simple todo list app built with React.</UITitleList
              >
              <UITitleList>Styled with Tailwind CSS.</UITitleList>
              <UITitleList
                >Appwrite as backend services. Using Magic URL as user sign in
                method.</UITitleList
              >
              <UITitleList>Git for version control.</UITitleList>
              <UITitleList>Deployd on Vercel.</UITitleList>
            </ul>
          </div>

          <!-- Cookbook -->
          <div
            class="grid w-full grid-cols-1 gap-10 md:grid-cols-2 2xl:grid-cols-3"
          >
            <ProjectsCookbook />
            <ul>
              <UITitleList
                >A cookbook app to write down your recipes.</UITitleList
              >
              <UITitleList>React as the frontend.</UITitleList>
              <UITitleList>Django as the backend.</UITitleList>
              <UITitleList>Git for version control.</UITitleList>
              <UITitleList>Deployed on Vercel and Render.</UITitleList>
            </ul>
          </div>
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
        <UITitleSub noHover>DataAnnotation (April 2025 - present)</UITitleSub>
      </template>
    </UISection>
    <!--  -->
    <UISection expand>
      <template #title="titleProps">
        <UITitleMain expand :isExpand="titleProps.isExpand"
          >Education</UITitleMain
        >
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
