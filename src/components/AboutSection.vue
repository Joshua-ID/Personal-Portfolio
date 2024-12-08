<template>
  <div data-aos="fade-right" data-aos-duration="1500" id="about-section">
    <label class="label">About</label>
    <p class="about-text">
      I'm FrontEnd Developer based in Nigeria. I'm a technical expertise to create intuitive and
      scalable digital solutions. I'm a quick learner and collaborate closely with clients to create
      efficient, scalable, and user-friendly solutions that solve real-world problems. I bridge the
      gap between aesthetics and functionality. My approach combines user-centered design principles
      with robust development practices. My focus is on delivering high-performance, user-centric
      applications that drive business growth. Let's work together to bring your ideas to life!
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
  padding-top: 3rem;
  display: flex;
  gap: 2rem;
  flex-direction: column;

  .about-text {
    font-size: clamp(0.84375rem, 0.7606rem + 0.266vw, 1rem);
    line-height: 26px;
  }
}
</style>
