<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

let bugs = ref({})
let bugKeys = ref([])

async function getData() {
    await axios
        .get('https://acnhapi.com/v1/bugs')
        .then((response) => {
            bugs.value = response.data
            bugKeys.value = Object.keys(bugs.value)
            return bugs
        })
        .catch((error) => console.log(error))
}
onMounted(() => {
    getData()
})
</script>
<template>
    <div class="cards">
        <div v-for="(bug, index) in bugKeys" :key="index" class="card" @click="$router.push(`/bugs/${bugs[bug].id}`)">
            <img :src="bugs[bug].image_uri" alt="" class="image" />
            <h3 class="name">{{ bug }}</h3>
        </div>
    </div>
</template>

<style scoped lang= "postcss">
.cards {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    caret-color: transparent;
}

.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 10px;
    border: 2px solid #000;
    margin: 20px;
    transition: all 0.25s;
    cursor: pointer;
    background-color: rgba(240, 248, 255, 0.7);
}

.hover {
    transform: scale(1.05);
    background-color: rgb(240, 248, 255);
}

.image {
    height: 80px;
    margin-bottom: 10px;
}

.name {
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
}
</style>
