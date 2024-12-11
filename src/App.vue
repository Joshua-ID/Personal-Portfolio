<template>
  <div class="main-container">
    <LoadingState v-if="isLoading" />
    <div v-else>
      <HeaderSection />
      <SideBar />
      <LandingPage />
    </div>
    <Dock />
  </div>
</template>

<script>
import Dock from './components/Dock.vue'
import HeaderSection from './components/HeaderSection.vue'
import LandingPage from './components/LandingPage.vue'
import LoadingState from './components/LoadingState.vue'
import SideBar from './components/SideBar.vue'

export default {
  name: 'App',
  components: {
    HeaderSection,
    SideBar,
    Dock,
    LandingPage,
    LoadingState,
  },
  data() {
    return {
      isLoading: true,
    }
  },
  mounted() {
    this.setLoadingState()
  },
  methods: {
    setLoadingState() {
      setTimeout(() => {
        this.isLoading = false // Set loading to false after 3 seconds
      }, 5000)
    },
  },
}
</script>
<style>
.main-container {
  scroll-behavior: smooth;
}
</style>
