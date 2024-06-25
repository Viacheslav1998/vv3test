<template>
  <div class="menu flex bg-[url('/short/m8.jpg')] bg-cover">
		<div class="logo bg-blue-600 w-1/4 flex justify-end ">
			<h2 class="p-5 text-5xl text-slate-50">
				<span class="bg-lime-300 text-black p-1 rounded">Xp</span> Serious
			</h2>
		</div>
		<div class="menu w-3/4">
			<ul class="flex bg-slate-100 p-8 text-xl bg-opacity-95">
        <li
          class="pr-4 hover:text-lime-600 cursor-pointer"
          v-for="(index) in list"
        >
          {{ index }}
        </li>
			</ul>
		</div>
	</div>
</template>
<script setup>
  
// list	
const list = [
	"Blog",
	"Services",
	"Our Business",
	"How We Help",
	"Take The Tour",
	"Contact"
];

</script>

<style>	
</style>