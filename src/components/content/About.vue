<template>
  <div class="main-about">
    <!-- title line -->
    <div class="wp-space w-full bg-[url('/part2/m24.jpg')] bg-cover bg-stone-300 p-20 mt-20">
      <h4 class="text-5xl text-orange-600">this is where you'll get to know the company.</h4>
      <p class="border-b border-slate-900 pl-1" :class="sizeFont">History, Influence, Success ...</p>
    </div>
    <div class="mx-auto   overflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat shadow-lg"
      style="background-image:url('https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp');">
      <div class="mt-40">
        <div class="bg-white p-4 sm:p-8">
          <div
            class="font-inter text-2xl font-extrabold tracking-tight text-black">
            About our company
          </div>
          <div class="mt-1 text-sm font-medium text-slate-500">
            Adventure calls, conquer mountain trails.
          </div>
          <p class="mt-4 leading-7 text-slate-500">
            In the realm of towering mountains, where the air is crisp and
            the vistas stretch endlessly, one finds solace, exhilaration,
            and a profound connection with the untamed beauty of the natural
            world.
          </p>
          <p class="mt-4 leading-7 text-slate-500">
            As the sun rises over the rugged peaks, casting a golden glow on
            the majestic landscape, a sense of awe fills the heart,
            reminding us of the grandeur and power that reside in the
            mountains.
            As the sun rises over the rugged peaks, casting a golden glow on
            the majestic landscape, a sense of awe fills the heart,
            reminding us of the grandeur and power that reside in the
            mountains.
            As the sun rises over the rugged peaks, casting a golden glow on
            the majestic landscape, a sense of awe fills the heart,
            reminding us of the grandeur and power that reside in the
            mountains.
            As the sun rises over the rugged peaks, casting a golden glow on
            the majestic landscape, a sense of awe fills the heart,
            reminding us of the grandeur and power that reside in the
            mountains.
            As the sun rises over the rugged peaks, casting a golden glow on
            the majestic landscape, a sense of awe fills the heart,
            reminding us of the grandeur and power that reside in the
            mountains.
            As the sun rises over the rugged peaks, casting a golden glow on
            the majestic landscape, a sense of awe fills the heart,
            reminding us of the grandeur and power that reside in the
            mountains.
          </p>
        </div>
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