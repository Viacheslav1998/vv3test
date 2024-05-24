<template>
  <div>
    <div class="wrapper-menu bg-gray-300">
  	  <div class="logo p-[35px] bg-slate-800 min-w-[450px] flex">	
  	  	<img src="/images/p4.png" alt="logo" class="pr-2 max-w-[28px] max-h-[22px]">
        <h2 class="font-sans text-xl text-orange-300 font-bold">{{ title }}</h2>
      </div>

	  <div class="nav">
	    <ul class="flex flex-row w-full p-5">
	      <li 
	        class="pl-5"
	        v-for="(item, index) in menu" :key="index"
	      >
	      	<p class="text-lg hover:text-stone-600 cursor-pointer">{{ item }}</p>
	      </li>
	    </ul>
	  </div>
    </div>
  </div>
  <!-- just training -->
  <testComponent
    :news=specialTestProp
  />
  <!-- поменеяй на блок новостей -->
</template>

<script setup>
  import testComponent from '../tests/testComponent.vue';

  /*use axios*/
  const menu = [
    "Design", 
    "Services", 
    "Our Business",
    "How We Help",
    "Take The Tour",
    "Contact"
  ];
  /*title*/
  const title = "XP-SERIOUS"; 
  const specialTestProp = "value special test absolute";

</script>
 
<style>
</style>

<!-- 
наша цель 
массив 
перебрать ссылки для меню (что то типо cms)
script setup <===
-->