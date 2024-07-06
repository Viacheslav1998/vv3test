<template>
  <div class="wp-block flex justify-center p-8 bg-slate-200 pb-20">
    <div class="w-[80%] h-[400px] bg-[url('/part2/m22.jpg')]  flex rounded-lg  drop-shadow-md border-4 border-stone-50">
      <div class="main-block flex justify-between w-full">
        <div class="left-block w-3/5 bg-zinc-950 m-10 flex flex-col justify-around p-2 bg-opacity-55 rounded-lg">
          <div class="pl-10">
            <section class="font-mono text-white">
              <h1 class="text-6xl">The Big Company Ideas</h1>
              <h2 class="text-5xl">Useful Technologies</h2>
              <h3 class="text-4xl">And Evolution</h3>
            </section>
          </div>
          <Social 
            class="pl-9"  
          /> 
        </div>
        <div class="right-block w-2/5 m-10 flex justify-center bg-[url('/part2/m19.jpg')] bg-cover rounded-lg shadow-cyan-500/50">
          <div class="flex flex-col justify-center">
            <button class="bg-sky-400 hover:bg-sky-300 text-white font-bold py-4 px-10 rounded m-1">
              Sign In
            </button>
            <button class="bg-lime-400 hover:bg-lime-300 text-white font-bold py-4 px-10 rounded m-1">
              Log On
            </button>
          </div>
        </div>
      </div> 
    </div>
  </div>
</template>

<script setup>
  import Social from '../Social.vue';

</script>

<style>
</style>