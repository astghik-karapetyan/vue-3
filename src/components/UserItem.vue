<template>
    <div class="user-card">
        <h3>Full Name {{user.name}}</h3>
        <p class="title"><strong>Email</strong> {{user.email}}</p>
        <p><strong>City</strong> {{user.address.city}}</p>
        <p><strong>Phone</strong> {{user.phone}}</p>
        <p><strong>Company Name</strong> {{user.company.name}}</p>
        <router-link :to="postsPath">View {{user.name}} posts</router-link>
    </div>
</template>

<script setup>
    import { defineProps, toRefs, computed } from 'vue';

    const props = defineProps(['user']);
    const { user } = toRefs(props);

    const postsPath = computed(() => {
      return {
            name: "userPost",
            params: {
              userId: user.value.id
            }
      }
    })
</script>

<style scoped>
    .user-card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        margin: auto;
        text-align: center;
        font-family: "Roboto", sans-serif;;
        padding: 1.5rem;
        min-width: 30rem;
        width: 100%;
    }
    h3 {
        font-size: 2rem;
    }

    .title {
        color: grey;
        font-size: 1.8rem;
    }

    p {
        font-size: 1.5rem;
    }
    a {
        border: none;
        outline: 0;
        display: inline-block;
        padding: 0.8rem;
        color: white;
        background-color: #3d008d;
        text-align: center;
        cursor: pointer;
        width: 100%;
        font-size: 1.8rem;
    }

    a:hover {
        opacity: 0.7;
    }

</style>