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