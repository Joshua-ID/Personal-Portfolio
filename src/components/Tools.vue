<template>
  <div class="tools-container">
    <span class="item" v-for="tool in tools" :key="tool.name"
      >{{ tool.name }} <i :class="tool.icon"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Tools',
  data() {
    return {
      tools: [
        { name: 'HTML5', icon: 'fa-brands fa-html5' },
        { name: 'CSS3', icon: 'fa-brands fa-css3-alt' },
        { name: 'Tailwind', icon: '' },
        { name: 'GitHub', icon: 'fa-brands fa-github' },
        { name: 'SCSS', icon: 'fa-brands fa-sass' },
        { name: 'JavaScript', icon: 'fa-brands fa-js' },
        { name: 'VsCode', icon: '' },
        { name: 'Vue.js', icon: 'fa-brands fa-vuejs' },
        { name: 'React', icon: 'fa-brands fa-react' },
        { name: 'NPM', icon: 'fa-brands fa-npm' },
        { name: 'Quasar', icon: '' },
        { name: 'Git', icon: 'fa-brands fa-square-github' },
        { name: 'Node', icon: 'fa-brands fa-node' },
        { name: 'TypeScript', icon: 'fa-brands fa-node-js' },
        { name: 'React Native', icon: 'fa-brands fa-react' },
      ],
    }
  },
}
</script>

<style>
.tools-container {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  animation: scroll-item 10s linear infinite;
  transition: transform 2s ease-in-out;

  &:hover {
    animation-play-state: paused;
  }

  .item {
    white-space: nowrap;
    font-size: clamp(0.8125rem, 0.7793rem + 0.1064vw, 0.875rem);
    padding: 0.5rem 0.8rem;
    backdrop-filter: blur(10px);
    border-radius: 15px;
    box-shadow: 0 1px 2px 0;
    /* box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2); */
    cursor: pointer;
    transition:
      transform 0.3s ease-in-out,
      box-shadow 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
}

@keyframes scroll-item {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-45%);
  }
}
</style>
