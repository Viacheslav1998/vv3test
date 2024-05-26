<template>
  <div class="block-news pl-[35px] text-gray-400 bg-slate-200">
    <p>{{ news }}</p>	
    <h1>{{ part }}</h1>
  </div>
</template>

<script setup>
  import {defineProps} from 'vue';
  const props = defineProps({
  	news: String,
  	part: String
  }); 
</script>

