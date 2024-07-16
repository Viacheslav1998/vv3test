<template>
	<div>
		<Cards
		  :sizeFont="currentFontSize"
		/>
		<spaceSlider />
	</div>
</template>

<script setup>
  import Cards from '../content/Cards.vue';
	import spaceSlider from '../sliders/spaceSlider.vue';
	import { computed } from 'vue';
  import { useCustomStore } from '../../hooks/useCustomStore';

	// use and apply the current style
	const store = useCustomStore();
	const currentFontSize = computed(() => store.getters.getCurrentFontSize);
</script>

<style>
</style>