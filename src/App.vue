<template>
  <div class="main-container">
    <HeaderSection />
    <Dock />
    <SideBar />
    <LandingPage />
  </div>
</template>

<script>
import Dock from './components/Dock.vue'
import HeaderSection from './components/HeaderSection.vue'
import LandingPage from './components/LandingPage.vue'
import SideBar from './components/SideBar.vue'

export default {
  name: 'App',
  components: {
    HeaderSection,
    SideBar,
    Dock,
    LandingPage,
  },
}
</script>
<style>
.main-container {
  scroll-behavior: smooth;
}
</style>
