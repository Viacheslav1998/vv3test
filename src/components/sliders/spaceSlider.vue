<template>
  <div class="wp-custom-slider bg-[url('/part2/m25.jpg')] ">
    <div class="fone bg-gray-500 bg-opacity-70 w-full flex justify-around">
 
      <div class="custom-content  w-[500px] bg-gray-500 my-20 p-5">
        <h5 class="text-2xl">The choice is obvious</h5>
        <p>
          Huge selection of good projects
          architects have been coming up with this for years 
          building these projects also takes into account 
          moisture. frost resistance. temperature in general.
          The company was formed long before the reign of the King Count.
        </p>  
        <h5 class="text-2xl">Who even knows what this is about?</h5>
        <p>A historian whose company has long been responsible for the quality and choice of materials that have been carefully selected. or it wouldn't be legendary. </p>
      </div>

      <div class="custom-slider w-[500px] my-20">
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