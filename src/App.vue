<script setup>
import MainMenu from '@/components/MainMenu.vue'
</script>

<template>
  <div class="wrapper">
    <h1 class="logo">🏝️ Island Guide 🏝️</h1>
    <main>
      <div class="card">
        <MainMenu />
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style lang="css" scoped>
.logo {
  font-size: 60px;
  padding-top: 10px;
  text-align: center;
}

.wrapper {
  min-height: 110vh;
  background-image: url('https://images5.alphacoders.com/956/956578.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  backdrop-filter: blur(30px);
  padding-bottom: 50px;
  opacity: 0.7;
}
</style>
