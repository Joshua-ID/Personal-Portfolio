<template>
  <a :href="items.link" target="_blank" class="card">
    <img class="project-image" :src="items.image" />
    <div class="bottom-description-and-ctx-btn">
      <div class="bottom-description">
        <!-- Loop through the listItem array and display each project name -->
        <label class="item" v-for="project in items.listItem" :key="project.name">{{
          project.name
        }}</label>
      </div>
      <a :href="items.link" target="_blank" class="ctx-btn"
        >View Project <i class="fa-solid fa-arrow-right"></i
      ></a>
    </div>
  </a>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    items: {
      type: Object,
      default: () => [
        {
          image: '',
          link: '',
          listItems: [],
        },
      ],
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
  overflow: hidden;
  position: relative;

  .project-image {
    width: 100%;
    height: 280px;
    border-radius: 15px;
    object-fit: cover;
    transition: transform 0.6s ease-in-out;
  }

  &:hover .project-image {
    transform: scale(1.1);
    opacity: 0.8;
  }

  .bottom-description-and-ctx-btn {
    display: flex;
    gap: 18px;
    align-items: center;
    justify-content: space-between;

    .item {
      font-size: clamp(0.53125rem, 0.4149rem + 0.3723vw, 0.75rem);
    }

    .bottom-description {
      display: flex;
      flex-wrap: wrap;
      align-self: center;
      column-gap: 13px;
      row-gap: 8px;
      /* gap: 13px; */
    }

    .ctx-btn {
      white-space: nowrap;
      font-size: clamp(0.75rem, 0.6669rem + 0.266vw, 0.90625rem);
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
