<template>
  <div class="wp-custom-slider bg-[url('/part2/m25.jpg')] ">
    <div class="fone bg-gray-500 bg-opacity-70 w-full flex justify-around px-5">
      <div class="custom-content  w-2/5 bg-slate-800 my-20 p-5 text-yellow-500 flex flex-col justify-around rounded-md bg-opacity-90">
        <div>
          <h5 class="text-2xl text-amber-50">The choice is obvious</h5>
          <p>
            Huge selection of good projects
            architects have been coming up with this for years 
            building these projects also takes into account 
            moisture. frost resistance. temperature in general.
            The company was formed long before the reign of the King Count.
          </p> 
        </div>
        <div>
          <h5 class="text-2xl text-amber-50">Who even knows what this is about?</h5>
          <p>A historian whose company has long been responsible for the quality and choice of materials that have been carefully selected. or it wouldn't be legendary. </p>
        </div>
        <div>
          <h5 class="text-2xl text-amber-50">You can share:</h5>
          <div class="social flex">
            <a href="#" 
              class="p-1"
              v-for="(image, link) in link_social" :key="link"
            >
              <img :src="image" :alt="'Social icon ' + (link + 1)" >
            </a>
          </div>
        </div>

        <div>
          <h5 class="text-2xl text-amber-50 pb-1">More info:</h5>
          <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Up</button>
<button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Down</button>
        </div>
      </div>
      <div class="custom-slider w-3/5 pt-8 ">
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
  //social
  const link_social = [
    "/social/f.png",
    "/social/i.png",
    "/social/p.png",
    "/social/t.png",
  ]
</script>
<style>
</style>