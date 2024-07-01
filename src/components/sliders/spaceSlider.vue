<template>
  <div class="wp-custom-slider bg-[url('/part2/m25.jpg')] ">
    <div class="fone bg-zinc-400 bg-opacity-70 w-full flex justify-end">
 
      <div class="slider-content">
        вот тут заголовок сделать <br>
        и выровнять блок 
        
      </div>
      <div class="custom-slider  w-[800px] my-20">
        <Splide :options="{ rewind: true }">
          <SplideSlide>
            <img src="/part2/m11.jpg" alt="Sample 1">
          </SplideSlide>
          <SplideSlide>
            <img src="/part2/m10.jpg" alt="Sample 2">
          </SplideSlide>
        </Splide>
      </div>
    </div>
  </div>
</template>
<script setup>
  import '@splidejs/vue-splide/css/sea-green';
</script>
<style>
</style>