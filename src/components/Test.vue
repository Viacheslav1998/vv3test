<template>
  <div class="test-space"><h1>это область тестового компонента</h1><p>и ты уже знаешь как создавать компоненты в vue</p></div>
  <h1>this is Test component</h1>
  <slot name="header">
    <!-- контент для слота header -->
    <p class="text-end text-lime-400 m-10 underline decoration-wavy ...">заголовок по умолчанию</p>
  </slot>

  <slot>
     <div class="p-4 m-10 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
       <p class="text-center">This is nice day</p>
     </div>
  </slot>
</template>

<script>
import { FwbAlert } from 'flowbite-vue'
export default {
  name: 'Test'
};

</script>

<style>
.interest {
  color: red;
}
.test-space {
  background: orange; 
  padding: 20px;
  margin: 20px;
  border-radius: 20px;
}
</style>
