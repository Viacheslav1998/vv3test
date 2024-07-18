<template>
  <div class="main-about">
    <!-- title line -->
    <div class="wp-space w-full bg-[url('/part2/m24.jpg')] bg-cover bg-stone-300 p-20 mt-20">
      <h4 class="text-5xl text-orange-600">this is where you'll get to know the company.</h4>
      <p class="border-b border-slate-900 pl-1" :class="sizeFont">History, Influence, Success ...</p>
    </div>

  </div>
</template>

<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    sizeFont: {
      type: String, 
      required: true,
    }
  });
</script>