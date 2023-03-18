<script setup>
  import Header from './components/Header.vue'
</script>

<template>
  <Header/>
  <router-view></router-view>
</template>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

  * {
    box-sizing: border-box;
  }

  html {
    font-family: "Roboto", sans-serif;
    font-size: 61.5%;
  }

  body {
    margin: 0;
    padding: 0 1.5rem 1.5rem 1.5rem;
  }
  a {
    text-decoration: none;
  }
  .loading {
    height: 85vh;
    display: flex;
  }

</style>



