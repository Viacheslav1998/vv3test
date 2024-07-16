<template>
  <div 
    :class="sizeFont"
    class="bg-slate-300 p-[32px] flex justify-center" 
    id="short"
  >
    <div class="w-[80%] bg-neutral-50 p-[40px] rounded-lg flex flex-col"> 
      <p class="text-4xl text-gray-50 py-5 bg-slate-800 w-[200px] flex justify-center mb-5 rounded-lg border border-black">
        1988-year
      </p><br>
      <p> 
      Custom building 
      expensive but best anywhere you look<br>
            You're correct when it comes to the construction company 
      it was founded in 1988.
      at that time there was a young man who wanted a house from the future - but he didn't want it to look futuristic.
      he wanted it to be comfortable.
      </p>
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
