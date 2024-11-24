<template>
  <div data-aos="fade-right" data-aos-duration="1500" id="about-section">
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
#about-section {
  padding-top: 5rem;
  display: flex;
  gap: 2rem;
  flex-direction: column;

  .about-text {
    font-size: clamp(0.84375rem, 0.7606rem + 0.266vw, 1rem);
    line-height: 26px;
  }
}
</style>
