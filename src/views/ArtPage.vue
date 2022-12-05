<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

let arts = ref({})
let artKeys = ref([])

async function getData() {
    await axios
        .get('https://acnhapi.com/v1/art')
        .then((response) => {
            arts.value = response.data
            artKeys.value = Object.keys(arts.value)
            return arts.value
        })
        .catch((error) => console.log(error))
}
onMounted(() => {
    getData()
})
</script>
<template>
    <div class="cards">
        <div v-for="(art, index) in artKeys" :key="index" class="card" @click="$router.push(`/art/${arts[art].id}`)">
            <img :src="arts[art].image_uri" alt="" class="image">
            <h3 class="name">
                {{ art }}
            </h3>
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
