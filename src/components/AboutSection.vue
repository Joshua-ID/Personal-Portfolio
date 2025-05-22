<template>
  <section data-aos="fade-right" data-aos-duration="1500" id="about-section">
    <label class="label">About</label>
    <p class="about-text">
      I'm a Front-End Developer based in Nigeria with a passion for creating intuitive, scalable,
      and impactful digital solutions. With strong technical expertise, I excel at bridging the gap
      between aesthetics and functionality, ensuring every project I deliver is both visually
      appealing and highly efficient. I pride myself on being a quick learner who collaborates
      closely with clients to craft user-friendly solutions tailored to real-world challenges. My
      approach blends user-centered design principles with robust development practices, enabling me
      to create high-performance applications that drive business growth.
      <br />
      Let’s work together to transform your ideas into reality and create impactful solutions that
      deliver tangible results.
    </p>
  </section>
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
