<template>
  <div class="p-[32px] flex justify-center">
    <div class="w-[80%]">
      <div class="wp-custom-slider bg-[url('/part2/m25.jpg')] ">
        <div class="fone bg-gray-500 bg-opacity-70 px-5 flex flex-col ">
          <div class="custom-content w-full p-10 bg-slate-800 my-10 p-5 flex flex-col justify-evenly rounded-md bg-opacity-90">
            <div>
              <h5 class="text-2xl text-slate-50 flex justify-center">You can share:</h5>
              <Social
                class="flex justify-center"
              />
            </div>
            <div class="flex justify-center p-5">
              <div class="flex flex-col justify-center w-[200px]">
                <h5 class="text-2xl text-slate-50 pb-1 flex justify-center">More info:</h5>
                <div class="flex flex-col">
                  <button type="button" v-scroll-to="'#short'" class="w-full focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Shorter</button>
                  <button type="button" class="focus:outline-none text-slate-50 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Further</button>
                </div>
              </div>
            </div>
            <div class="flex justify-center">
              <p class="border-b-2 border-purple-700 text-slate-50" :class="sizeFont">About the project!</p>
            </div>
          </div>
          <div class="custom-slider w-full">
            <Splide :options="{ rewind: true }">
              <SplideSlide>
                <img src="/slider/s1.jpg" alt="Sample 1">
              </SplideSlide>
              <SplideSlide>
                <img src="/slider/s2.jpg" alt="Sample 1">
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import '@splidejs/vue-splide/css/sea-green';
  import Social from '../Social.vue';
  import { defineProps } from 'vue';

  const props = defineProps({
    sizeFont: {
      type: String, 
      required: true,
    }
  });
</script>
<style>
</style>