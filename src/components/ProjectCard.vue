<template>
  <div class="card">
    <img class="project-image" :src="projectImage" />
    <div class="bottom-description-and-ctx-btn">
      <div class="bottom-description">
        <!-- Loop through the listItem array and display each project name -->
        <label class="item" v-for="project in listItem" :key="project.name">{{
          project.name
        }}</label>
      </div>
      <button class="ctx-btn">View Project <i class="fa-solid fa-arrow-right"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    listItem: {
      type: Array,
      default: () => [],
    },
    projectImage: {
      type: String,
      default: '',
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

  .project-image {
    height: 320px;
    border-radius: 15px;
  }

  .bottom-description-and-ctx-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .item {
      font-size: 0.7rem;
    }

    .bottom-description {
      display: flex;
      align-self: center;
      gap: 13px;
    }

    .ctx-btn {
      font-size: clamp(0.8125rem, 0.7793rem + 0.1064vw, 0.875rem);
      i {
        font-size: 0.9rem;
        transition: transform 0.2s ease-in-out;
      }

      &:hover {
        i {
          transform: translateX(5px);
        }
      }
    }
  }
}
</style>
