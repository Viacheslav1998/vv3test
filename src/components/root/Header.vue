<template>
  <div 
    class="header">
    
   	<mainMenu />
    <block />
    <Short 
      :sizeFont="currentFontSize"
    /> 
  </div>
</template>

<script setup>
  import mainMenu from '../menu/mainMenu.vue';
  import block from '../menu/Block.vue';
  import Short from '../content/Short.vue';
  import { computed } from 'vue';
  import { useCustomStore } from '../../hooks/useCustomStore';
  
  // use and apply the current style 
  const store = useCustomStore();
  const currentFontSize = computed(() => store.getters.getCurrentFontSize);
</script>

<style>

</style>