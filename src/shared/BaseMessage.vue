<template>
  <div class="message-wrapper">
    <slot />
  </div>
</template>

<script setup>
import { defineProps, toRefs } from 'vue'

const props = defineProps(['text'])
const { text } = toRefs(props)
</script>

<style scoped>
.message-wrapper {
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
}
</style>
