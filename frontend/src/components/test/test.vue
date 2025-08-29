<script>
export default {
  // properties return from data()
  data() {
    return {
      count: 0
    }
  },
  // methods are function
  methods: {
    increment() {
      this.count++
    }
  },
  // lifecycle hooks are called at different stages
  mounted() {
    console.log('plus one '. $this.count)
  }
}
</script>

<template>
  <div>
    <button @click="increment">Count is: {{ count }}</button>
  </div>
</template>