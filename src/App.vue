<template>
  <div class="main-container">
    <HeaderSection />
    <SideBar />
    <HeroSection />
    <!-- <FooterSection /> -->
  </div>
</template>

<script>
import FooterSection from './components/FooterSection.vue'
import HeaderSection from './components/HeaderSection.vue'
import HeroSection from './components/HeroSection.vue'
import SideBar from './components/SideBar.vue'

export default {
  name: 'App',
  components: {
    HeaderSection,
    HeroSection,
    SideBar,
    FooterSection,
  },
}
</script>

<style>
.main-container {
  /* height: 100vh; */
  background: var(--light-mood);
}
</style>
