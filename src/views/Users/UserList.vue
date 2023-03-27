<template>
  <base-dialog :show="!!error" title="An error occurred!" @close="store.handleError">
    <p>{{ error }}</p>
  </base-dialog>

  <div class="loading" v-if="loading">
    <base-spinner></base-spinner>
  </div>
  <div v-else-if="hasUsers">
    <h2 style="text-align: center">Users List</h2>
    <div class="user-list">
      <user-item v-for="user in users" :key="user.id" :user="user"></user-item>
    </div>
  </div>
  <base-message v-else>
    <h3>No users found!</h3>
  </base-message>
</template>

<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '../../stores'
import UserItem from '../../components/UserItem.vue'

const store = useGlobalStore()

const { users, loading, error, hasUsers } = storeToRefs(store)

onMounted(async () => {
  await store.getUsers()
})
</script>

<style>
.user-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}
h2 {
  font-size: 2.5rem;
}
</style>
