const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getUsersService = async () => {
  const response = await fetch(
    `${BASE_URL}/users`
  );
  return  await response.json();
};

export const getPostsByUserIdService = async ({userId}) => {
  const response = await fetch(
    `${BASE_URL}/posts?userId=${userId}`
  );
  return  await response.json();
};

export const getCommentsByPostIdService = async ({postId}) => {
  const response = await fetch(
    `${BASE_URL}/posts/${postId}/comments`
  );
  return  await response.json();
};

export const addNewPostForCurrentUserService = async ({title, body, userId}) => {
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
  return  await response.json();
};

export const deletePostByIdService = async ({postId}) => {
  const response = await fetch(
    `${BASE_URL}/posts/${postId}`, {
      method: 'DELETE',
    }
  );
  return  await response.json();
};