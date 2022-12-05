<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

let fishes = ref({})
let fishKeys = ref([])

async function getData() {
    await axios
        .get('https://acnhapi.com/v1/fish')
        .then((response) => {
            fishes.value = response.data
            fishKeys.value = Object.keys(fishes.value)
            return fishes.value
        })
        .catch((error) => console.log(error))
}
onMounted(() => {
    getData()
})
</script>
<template>
    <div class="cards">
        <div v-for="(fish, index) in fishKeys" :key="index" class="card"
            @click="$router.push(`/fish/${fishes[fish].id}`)">
            <img :src="fishes[fish].icon_uri" alt="" class="image" />
            <h3 class="name">{{ fish }}</h3>
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
