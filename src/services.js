import { fetchRequest } from "./helpers";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getUsersService = async () => await fetchRequest({
  url: `${BASE_URL}/users`
});

export const getPostsByUserIdService = async ({userId}) => await fetchRequest({
  url: `${BASE_URL}/posts?userId=${userId}`
});

export const getCommentsByPostIdService = async ({postId}) => await fetchRequest({
  url: `${BASE_URL}/posts/${postId}/comments`
});

export const addNewPostForCurrentUserService = async ({title, body, userId}) => {
  const postData = {
    title,
    body,
    userId
  };

  return await fetchRequest({
    method: 'POST',
    url: `${BASE_URL}/posts`,
    body: postData,
  });
};

export const deletePostByIdService = async ({postId}) => {
  const response = await fetch(
    `${BASE_URL}/posts/${postId}`, {
      method: 'DELETE',
    }
  );
  return  await response.json();
};