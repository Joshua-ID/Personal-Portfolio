<template>
  <div class="main-container">
    <LoadingState v-if="isLoading && !isNotFoundPage" />
    <div v-else>
      <HeaderSection v-if="!isNotFoundPage" />
      <SideBar v-if="!isNotFoundPage" />
      <router-view />
    </div>
    <Dock />
  </div>
</template>

<script>
import Dock from './components/Dock.vue'
import HeaderSection from './components/HeaderSection.vue'
import LoadingState from './components/LoadingState.vue'
import SideBar from './components/SideBar.vue'

export default {
  name: 'App',
  components: {
    HeaderSection,
    SideBar,
    Dock,
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

  computed: {
    // Check if the current route is NotFound
    isNotFoundPage() {
      return this.$route.name === 'NotFound'
    },
  },
}
</script>
<style>
.main-container {
  scroll-behavior: smooth;
}
</style>
