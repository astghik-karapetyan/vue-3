<template>
  <header>
    <nav>
      <h1>
        <router-link to="/">Vue 3 Home</router-link>
      </h1>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  background-color: #3d008d;
  display: flex;
  align-items: center;
  padding: 1rem;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}
</style>
