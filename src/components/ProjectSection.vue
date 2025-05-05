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
          aosDelay: '500',
          items: {
            image: '/image/med-lab-image.JPG',
            link: 'https://med-lab-survey-management.vercel.app',
            listItem: [
              { name: 'Vue' },
              { name: 'PrimeVue' },
              { name: 'Firebase' },
              { name: 'API' },
            ],
            description:
              'This is a hospital management system designed with two user interfaces: one for patients and one for administrators. Patients can book appointments easily. Admins access to dashboard and monitor performance through real-time analytics and improving patient care.',
          },
        },
        {
          aos: 'zoom-in-down',
          aosDelay: '500',
          items: {
            image: '/image/gotedo.gif',
            link: 'https://about.gotedo.com/',
            listItem: [
              { name: 'Vue' },
              { name: 'JavaScript' },
              { name: 'echarts' },
              { name: 'API' },
            ],
            description:
              'Gotedo – A powerful church management system designed to streamline operations, track member engagement, manage events, and handle donations effortlessly. Enhance community interactions with seamless communication and organizational tools. ⛪📊✨',
          },
        },

        {
          aos: 'zoom-in-down',
          aosDelay: '600',
          items: {
            image: '/image/guess-a-number.PNG',
            link: 'http://number-quest-game.vercel.app',
            listItem: [{ name: 'Vue' }, { name: 'JavaScript' }, { name: 'HTML' }],
            description:
              'NumGuess – A fun and engaging number prediction game where you challenge yourself to guess the correct number within a range. Test your luck, improve your guessing skills, and compete for the highest score! 🎲🔢🔥',
          },
        },

        {
          aos: 'fade-down-right',
          aosDelay: '600',
          items: {
            image: '/image/9cloud-moviez.JPG',
            link: 'https://9cloudmoviez.vercel.app',
            listItem: [{ name: 'Vue' }, { name: 'JavaScript' }, { name: 'API' }],
            description:
              'Cloud9 – A sleek and interactive movie app that lets you discover movies, watch trailers, and explore cast details. Stay updated with the latest releases, browse genres, and get personalized recommendations. 🎬🍿',
          },
        },
        {
          aos: 'fade-right',
          aosDelay: '700',
          items: {
            image: '/image/photo-splash.PNG',
            link: 'https://photo-loop.vercel.app',
            listItem: [{ name: 'Vue' }, { name: 'JavaScript' }, { name: 'HTML' }],
            description:
              'WallPic – A vibrant wallpaper app that lets you explore and download high-quality images for your device. Search through stunning collections, discover trending wallpapers, and personalize your screen with breathtaking visuals. 🖼️📱✨',
          },
        },
        {
          aos: 'fade-left',
          aosDelay: '700',
          items: {
            image: '/image/weather.JPG',
            link: 'https://cloudy-climate.vercel.app/',
            listItem: [{ name: 'Vue' }, { name: 'JavaScript' }, { name: 'API' }],
            description:
              'WeatherApp – A simple and intuitive weather application that provides real-time weather updates, forecasts, and temperature details for any location. Stay informed with accurate weather conditions, including humidity, wind speed, and precipitation. 🌤️🌍',
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
