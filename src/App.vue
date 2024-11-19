<template>
  <div class="main-container">
    <HeaderSection />
    <SideBar />
    <HeroSection />
  </div>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue'
import HeroSection from './components/HeroSection.vue'
import SideBar from './components/SideBar.vue'

export default {
  name: 'App',
  components: {
    HeaderSection,
    HeroSection,
    SideBar,
  },
}
</script>

<style>
.main-container {
  /* height: 100vh; */
  background: var(--light-mood);
}
</style>
