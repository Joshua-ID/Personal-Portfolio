<template>
  <div class="not-found">
    <h1>404</h1>
    <p>Oops! The page you are looking for does not exist.</p>
    <router-link to="/">Go back to Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
}
</script>

<style scoped>
.not-found {
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 100%;
  text-align: center;

  @media (max-width: 650px) {
    padding: 0.5rem 1rem;
  }
  @media (max-width: 450px) {
    padding: 0.2rem 0.8rem;
  }

  h1 {
    font-size: 5rem;
    color: #ff6f61;
  }

  p {
    font-size: 1.5rem;
    margin: 20px 0;
  }

  a {
    text-decoration: none;
    color: #007bff;
  }
}
</style>
