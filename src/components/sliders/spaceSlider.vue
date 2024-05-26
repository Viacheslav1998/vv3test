<template>
  <div class="wrapper-space h-[800px] flex flex-row">
    <div class="box-new bg-slate-200 min-w-[450px] p-[10px]">
      <div>
        <Special
	      :news="news"
	      :part="part"
	    />
      </div>
    </div>
    <div class="slider bg-slate-400 w-full">
	  и слайдер
    </div>
  </div>
</template>

<script setup>
  import Special from '../news/Special.vue';
  
  const news = "test message";
  const part = "test2";
</script>
<style>
</style>