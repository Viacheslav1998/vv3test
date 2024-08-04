<template>
  <div class="py-8 flex justify-center">
    <div class="w-[100%] bg-amber-400">
      <div class="wp-custom-slider bg-[url('/part2/m25.jpg')]">
        <div class="fone bg-gray-500 bg-opacity-70 lg:px-10 max-lg:px-8 py-5">
          <div class="flex justify-center">
            <div class="lg:p-[32px] max-lg:py-5 lg:w-[81%] max-lg:w-full custom-content bg-slate-800 justify-evenly rounded-md bg-opacity-90">
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
          </div>
          <!-- Carousel -->
          <div class="flex justify-center">
            <div id="custom-controls-gallery" class="relative w-full my-5 lg:w-[80%]" data-carousel="slide">
              <!-- Carousel wrapper -->
              <div class="relative max-lg:h-[200px] lg:h-[500px] overflow-hidden rounded-lg ">
                <!-- Item 1 -->
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="/slider/s2.jpg" alt="Sample 1" class="max-w-full h-auto">
                </div>
                <!-- Item 2 -->
                <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                  <img src="/slider/s1.jpg" alt="Sample 2" class="max-w-full h-auto">
                </div>
                 <!-- Item 2 -->
                 <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                  <img src="/slider/s3.jpg" alt="Sample 2" class="max-w-full h-auto">
                </div>
              </div>
              <div class="flex justify-center items-center pt-4">
                <button type="button" class="flex justify-center items-center me-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
                  <span class="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
                    <svg class="rtl:rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                    </svg>
                    <span class="sr-only">Previous</span>
                  </span>
                </button>
                <button type="button" class="flex justify-center items-center h-full cursor-pointer group focus:outline-none" data-carousel-next>
                  <span class="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
                    <svg class="rtl:rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    <span class="sr-only">Next</span>
                  </span>
                </button>
              </div>
            </div>
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