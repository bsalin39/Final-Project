<script setup></script>

<template>
  <div class="container">
    <h3><b>Introduction</b></h3>
    <p>
      ACNH API is a free REST API for critters, fossils, art, music, furniture and villagers from Animal Crossing:
      New Horizons.
    </p>
    <p>For more info <a href="https://acnhapi.com/doc" target="_blank">Click here</a></p>
  </div>
</template>

<style scoped lang="postcss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 450px;
  height: min-content;
  padding: 20px 10px;
  border: 2px solid #000;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.7);
  margin-left: 50%;
  transform: translateX(-50%);
}

a {
  color: blue;
}
</style>
