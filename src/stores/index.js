import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {BASE_URL} from "../constants";

export const useGlobalStore = defineStore('global', () => {
  const users = ref([]);
  const posts = ref([]);
  const comments = ref([]);
  const loading = ref(false);
  const commentsLoading = ref(false);
  const error = ref(null);

  const hasUsers = computed(() => users.value?.length > 0);

  const hasPosts = computed(() => posts.value?.length > 0);

  const hasComments = computed(() => comments.value?.length > 0);

  const handleError = () => {
    error.value = null
  };

  const getUsers = async () => {
    loading.value = true;
    const response = await fetch(
      `${BASE_URL}/users`
    );
    const responseData = await response.json();
    loading.value = false;
    if (!response.ok) {
      error.value = new Error(responseData.message || 'Failed to fetch!');
      return;
    }
    users.value =  responseData;
  };

  const getPostsByUserId = async ({userId}) => {
    loading.value = true;
    const response = await fetch(
      `${BASE_URL}/posts?userId=${userId}`
    );
    const responseData = await response.json();
    loading.value = false;
    if (!response.ok) {
      error.value = new Error(responseData.message || 'Failed to fetch!');
      return;
    }
    posts.value =  responseData;
  };

  const getCommentsByPostId = async ({postId}) => {
    commentsLoading.value = true;
    const response = await fetch(
      `${BASE_URL}/posts/${postId}/comments`
    );
    const responseData = await response.json();
    commentsLoading.value = false;
    if (!response.ok) {
      error.value = new Error(responseData.message || 'Failed to fetch!');
      return;
    }
    comments.value = responseData
  };

  const addNewPostForCurrentUser = async ({title, body, userId}) => {
    const postData = {
      title,
      body,
      userId
    };
    const response = await fetch(`${BASE_URL}/posts`, {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const responseData = await response.json();
    if (!response.ok) {
      error.value = new Error(responseData.message || 'Failed to fetch!');
      return;
    }
    const newData = {
      title,
      body,
      userId,
      id: responseData.id
    };
    posts.value = [newData, ...posts.value];
  };

  const deletePostById = async ({postId}) => {
    loading.value = true;
    const response = await fetch(
      `${BASE_URL}/posts/${postId}`, {
        method: 'DELETE',
      }
    );
    const responseData = await response.json();
    loading.value = false;
    if (!response.ok) {
      error.value = new Error(responseData.message || 'Failed to fetch!');
      return;
    }
    const delIndex = posts.value.findIndex((post) => post.id === postId );
    posts.value.splice(delIndex, 1);
    comments.value = [];
  };

  return {
    users,
    posts,
    comments,
    loading,
    commentsLoading,
    error,
    hasUsers,
    hasPosts,
    hasComments,
    handleError,
    getUsers,
    getPostsByUserId,
    getCommentsByPostId,
    addNewPostForCurrentUser,
    deletePostById,
  }
});
