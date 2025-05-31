<template>
  <section>
    <div target="_blank" class="card">
      <div v-if="items.banner" class="upcoming-project">
        <span>Upcoming Project...</span>
        <span>Book Store</span>
      </div>
      <span v-if="items.banner" class="banners"> <p class="heart-beat">Watch out!</p> </span>
      <a :href="items.link" v-else target="_blank" class="project-card">
        <div class="project-image-wrapper">
          <img class="project-image" :src="items.image" />
          <div class="hover-description">
            <p class="description">{{ items.description || 'Project Description' }}</p>
          </div>
        </div>
        <div class="bottom-description-and-ctx-btn">
          <div class="bottom-description">
            <label class="item" v-for="project in items.listItem" :key="project.name">{{
              project.name
            }}</label>
          </div>
          <a :href="items.link" target="_blank" class="ctx-btn"
            >View Project <i class="fa-solid fa-arrow-right"></i
          ></a>
        </div>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    items: {
      type: Object,
      default: () => ({
        image: '',
        link: '',
        description: '',
        listItem: [],
        banner: true,
      }),
    },
  },
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 8px;
  padding: 0.75rem;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  height: 100%;
}

.upcoming-project {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  @media (max-device-width: 800px) {
    height: 334px;
  }
}

.project-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.banners {
  position: absolute;
  top: 15px;
  left: -15px;
  max-width: 150px;
  width: 100%;
  height: 30px;
  background-color: var(--main-color);
  z-index: 1000;
  border-radius: 5px;
  transform: rotate(-25deg);
  display: grid;
  place-items: center;
  color: #fff;
  font-size: clamp(0.775rem, 0.75rem + 0.25vw, 0.75rem);

  .heart-beat {
    animation: heartBeat 1.5s infinite ease-in-out;
  }
}

@keyframes heartBeat {
  0% {
    transform: scale(1);
  }
  14% {
    transform: scale(1.2);
  }
  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.2);
  }
  70% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
}

.project-image-wrapper {
  position: relative;
  width: 100%;
  height: 280px;
  border-radius: 20px;
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  object-fit: cover;
  transition: transform 0.6s ease-in-out;
}

.project-image-wrapper:hover .project-image {
  transform: scale(1.1);
  opacity: 0.8;
}

.hover-description {
  position: absolute;
  bottom: -100%;
  left: 0;
  width: 100%;
  color: white;
  padding: 10px;
  border-radius: 0 0 15px 15px;
  border: 2px solid black;
  transition: bottom 0.6s ease-in-out;

  .description {
    font-size: clamp(0.8125rem, 0.7793rem + 0.1064vw, 0.875rem);
  }
}

@media (min-device-width: 768px) {
  .project-image-wrapper:hover .hover-description {
    bottom: 0;
  }
}

.bottom-description-and-ctx-btn {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  justify-content: space-between;
}

.item {
  font-size: clamp(0.53125rem, 0.4149rem + 0.3723vw, 0.75rem);
}

.bottom-description {
  display: flex;
  flex-wrap: wrap;
  column-gap: 13px;
  row-gap: 8px;
}

.ctx-btn {
  white-space: nowrap;
  font-size: clamp(0.75rem, 0.6669rem + 0.266vw, 0.90625rem);
}

.ctx-btn i {
  font-size: 0.9rem;
  transition: transform 0.2s ease-in-out;
}

.ctx-btn:hover i {
  transform: translateX(5px);
}
</style>
