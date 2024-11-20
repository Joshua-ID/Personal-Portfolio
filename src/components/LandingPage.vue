<template>
  <div class="landing-page-container">
    <HeroSection />
    <AboutSection />

    <FooterSection />
  </div>
</template>

<script>
import AboutSection from './AboutSection.vue'
import FooterSection from './FooterSection.vue'
import HeroSection from './HeroSection.vue'

export default {
  name: 'LandingPage',
  components: {
    HeroSection,
    AboutSection,
    FooterSection,
  },
}
</script>

<style>
.landing-page-container {
  overflow: hidden;
  padding: 2rem 3rem;
  max-width: 1440px;
  margin: auto;
}
</style>
