<template>
  <div class="comment-card">
    <p class="title"><strong>Email</strong> {{ comment.email }}</p>
    <p><strong>Comment body</strong> {{ comment.body }}</p>
  </div>
</template>

<script setup>
import { defineProps, toRefs } from 'vue'

const props = defineProps(['comment'])
const { comment } = toRefs(props)
</script>

<style scoped>
.comment-card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  font-family: 'Roboto', sans-serif;
  padding: 1.5rem;
  width: 100%;
  background: #ffdfdf;
}

.title {
  color: grey;
  font-size: 1.8rem;
}

p {
  font-size: 1.5rem;
}
</style>
