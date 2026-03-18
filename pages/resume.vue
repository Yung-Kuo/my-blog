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
          <UITitleSub noHover>(+886) 970 912 590</UITitleSub>
          <UITitleSub noHover>Kaohsiung, Taiwan</UITitleSub>
        </div>

        <UITitleSideFrame>
          <UITitleSub noHover
            >Yung is a frontend developer with experience in modern frontend
            frameworks, Tailwind, BaaS, Django, Docker, and Git</UITitleSub
          >
        </UITitleSideFrame>
      </template>
    </UISection>
    <!--  -->
    <UISection>
      <template #title>
        <UITitleMain noHover>Skills</UITitleMain>
      </template>
      <template #content>
        <div>
          <UITitleSub noHover
            >Native Mandarin speaker, Fluent in English (TOEIC 990)</UITitleSub
          >
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
              <UITitleList>Vue</UITitleList>
              <UITitleList>React</UITitleList>
              <UITitleList>Next.js</UITitleList>
              <UITitleList>Tailwind</UITitleList>
              <UITitleList>Pinia</UITitleList>
              <UITitleList>Django</UITitleList>
            </ul>
          </UITitleSideFrame>
          <UITitleSideFrame class="min-h-40 min-w-60 xl:min-h-60">
            <UITitleSub noHover>Tools & Platforms</UITitleSub>
            <div class="h-4" />
            <ul>
              <UITitleList>VSCode, Cursor, Zed</UITitleList>
              <UITitleList>Supabase</UITitleList>
              <UITitleList>Appwrite</UITitleList>
              <UITitleList>Vercel</UITitleList>
              <UITitleList>Render</UITitleList>
              <UITitleList>Neon</UITitleList>
              <UITitleList>Docker</UITitleList>
              <UITitleList>Figma</UITitleList>
            </ul>
          </UITitleSideFrame>
        </div>
      </template>
    </UISection>
    <!--  -->
    <!-- Projects -->
    <UISection expand>
      <template #title="titleProps">
        <UITitleMain expand :isExpand="titleProps.isExpand"
          >Projects</UITitleMain
        >
      </template>
      <template #content>
        <div class="flex flex-col gap-20 md:gap-32">
          <!-- twitter-clone -->
          <div
            class="grid w-full grid-cols-1 gap-10 md:grid-cols-2 2xl:grid-cols-3"
          >
            <ProjectsTwitterClone />
            <ul>
              <UITitleList
                >Developed a functioning social media platform with a focus on
                smooth data flow and responsive UI.</UITitleList
              >
              <UITitleList
                >Architected relational database structures in Supabase,
                applying normalization principles to ensure data integrity and
                eliminate multi-valued dependencies.</UITitleList
              >
              <UITitleList
                >Optimized state management using Pinia to ensure seamless data
                synchronization between frontend and backend.</UITitleList
              >
            </ul>
          </div>

          <!-- Cookbook -->
          <div
            class="grid w-full grid-cols-1 gap-10 md:grid-cols-2 2xl:grid-cols-3"
          >
            <ProjectsCookbook />
            <ul>
              <UITitleList
                >Architected a backend using Django and DRF, designing
                relational data models to ensure efficient querying and data
                consistency.</UITitleList
              >
              <UITitleList
                >Containerized the application with Docker to ensure a
                consistent environment deployment, demonstrating a foundational
                understanding of modern software infrastructure.</UITitleList
              >
              <UITitleList
                >Designed a clear and efficient layout with Tailwind CSS,
                optimizing information hierarchy to ensure a seamless and
                efficient reading experience.</UITitleList
              >
              <UITitleList
                >Deployed on Vercel(frontend), Render(backend), and
                Neon(database).</UITitleList
              >
            </ul>
          </div>

          <!-- react-task-tracker -->
          <div
            class="grid w-full grid-cols-1 gap-10 md:grid-cols-2 2xl:grid-cols-3"
          >
            <ProjectsReactTaskTracker />
            <ul>
              <UITitleList>A simple todo list app built with React</UITitleList>
              <UITitleList>Styled with Tailwind CSS</UITitleList>
              <UITitleList
                >Appwrite as backend services. Using Magic URL as user sign in
                method</UITitleList
              >
              <UITitleList>Git for version control</UITitleList>
              <UITitleList>Deployd on Vercel</UITitleList>
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
        <div className="flex flex-col gap-2">
          <UITitleSub noHover>DataAnnotation (April 2025 - present)</UITitleSub>
          <UITitleSideFrame>
            <UITitleSub smallText noHover
              >AI Trainer (Language Model Focus) / Prompt Engineer</UITitleSub
            >
          </UITitleSideFrame>
          <UITitleSideFrame>
            <UITitleSub smallText noHover
              >Evaluate and validate Language Models' responses for accuracy,
              relevance, and adherence to specific linguistic
              guidelines.</UITitleSub
            >
          </UITitleSideFrame>
        </div>
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
