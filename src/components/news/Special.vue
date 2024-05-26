<template>
  <div class="block-news pl-[35px] text-gray-300 bg-slate-800 rounded-2xl m-[5px] p-[15px] flex justify-between">
    <div>
      <h1>{{ part }}</h1>
      <p>{{ news }}</p>	
    </div>
    <div>
      <img src="/images/brick1.png" class="w-12">
    </div>
  </div>

   <div class="block-news pl-[35px] text-gray-300 bg-slate-800 rounded-2xl m-[5px] p-[15px] flex justify-between">
    <div>
      <h1>{{ part }}</h1>
      <p>{{ news }}</p>		
    </div>
    <div>
      <img src="/images/brick1.png" class="w-12">
    </div>	
  </div>
</template>

<script setup>
  import {defineProps} from 'vue';
  const props = defineProps({
  	news: String,
  	part: String
  }); 
</script>

