<template>
  <div class="wp-cards p-[32px] flex justify-center bg-zinc-400">
    <div class="w-[80%]">
      <div class="wp-space bg-[url('/part2/m24.jpg')] bg-cover bg-stone-300 p-20 my-10">
        <h4 class="text-5xl text-violet-600">Quick Offers</h4>
        <p 
          :class="sizeFont"
          class="border-b border-slate-900 pl-1"
        >we've got some great options for you</p>
      </div>

      <div class="box-cards flex justify-center">
        <!-- items -->
        <div class="max-w-sm rounded overflow-hidden shadow-lg m-5 bg-slate-100">
          <img class="w-full" src="/part2/m12.jpg" alt="Sunset in the mountains">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p class="text-gray-700" :class="sizeFont">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-indigo-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">#photography</span>
            <span class="inline-block bg-indigo-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">#travel</span>
            <span class="inline-block bg-indigo-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">#winter</span>
          </div>
        </div>
        <!-- items -->
        <div class="max-w-sm rounded overflow-hidden shadow-lg m-5 bg-slate-100">
          <img class="w-full" src="/part2/m23.jpg" alt="Sunset in the mountains">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p class="text-gray-700" :class="sizeFont">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-indigo-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">#photography</span>
            <span class="inline-block bg-indigo-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">#travel</span>
            <span class="inline-block bg-indigo-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">#winter</span>
          </div>
        </div>
        <!-- items -->
        <div class="max-w-sm rounded overflow-hidden shadow-lg m-5 bg-slate-100">
          <img class="w-full" src="/part2/m10.jpg" alt="Sunset in the mountains">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p class="text-gray-700" :class="sizeFont">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-indigo-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">#photography</span>
            <span class="inline-block bg-indigo-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">#travel</span>
            <span class="inline-block bg-indigo-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">#winter</span>
          </div>
        </div>
        <!-- items -->
        <div class="max-w-sm rounded overflow-hidden shadow-lg m-5 bg-slate-100">
          <img class="w-full" src="/part2/m16.jpg" alt="Sunset in the mountains">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p class="text-gray-700" :class="sizeFont">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-indigo-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">#photography</span>
            <span class="inline-block bg-indigo-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">#travel</span>
            <span class="inline-block bg-indigo-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">#winter</span>
          </div>
        </div>
      </div>
      <!-- title line -->
      <div class="wp-space w-full bg-[url('/part2/m24.jpg')] bg-cover bg-stone-300 p-20 mt-20">
        <h4 class="text-5xl text-pink-600">Well, if there's plenty of time ...</h4>
        <p class="border-b border-slate-900 pl-1"  :class="sizeFont">There are other suggestions as well</p>
      </div>
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