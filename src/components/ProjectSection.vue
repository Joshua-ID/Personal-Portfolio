<template>
  <div id="project-section">
    <label class="label">Project</label>
    <div class="project-card-wrapper">
      <!-- Pass the entire array as the listItem prop to ProjectCard -->
      <ProjectCard
        data-aos="fade-right"
        data-aos-duration="1500"
        :items="{
          image: '/image/9cloud-moviez.JPG',
          link: 'https://9cloudmoviez.vercel.app',
          listItem: [{ name: 'Vue' }, { name: 'JavaScript' }, { name: 'TypeScript' }],
        }"
      />
      <ProjectCard
        data-aos="fade-right"
        data-aos-duration="1500"
        :items="{
          image: '/image/photo-splash.PNG',
          link: 'https://photo-loop.vercel.app',
          listItem: [{ name: 'Vue' }, { name: 'JavaScript' }, { name: 'TypeScript' }],
        }"
      />
      <ProjectCard
        data-aos="fade-right"
        data-aos-duration="1500"
        :items="{
          image: '/image/guess-a-number.PNG',
          link: 'http://number-quest-game.vercel.app',
          listItem: [{ name: 'Vue' }, { name: 'JavaScript' }, { name: 'TypeScript' }],
        }"
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
