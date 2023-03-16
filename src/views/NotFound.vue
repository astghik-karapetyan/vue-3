<template>
  <section>
    <div>
      <h2>Page not found</h2>
      <p>
        This page could not be found - maybe check out all our
        <router-link to="/users">users</router-link>.
      </p>
    </div>
  </section>
</template>

<style>
  section {
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    text-align: center;
  }
  a {
    font-size: 2rem;
  }
</style>