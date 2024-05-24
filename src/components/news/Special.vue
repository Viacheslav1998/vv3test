<template>
  <div class="block-news pl-[35px] text-gray-400 bg-stone-100">
    <p>{{ news }}</p>	
  </div>
</template>

<script setup>
  import {defineProps} from 'vue';
  const props = defineProps({
  	news: String
  }); 
</script>