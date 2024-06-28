<template>
  <div class="wp-block flex justify-center p-8 bg-slate-200">
    <div class="w-[80%] h-[400px] bg-[url('/part2/m19.jpg')]  flex rounded-lg  drop-shadow-md border-4 border-stone-50">
      <div class="main-block flex justify-between w-full">
        <div class="left-block w-3/5 bg-zinc-950 m-10 flex flex-col justify-around p-2 bg-opacity-55 rounded-lg">
          <div class="pl-10">
            <section class="font-mono text-yellow-50">
              <h1 class="text-6xl">The Big Company Ideas</h1>
              <h2 class="text-5xl">Useful Technologies</h2>
              <h3 class="text-4xl">And Evolution</h3>
            </section>
          </div>
          <div class="social flex pl-10">
            <a href="#" 
              class="p-1"
              v-for="(image, link) in link_social" :key="link"
            >
              <img :src="image" :alt="'Social icon ' + (link + 1)" >
            </a>
          </div>
        </div>
        <div class="right-block w-2/5 bg-red-300 m-10">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aliquid ducimus, magni laboriosam perspiciatis itaque soluta, consequuntur ratione debitis aperiam suscipit, fugiat quasi quibusdam commodi ea rem. Voluptatum, ratione ducimus.</p>
        </div>
      </div> 
    </div>
  </div>
</template>

<script setup>
  const link_social = [
    "/social/f.png",
    "/social/i.png",
    "/social/p.png",
    "/social/t.png",
  ]
</script>

<style>
</style>