<template>
  <div class="hero-section">
    <div class="title-and-description-wrapper">
      <div>
        <h2 class="title">Hi, I'm Joshua</h2>
        <h2 class="title">FrontEnd Developer</h2>
      </div>
      <p class="description">
        I'm a passionate Full Stack Developer at Voizo, with expertise in building modern web
        applications and scalable backend systems. I specialize in creating innovative solutions
        using cutting-edge technologies like React, Node.js, and cloud services. My focus is on
        delivering high-performance, user-centric applications that drive business growth.
      </p>
    </div>
    <Tools />
  </div>
</template>

<script>
import Tools from './Tools.vue'

export default {
  name: 'HeroSection',
  components: {
    Tools,
  },
}
</script>

<style>
.hero-section {
  position: relative;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;

  .title-and-description-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .title {
      font-family: var(--fancy-font);
      font-size: clamp(2.5rem, -0.1277rem + 6.8085vw, 6rem);
    }

    .description {
      font-size: clamp(0.84375rem, 0.7606rem + 0.266vw, 1rem);
      max-width: 700px;
      line-height: 26px;
    }
  }
}
</style>
