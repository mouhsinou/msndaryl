<script setup>
import { ref } from 'vue';
</script>

<template>
  <div id="app">
    <router-view /> <!-- Ceci affichera le composant en fonction de la route -->
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
