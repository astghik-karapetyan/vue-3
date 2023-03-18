<template>
    <base-dialog :show="!!error" title="An error occurred!" @close="store.handleError">
        <p>{{ error }}</p>
    </base-dialog>

    <div class="loading" v-if="loading">
        <base-spinner></base-spinner>
    </div>
    <div v-else-if="hasPosts">
        <router-view></router-view>
        <h2 style="text-align:center">Posts of user id {{userId}}</h2>

        <div class="wrapper">
            <router-link :to="newPostPath">Add new post</router-link>
        </div>

        <div class="post-list">
            <post-item
                v-for="post in posts"
                :key="post.id"
                :post="post"
            ></post-item>
        </div>
    </div>
    <base-message v-else>
        <h3>No posts found!</h3>
    </base-message>
</template>

<script setup>
    import { onMounted, computed } from 'vue'
    import { useRoute } from 'vue-router'
    import { storeToRefs } from 'pinia';

    import PostItem from '../../components/PostItem.vue';
    import { useGlobalStore } from "../../stores";

    const store = useGlobalStore();
    const route = useRoute();


    const {
        posts,
        loading,
        error,
        hasPosts,
    } = storeToRefs(store);

    const userId = computed(() => route.params.userId);

    onMounted( async () => {
      await store.getPostsByUserId({userId: userId.value});
    });

    const newPostPath = computed(() => {
      return  {
        name: "newPost",
        params: {
          userId: userId.value
        }
      }
    })


</script>

<style scoped>
    .post-list {
        display: grid;
        gap: 1rem;
    }
    h2 {
        font-size: 2.5rem;
    }
    a {
        text-decoration: none;
        padding: 0.75rem 1.5rem;
        font: inherit;
        background-color: #3a0061;
        border: 1px solid #3a0061;
        color: white;
        cursor: pointer;
        border-radius: 30px;
        margin-right: 0.5rem;
        display: inline-block;
        width: 20rem;
        font-size: 1.5rem;
        text-align: center;
    }
    .wrapper {
        display: flex;
        justify-content: end;
        margin-bottom: 1.5rem;
    }
</style>