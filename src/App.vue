<template>
  <div class="main-container">
    <HeaderSection />
    <SideBar />
    <LandingPage />
  </div>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue'
import LandingPage from './components/LandingPage.vue'
import SideBar from './components/SideBar.vue'

export default {
  name: 'App',
  components: {
    HeaderSection,
    SideBar,
    LandingPage,
  },
}
</script>

<style>
.main-container {
  /* height: 100vh; */
  /* background: var(--light-mood); */
}
</style>
