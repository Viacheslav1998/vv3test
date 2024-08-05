<template>
  <div class="tech-main lg:p-[32px] flex justify-center bg-slate-200 ">
    <div class="lg:w-[80%]">  
      <div class="wp-space max-lg:mx-8 bg-[url('/part2/m24.jpg')] bg-cover bg-stone-300 lg:p-20 max-lg:p-5 my-5">
        <h4 class="text-5xl max-lg:text-3xl text-green-600">Technologies applicable here.</h4>
        <p class="border-b border-slate-900 pl-1" :class="sizeFont">Electricity, water, garden, nature, light</p>
      </div>
      <div class="title-description bg-teal-500 px-20  py-10 mt-10">
        <h3 class="text-3xl text-amber-300">Review of some concepts</h3>
      </div>
      <div class="wrapper-tech">
        <div class="item-t pt-5 flex max-lg:flex-col">
          <div class="w-1/6 col-span-2 flex max-lg:w-full">
            <img src="/part2/1.jpg" alt="imagen was here" class="p-1 object-cover max-lg:w-full max-lg:h-[400px]">
          </div>
          <div class="bg-slate-100  w-5/6">
            <p class="m-20 text-blue-950" :class="sizeFont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sequi ut optio numquam officiis debitis cupiditate facilis voluptates necessitatibus, nihil rem voluptate blanditiis maiores rerum maxime dolores dolorem impedit quidem.</p>
          </div>
        </div>
        <div class="item-t pt-5 flex flex-row">
          <div class="w-1/6 col-span-2 flex">
            <img src="/part2/2.jpg" alt="imagen was here" class="object-cover">
          </div>
          <div class="bg-slate-100  w-5/6">
            <p class="m-20 text-blue-950" :class="sizeFont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sequi ut optio numquam officiis debitis cupiditate facilis voluptates necessitatibus, nihil rem voluptate blanditiis maiores rerum maxime dolores dolorem impedit quidem.</p>
          </div>
        </div> 
        <div class="item-t pt-5 flex flex-row">
          <div class="w-1/6 col-span-2 flex">
            <img src="/part2/3.jpg" alt="imagen was here" class="object-cover">
          </div>
          <div class="bg-slate-100  w-5/6">
            <p class="m-20 text-blue-950" :class="sizeFont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sequi ut optio numquam officiis debitis cupiditate facilis voluptates necessitatibus, nihil rem voluptate blanditiis maiores rerum maxime dolores dolorem impedit quidem.</p>
          </div>
        </div> 
        <div class="item-t pt-5 flex flex-row">
          <div class="w-1/6 col-span-2 flex">
            <img src="/part2/4.jpg" alt="imagen was here" class="object-cover">
          </div>
          <div class="bg-slate-100  w-5/6">
            <p class="m-20 text-blue-950" :class="sizeFont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sequi ut optio numquam officiis debitis cupiditate facilis voluptates necessitatibus, nihil rem voluptate blanditiis maiores rerum maxime dolores dolorem impedit quidem.</p>
          </div>
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