<script setup>
import { ref } from 'vue';
import TheWelcome from './components/TheWelcome.vue'
import login from './components/Login.vue'
import signup from './components/signup.vue'

const isLoggedIn = ref(false);

const toggleLogin = () => {
  isLoggedIn.value = !isLoggedIn.value;
};
</script>

<template>
  <div id="app">
      <TheWelcome />
    </div>
</template>

<style>
@import 'bootstrap-icons/font/bootstrap-icons.css';

body {
  font-family: 'Arial', sans-serif;
  background-color: #f8f9fa;
}

.navbar-brand {
  font-weight: bold;
}

.btn {
  transition: all 0.3s ease;
}

.btn:hover {
  transform: translateY(-2px);
}
</style>