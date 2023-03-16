<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps(['title', 'show']);
const emit = defineEmits(['close']);

const tryClose = () => {
   emit('close');
}
</script>

<template>
  <teleport to="body">
    <div v-if="props.show" @click="tryClose" class="backdrop"></div>
    <transition name="dialog">
      <dialog open v-if="props.show">
        <header>
          <slot name="header">
            <h2>{{ title }}</h2>
          </slot>
        </header>
        <section>
          <slot></slot>
        </section>
        <menu>
          <slot name="actions">
            <button @click="tryClose">Close</button>
          </slot>
        </menu>
      </dialog>
    </transition>
  </teleport>
</template>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: white;
}

header {
  background-color: #3a0061;
  color: white;
  width: 100%;
  padding: 1rem;
}

header h2 {
  margin: 0;
  font-size: 1.5rem;
}

section {
  padding: 1rem;
  font-size: 1.5rem;
  height: auto;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
  font-size: 1.5rem;
}

button {
  align-self: center;
  border: none;
  outline: 0;
  padding: 0.8rem;
  color: white;
  background-color: #3d008d;
  text-align: center;
  cursor: pointer;
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
</style>