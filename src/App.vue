<template class="custom">
  <Header />
  <HelloWorld />
  <Footer />
</template>

<script setup>
  import HelloWorld from './components/HelloWorld.vue';
  import Header from './components/root/Header.vue';
  import Footer from './components/root/Footer.vue';
</script>

<style scoped>
.custom {
  background: silver;
  padding: 0;
  margin: 0;
}
</style>
