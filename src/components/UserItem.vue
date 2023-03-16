<template>
    <div class="user-card">
        <h3>Full Name {{fullName}}</h3>
        <p class="title"><strong>Email</strong> {{email}}</p>
        <p><strong>City</strong> {{city}}</p>
        <p><strong>Phone</strong> {{phone}}</p>
        <p><strong>Company Name</strong> {{companyName}}</p>
        <router-link :to="postsPath">View {{fullName}} posts</router-link>
    </div>
</template>

<script setup>
    import { defineProps, toRefs, computed } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();

    const props = defineProps(['id', 'fullName', 'email', 'city', 'phone', 'companyName']);
    const {id, fullName, email, city, phone,companyName } = toRefs(props);

    const postsPath = computed(() => {
      return {
            name: "userPost",
            params: {
              userId: id.value
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