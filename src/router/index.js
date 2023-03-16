import { createRouter, createWebHistory } from 'vue-router'
import UserList from '../views/Users/UserList.vue';
import PostsList from '../views/Posts/PostsList.vue';
import Comments from '../views/Comments/Comments.vue';
import AddNewPost from '../views/Posts/AddNewPost.vue';
import NotFound from '../views/NotFound.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/users' },
    { path: '/users', name: 'users' , component: UserList },
    {
      path: '/users/:userId/posts',
      name: 'userPost' ,
      component: PostsList,
      children: [
        { path: ':postId/comments', name: 'comments' , component: Comments, props: true },
      ]
    },
    { path: '/user/:userId/add-new-post', name: 'newPost' , component: AddNewPost },
    { path: '/:notFound(.*)', component: NotFound }
  ],
  scrollBehavior(_, _2, savedPosition) {
    return savedPosition || {
      top: 0,
      left: 0
    }
  }
});

export default router
