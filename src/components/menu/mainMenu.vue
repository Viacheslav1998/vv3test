<template>
	<!-- 
	 I don't have the free time to customize it.
	 because the menu has been expanded
	 -->
  <div class="menu flex bg-[url('/short/m8.jpg')] bg-cover">
		<div class="logo bg-blue-600 w-1/3 flex justify-end backdrop-blur-sm pl-5">
			<h2 class="p-5 text-5xl text-slate-50">
				<span class="bg-lime-300 text-black p-1 rounded">Xp</span> Serious
			</h2>
		</div>
		<div class="menu w-2/3">
			<ul class="flex bg-slate-100 p-8 text-xl bg-opacity-95">
        <li
          class="pr-4 hover:text-lime-600 cursor-pointer"
          v-for="(index) in list"
        >
          {{ index }}
        </li>
			</ul>
		</div>
		


<button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>

<!-- Dropdown menu -->
<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>


		<div class="space w-1/3 flex bg-slate-100 bg-opacity-95 pt-8">
			<div class="lang">
				<img src="/images/lang.png" alt="lang">
			</div>
			<div class="ico pl-4">
				<img src="/images/size.png" alt="size">
			</div>
		</div>
	</div>
</template>
<script setup>
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';

// initialize components based on data attribute selectors
onMounted(() => {
	initFlowbite();
});

// list	
const list = [
	"Blog",
	"Services",
	"Our Business",
	"How We Help",
	"List",
	"Contact"
];

</script>


<style>	
</style>