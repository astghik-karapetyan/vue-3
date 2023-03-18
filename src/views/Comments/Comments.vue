<template>
    <base-dialog :show="!!error" title="An error occurred!" @close="store.handleError">
        <p>{{ error }}</p>
    </base-dialog>

    <div v-if="commentsLoading">
        <base-spinner></base-spinner>
    </div>
    <div v-else-if="hasComments">
        <h2 style="text-align:center">All comments of post id {{postId}}</h2>
        <div class="comment-list">
            <comment-item
                v-for="comment in comments"
                :key="comment.id"
                :comment="comment"
            ></comment-item>
        </div>

    </div>
    <base-message v-else>
        <h3>No comments!</h3>
    </base-message>
</template>

<script setup>
    import { onMounted, computed, watch } from 'vue'
    import { useRoute } from 'vue-router'
    import { storeToRefs } from 'pinia';

    import CommentItem from '../../components/CommentItem.vue';
    import { useGlobalStore } from "../../stores";

    const store = useGlobalStore();
    const route = useRoute();

    const {
        comments,
        posts,
        commentsLoading,
        error,
        hasComments,
    } = storeToRefs(store);

    const postId = computed(() => {
      return route.params.postId
    });

    onMounted(async () => {
        await store.getCommentsByPostId({postId: postId.value});
    });

    watch(() => route.params, async (params) => {
        const { postId } = params;
        await store.getCommentsByPostId({postId});
    });

</script>

<style scoped>
    .comment-list {
        display: grid;
        gap: 1rem;
        max-height: 30rem;
        overflow-x: auto;
    }
    h2 {
        font-size: 2.5rem;
    }
</style>