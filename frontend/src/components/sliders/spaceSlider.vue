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
          <div class="carousel flex justify-center">
            <div class="max-lg:w-[100%] lg:w-[80%] py-5">
              <div id="default-carousel" class="relative w-full" data-carousel="slide">
                <!-- Carousel wrapper -->
                <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                  <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                    <img src="/slider/s1.jpg" alt="Sample 2" class="max-w-full h-auto">
                  </div>

                  <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                    <img src="/slider/s2.jpg" alt="Sample 2" class="max-w-full h-auto">
                  </div>
                </div>
                <!-- Slider indicators -->
                <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                  <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                  <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                  <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                  <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                  <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                </div>
                <!-- Slider controls -->
                <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                  <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span class="sr-only">Previous</span>
                  </span>
                </button>
                <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                  <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
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