<template>
    <form @submit.prevent="submitForm">
        <div class="form-control">
            <label for="title">Post Title</label>
            <input  id="title" v-model.trim="title" />
        </div>
        <div class="form-control">
            <label for="body">Post Body</label>
            <textarea rows="5" id="body" v-model.trim="body"></textarea>
        </div>
        <p class="errors" v-if="!formIsValid">Fields cant be empty, please fill</p>
        <div class="actions">
            <button>Add new Post</button>
        </div>
    </form>
</template>

<script setup>
  import { ref } from 'vue';
  import { useRouter, useRoute } from 'vue-router'
  import {useGlobalStore} from "../../stores";

  const store = useGlobalStore();

  const router = useRouter();
  const route = useRoute();

  const userId = route.params.userId;

  const title = ref('');
  const body = ref('');
  const formIsValid = ref(true);

  const submitForm = () => {
    formIsValid.value = true;
    if (
      title.value === '' ||
      body.value === ''
    ) {
      formIsValid.value = false;
      return;
    }
    store.addNewPostForCurrentUser({
      title,
      body,
      userId
    });

    router.replace({
      name: "userPost",
      params: {
        userId
      }
    });
  }

</script>

<style scoped>
    button {
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
        font-size: 1.5rem;
    }
    form {
        margin: 1rem;
        border: 1px solid #ccc;
        border-radius: 12px;
        padding: 1rem;
    }

    .form-control {
        margin: 0.5rem 0;
    }

    label {
        font-weight: bold;
        margin-bottom: 0.5rem;
        display: block;
        font-size: 1.5rem;
    }

    input,
    textarea {
        display: block;
        width: 100%;
        font: inherit;
        border: 1px solid #ccc;
        padding: 0.15rem;
        font-size: 1.5rem;
    }

    input:focus,
    textarea:focus {
        border-color: #3d008d;
        background-color: #faf6ff;
        outline: none;
    }

    .errors {
        font-weight: bold;
        color: red;
    }

    .actions {
        text-align: center;
    }
</style>