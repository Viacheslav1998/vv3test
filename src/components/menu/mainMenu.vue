<template>
  <div class="menu flex bg-[url('/short/m8.jpg')] bg-cover">
		<div class="logo bg-blue-600 w-1/3 flex justify-end backdrop-blur-sm pl-5">
			<h2 class="p-5 text-5xl text-slate-50">
				<span class="bg-lime-300 text-black p-1 rounded">Xp</span> Serious
			</h2>
		</div>
		<div class="menu w-2/3">
			<ul class="flex bg-slate-100 p-8 text-xl bg-opacity-95">
        <li
          class="pr-4 hover:text-lime-600 cursor-pointer "
					:class="currentFontSize"
          v-for="(index) in list"
        >
          {{ index }}
        </li>
			</ul>
		</div>
		<div class="space w-1/3 flex bg-slate-100 bg-opacity-95 pt-8">
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
	<div class="mt-4">
      <p :class="currentFontSize">Example Text</p>
    </div>

	<div :class="currentFontSize">тут тоже пример</div>
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