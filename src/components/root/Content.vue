<template>
	<div>
		<Cards
		  :sizeFont="currentFontSize"
		/>
		<spaceSlider
		  :sizeFont="currentFontSize" 
		/>
		<About />
	</div>
</template>

<script setup>
  import Cards from '../content/Cards.vue';
	import spaceSlider from '../sliders/spaceSlider.vue';
	import About from '../content/About.vue';
	import { computed } from 'vue';
  import { useCustomStore } from '../../hooks/useCustomStore';

	// use and apply the current style
	const store = useCustomStore();
	const currentFontSize = computed(() => store.getters.getCurrentFontSize);
</script>

<style>
</style>