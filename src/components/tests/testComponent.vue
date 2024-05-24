<template>
  <div class="block-news">
    <p>{{ news }}</p>	
  </div>
</template>

<script setup>
  import {defineProps} from 'vue';
  const props = defineProps({
  	news: String
  }); 
</script>