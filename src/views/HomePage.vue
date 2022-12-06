<script setup></script>

<template>
  <div class="container">
    <h3><b>Welcome!</b></h3>
    <p>
      ACNH API is a free REST API to view the different critters, such as fish and bugs, and art from Animal
      Crossing: New Horizons!
      Each category is seperated into different pages. In each page, you will find a tile with a picture
      of the item. When you click on the item you will find information regarding that item. Enjoy!
    </p>
    <p>For more information regarding the API <a href="https://acnhapi.com/doc" target="_blank">Click here</a></p>
  </div>
</template>

<style scoped lang="postcss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 450px;
  height: min-content;
  padding: 50px 50px;
  border: 5px rgb(4, 158, 158);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.7);
  margin-left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 20px;
}

a {
  color: blue;
}
</style>
