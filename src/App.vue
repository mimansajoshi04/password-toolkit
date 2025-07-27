<template>
  <div id="app">
    <Navbar />
    <main class="main-content">
      <router-view />
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import Navbar from './components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  components: {
    Navbar,
    FooterComponent
  }
};
</script>

<style>
/* Full-height layout using Flexbox */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1; /* Fills the remaining height */
  padding-bottom: 40px; /* Optional: space between content and footer */
}
</style>
