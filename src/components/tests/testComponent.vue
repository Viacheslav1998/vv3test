<template>
  <div class="block-news pl-[35px]">
    <p>{{ test }}</p>	
  </div>
</template>

<script setup>
  import {defineProps} from 'vue';
  const props = defineProps({
  	test: String
  }); 
</script>