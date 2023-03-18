<template>
    <div class="post-card">
        <div>
            <p class="title"><strong>Post title</strong> {{post.title}}</p>
            <p><strong>Post body</strong> {{post.body}}</p>
            <router-link :to="commentsPath">View comments</router-link>
        </div>
        <button @click="deletePost">Delete</button>
    </div>
</template>

<script setup>
    import {defineProps, toRefs, computed} from 'vue';
    import {useGlobalStore} from "../stores";
    import {useRoute, useRouter} from "vue-router";

    const route = useRoute();
    const router = useRouter();
    const store = useGlobalStore();
    const props = defineProps(['post']);
    const { post } = toRefs(props);

    const userId = route.params.userId;

    const deletePost = () => {
        store.deletePostById({postId: post.value.id});

        router.replace({
            name: "userPost",
            params: {
              userId
            }
        });
    };

    const commentsPath = computed(() => {
      return  {
        name: "comments",
        params: {
          postId: post.value.id,
        }
      }
    })

</script>

<style scoped>
    .post-card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        font-family: "Roboto", sans-serif;;
        padding: 1.5rem;
        width: 100%;
        background: #e0c9ff;
        display: flex;
        justify-content: space-between;
    }

    .title {
        color: grey;
        font-size: 1.8rem;
    }

    p {
        font-size: 1.5rem;
    }
    .post-card a {
        border: none;
        outline: 0;
        display: inline-block;
        padding: 0.8rem;
        color: white;
        background-color: #3d008d;
        text-align: center;
        cursor: pointer;
        width: 20rem;
        font-size: 1.8rem;
    }

    a:hover, button:hover {
        opacity: 0.7;
    }
    button {
        align-self: center;
        border: none;
        outline: 0;
        padding: 0.8rem;
        color: white;
        background-color: #3d008d;
        text-align: center;
        cursor: pointer;
    }

</style>