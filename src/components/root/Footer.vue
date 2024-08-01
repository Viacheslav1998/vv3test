<template>
  <footer>
		<div class="w-full bg-gray-700 p-[32px] flex justify-center">
			<div class="w-[80%] ">
				
				<div class="logo flex justify-center my-5 ">
					<h5 class="text-gray-500 text-xl pb-5">LOGO</h5>
				</div>

				<div class="flex justify-center">
					<div>
					  <img src="/short/1.jpg" alt="logo" class="size-32 rounded-lg m-1 shadow-lg">
					</div>
					<div>
					  <img src="/short/2.jpg" alt="logo" class="size-32 rounded-lg m-1 shadow-lg">
					</div>
					<div>
					  <img src="/short/3.jpg" alt="logo" class="size-32 rounded-lg m-1 shadow-lg">
					</div>
					<div>
					  <img src="/short/4.jpg" alt="logo" class="size-32 rounded-lg m-1 shadow-lg">
					</div>
				</div>	

				<div class="logo flex justify-center ">
					<h5 class="text-gray-500 text-xl p-5">AFFILIATES</h5>
				</div>

				<div class="flex justify-center">
					<div class="border-t-4 border-lime-400 pt-5">
					  <img src="/short/5.jpg" alt="logo" class="rounded-lg w-48 m-1 shadow-lg">
					</div>
				</div>	

				<div class="logo flex justify-center">
					<h5 class="text-slate-500 text-xl pt-10">CONTACTS</h5>
				</div>

				<div class="wrapper-boxes flex justify-center">
					<div class="box w-[200px] flex flex-col p-5 m-5 text-slate-400 border-t border-slate-500">
						<h6 class="text-slate-300 py-2">Сontacts:</h6>
						<p class="text-xs">Michigan, Beverly Shores</p>
						<div class="telephone flex py-1">
							<img class="size-[16px]" src="/images/vc.png" alt="whatsapp">
							<p class="pl-1 text-xs text-emerald-500">+ 777 36 36 916</p>
						</div>
						<p class="text-xs">NYC, Olean</p>
						<div class="telephone flex py-1">
							<img class="size-[16px]" src="/images/vc.png" alt="whatsapp">
							<p class="pl-1 text-xs text-emerald-500">+ 916 88 88 000</p>
						</div>	
					</div>
					<div class="box w-[200px] flex flex-col p-5 m-5 text-slate-400 border-t border-slate-500">
						<h6 class="text-slate-300 py-2">Social networks</h6>
						<div>
							<Social
                class="flex justify-center w-[75%]"
              />
						</div>
					</div>
					<div class="box w-[200px] flex flex-col p-5 m-5 text-slate-400 border-t border-slate-500">
						<h6 class="text-slate-300 py-2">Our Developers</h6>
						<p>Viacheslav.K</p>
						<p>Illia.B</p>
					</div>
				</div>

				<div class="logo flex justify-center">
					<h5 class="text-slate-500 text-xl py-5">FAST NAVIGATION</h5>
				</div>

				<div class="flex justify-center ">
					<div class="w-[700px] border-t border-slate-500 p-8 flex flex-col">
						<a href="#" class="w-[100px] text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 my-1">Services</a>
						<a href="#" class="w-[100px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 my-1">Blog</a>	
						<a v-scroll-to="'#header'" class="w-[24px] py-2 hover:opacity-75">
							<img src="/images/up2.png" alt="up">
						</a>

						
					</div>
					
				</div>

				

			</div>
		</div>


		<div class="w-full bg-lime-500 h-[20px]">
		</div>
  </footer>
</template>

<script setup>
  import Social from '../Social.vue';

</script>

<style>
</style>