<template>
  <div class="menu flex bg-[url('/short/m8.jpg')] bg-cover max-lg:flex-col">
		<div class="logo max-lg:w-full max-lg:justify-start bg-blue-600 max-2xl:w-1/2 2xl:w-1/3 flex justify-end backdrop-blur-sm lg:pl-5 max-lg:pl-3">
			<h2 class="p-5 text-5xl text-slate-50">
				<span class="bg-lime-300 text-black p-1 rounded">Xp</span> Serious
			</h2>
		</div>
		<div class="menu lg:w-3/4 max-lg:hidden">
			<ul class="flex max-lg:w-full bg-slate-100 p-11 text-xs bg-opacity-95 ">
        <li class="pr-4 hover:text-lime-600 cursor-pointer">
       
        </li> 
			</ul>
		</div>
		<!-- dropdown -->
		<div class="bg-slate-200 px-8 py-4 lg:hidden">
			<button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Menu <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
				<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
				</svg>
			</button>
			<div id="dropdown" class="w-full z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
				<ul class="px-4 py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
					<li
					  class="border-b"
						:class="currentFontSize"
						v-for="(index) in list"
					>
					  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{{ index }}</a>
					</li>
				</ul>
			</div>
		</div>

		<div class="space lg:w-1/3 flex bg-slate-100 bg-opacity-95 lg:pt-8 max-lg:px-8">
			<div class="lang">
				<button id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" type="button">
				  <img src="/images/lang.png" alt="lang">
			  </button>
				<!-- dropdown -->
				<div id="dropdownAvatar" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
					<ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
						<li>
							<a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">En</a>
						</li>
						<li>
							<a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Rus</a>
						</li>
						<li>
							<a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Kz</a>
						</li>
						<li>
							<a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Esp</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="size pl-4">
				<button id="dropdownUserAvatarButton" data-dropdown-toggle="fontSize" type="button">
				  <img src="/images/size.png" alt="font-size">
			  </button>
				<!-- dropdown -->
				<div id="fontSize" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
					<ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
						<li>
							<a href="#" @click="handleChangeFontSize('text-lg')" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-lg">level 1</a>
						</li>
						<li>
							<a href="#" @click="handleChangeFontSize('text-xl')" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-xl">level 2</a>
						</li>
						<li>
							<a href="#" @click="handleChangeFontSize('text-2xl')" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-2xl">level 3</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="theme pl-4">
				<img src="" alt="themeSite">
			</div>
		</div>
	</div>
</template>
<script setup>
import { initFlowbite } from 'flowbite';
import { ref, onMounted, watchEffect  } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const currentFontSize = ref(store.getters.getCurrentFontSize);

// get current size
watchEffect(() => {
  currentFontSize.value = store.getters.getCurrentFontSize;
});

// change current size
const handleChangeFontSize = newSize => {
  store.dispatch('changeFontSize', newSize);
};

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