<template>
  <div id="project-section">
    <label data-aos="fade-right" class="label">Project</label>
    <div class="project-card-wrapper">
      <!-- Pass the entire array as the listItem prop to ProjectCard -->
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :data-aos="project.aos"
        :data-aos-delay="project.aosDelay"
        :items="project.items"
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
      projects: [
        {
          aos: 'zoom-in-down',
          aosDelay: '700',
          items: {
            image: '/image/guess-a-number.PNG',
            link: 'http://number-quest-game.vercel.app',
            listItem: [{ name: 'Vue' }, { name: 'JavaScript' }, { name: 'HTML' }],
          },
        },
        {
          aos: 'fade-up-down',
          aosDelay: '300',
          items: {
            image: '/image/gotedo.gif',
            link: 'https://about.gotedo.com/',
            listItem: [
              { name: 'Vue' },
              { name: 'JavaScript' },
              { name: 'echarts' },
              { name: 'API' },
            ],
          },
        },
        {
          aos: 'fade-down-left',
          aosDelay: '300',
          items: {
            image: '/image/photo-splash.PNG',
            link: 'https://photo-loop.vercel.app',
            listItem: [{ name: 'Vue' }, { name: 'JavaScript' }, { name: 'HTML' }],
          },
        },

        {
          aos: 'fade-down-right',
          aosDelay: '300',
          items: {
            image: '/image/9cloud-moviez.JPG',
            link: 'https://9cloudmoviez.vercel.app',
            listItem: [{ name: 'Vue' }, { name: 'JavaScript' }, { name: 'API' }],
          },
        },
        {
          aos: 'zoom-in-down',
          aosDelay: '500',
          items: {
            image: '/image/weather.JPG',
            link: 'https://cloudy-climate.vercel.app/',
            listItem: [{ name: 'Vue' }, { name: 'JavaScript' }, { name: 'API' }],
          },
        },
      ],
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
    gap: 3rem 5rem;

    @media (max-device-width: 800px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
