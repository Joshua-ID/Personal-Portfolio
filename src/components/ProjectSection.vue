<template>
  <div id="project-section">
    <label class="label">Project</label>
    <div class="project-card-wrapper">
      <!-- Pass the entire array as the listItem prop to ProjectCard -->
      <ProjectCard
        data-aos="fade-right"
        data-aos-duration="1500"
        project-image="/image/sample.jpg"
        :listItem="project1"
      />
      <ProjectCard
        data-aos="fade-left"
        data-aos-duration="1500"
        project-image="/image/sample.jpg"
        :listItem="project2"
      />
      <ProjectCard
        data-aos="fade-right"
        data-aos-duration="1500"
        project-image="/image/sample.jpg"
        :listItem="project3"
      />
      <ProjectCard
        data-aos="fade-left"
        data-aos-duration="1500"
        project-image="/image/sample.jpg"
        :listItem="project4"
      />
    </div>
  </div>
</template>

<script>
import ProjectCard from './ProjectCard.vue'

export default {
  name: 'ProjectSection',
  components: {
    ProjectCard,
  },
  data() {
    return {
      project1: [{ name: 'Vue' }, { name: 'TypeScript' }, { name: 'React' }],
      project2: [{ name: 'GitHub' }, { name: 'Vercel' }, { name: 'MaterialUI' }],
      project3: [{ name: 'React' }, { name: 'Github' }, { name: 'TypeScript' }],
      project4: [{ name: 'React' }, { name: 'HTML' }, { name: 'TypeScript' }],
    }
  },
}
</script>

<style scoped>
#project-section {
  padding-top: 3rem;
  display: flex;
  gap: 2rem;
  flex-direction: column;

  .project-card-wrapper {
    display: grid;
    grid-template-columns: repeat(2, minmax(300px, 1fr));
    gap: 2rem;

    @media (max-device-width: 800px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
