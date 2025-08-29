<template>
  <div>
    <div class="social flex">
      <a href="#" 
        class="p-1 transition ease-in-out delay-75 hover:-rotate-[-17deg]"
        v-for="(image, link) in socialLinks" :key="link"
      >
        <img :src="image" :alt="'Social icon ' + (link + 1)" >
      </a>
    </div>
  </div>
</template>
<script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    socialLinks: {
      type: Array, 
      required: true, 
    }
  });

  const socialLinks = [
    "/social/f.png",
    "/social/i.png",
    "/social/p.png",
    "/social/t.png",
  ];
</script>
