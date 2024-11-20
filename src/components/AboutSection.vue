<template>
  <div class="about-section">
    <label class="label">About</label>
    <p class="about-text">
      I'm a UI/UX Designer and Full Stack Developer based in India, currently pursuing my degree at
      Vishwakarma Institute of Technology, Pune. I blend design thinking with technical expertise to
      create intuitive and scalable digital solutions. With a strong foundation in both design and
      development, I bridge the gap between aesthetics and functionality. My approach combines
      user-centered design principles with robust full-stack development practices, ensuring
      seamless experiences from concept to deployment.
    </p>
  </div>
</template>

<script>
export default {
  name: 'AboutSection',
}
</script>

<style scoped>
.about-section {
  display: flex;
  gap: 2rem;
  flex-direction: column;

  .about-text {
    line-height: 30px;
  }
}
</style>
