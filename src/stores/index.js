import { defineStore } from 'pinia'
import {
  getUsersService,
  getPostsByUserIdService,
  getCommentsByPostIdService,
  addNewPostForCurrentUserService,
  deletePostByIdService
} from "../services";

export const useGlobalStore = defineStore('global', {
  state: () => {
    return {
      users: [],
      posts: [],
      comments: [],
      loading: false,
      commentsLoading: false,
      error: null,
    }
  },
  getters: {
    hasUsers: (state) => state.users.length > 0,
    hasPosts: (state) => state.posts.length > 0,
    hasComments: (state) => state.comments.length > 0,
  },
  actions: {
    handleError() {
      this.error = null;
    },
    async getUsers() {
      try {
        this.loading = true;
        const result = await getUsersService();
        this.users = result;
      }catch (e) {
        this.error = new Error(e.message || 'Failed to fetch!');
      }finally {
        this.loading = false;
      }
    },
    async getPostsByUserId({userId}) {
      try {
        this.loading = true;
        const result = await getPostsByUserIdService({userId});
        this.posts = result;
      }catch (e) {
        this.error = new Error(e.message || 'Failed to fetch!');
      }finally {
        this.loading = false;
      }
    },
    async getCommentsByPostId({postId}) {
      try {
        this.commentsLoading = true;
        const result = await getCommentsByPostIdService({postId});
        this.comments = result;
      }catch (e) {
        this.error = new Error(e.message || 'Failed to fetch!');
      }finally {
        this.commentsLoading = false;
      }
    },
    async addNewPostForCurrentUser({title, body, userId}) {
      try {
        this.loading = true;
        const result = await addNewPostForCurrentUserService({title, body, userId});
        const newData = {
            title,
            body,
            userId,
            id: result.id
        };
        this.posts = [
          newData,
          ...this.posts,
        ];
      }catch (e) {
        this.error = new Error(e.message || 'Failed to fetch!');
      }finally {
        this.loading = false;
      }
    },
    async deletePostById({postId}) {
      try {
        this.loading = true;
        await deletePostByIdService({postId});
        this.loading = false;
        const delIndex = this.posts.findIndex((post) => post.id === postId );
        this.posts.splice(delIndex, 1);
        this.comments = [];
      }catch (e) {
        this.error = new Error(e.message || 'Failed to fetch!');
      }finally {
        this.loading = false;
      }
    },
  },
});
