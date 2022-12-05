<script setup>
import MainMenu from '@/components/MainMenu.vue'
//import FishiesPage from '@/components/FishiesPage.vue'
// script stuff @layer h-screen background-color:(from-green-200  via-green-300 to-blue-500); ;
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
  font-size: 28px;
  padding-top: 10px;
  text-align: center;
}

.wrapper {
  min-height: 110vh;
  background-image: url('https://images5.alphacoders.com/956/956578.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  backdrop-filter: blur(15px);
  padding-bottom: 50px;
}
</style>
