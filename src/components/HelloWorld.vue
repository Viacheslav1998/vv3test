<template>
  <div class="w-full bg-violet-950">
    <h1 class="text-5xl text-gray-50 font-semibold p-8">Страница главных новостей</h1>
  </div>
  <!-- the card  -->
  <div
  class="m-5 block rounded-lg bg-gray-800 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
  <div
    class="text-white border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
    {{ count }}
  </div>
  <div class="p-6">
    <h5
      class="text-white mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
      тут можно изменить цвет: {{ color }} полученый код цвета благодаря реактивности (ref)
    </h5>
    <p class="text-white mb-4 text-base text-neutral-600 dark:text-neutral-200">
      With supporting text below as a natural lead-in to additional
      content.
    </p>
    <button
      @click="inc"
      type="button"
      class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      data-te-ripple-init
      data-te-ripple-color="light">
      Увели́чить 
    </button>
  </div>
</div>
<!-- end card -->
  <div class="grid grid-cols-4 gap-4 m-4">
    <div class="bg-indigo-500 p-4 rounded-lg">01</div>
    <div class="bg-indigo-500 p-4 rounded-lg">02</div>
    <div class="bg-indigo-500 p-4 rounded-lg">03</div>
    <div class="bg-indigo-500 p-4 rounded-lg">04</div>
    <div class="bg-indigo-500 p-4 rounded-lg">05</div>
    <div class="bg-indigo-500 p-4 rounded-lg">06</div>
    <div class="bg-indigo-500 p-4 rounded-lg">07</div>
    <div class="bg-indigo-500 p-4 rounded-lg">08</div>
  </div>
     
</template>

<script setup>
  import { ref } from 'vue';
  
  const count = ref(0);
  const color = ref('#010101');

  function inc() {
    count.value++;
  }
</script>

<style scoped>
</style>
