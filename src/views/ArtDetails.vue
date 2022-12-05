<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()

let art = ref({})
let artKeys = ref([])

async function getData(id) {
    await axios
        .get(`https://acnhapi.com/v1/art/${id}`)
        .then((response) => {
            art.value = response.data
            artKeys.value = Object.keys(art.value)
            return art.value
        })
        .catch((error) => console.log(error))
}

onMounted(async () => {
    let artId = route.params.id
    getData(artId)
})
</script>

<template>
    <div class="details">
        <img :src="art.image_uri" alt="" width="200" />
        <p><strong>Id :</strong> {{ art.id }}</p>
        <p><strong>Name :</strong> {{ art[artKeys[1]] }}</p>
        <p><strong>Fake :</strong> {{ art[artKeys[3]] }}</p>
        <p><strong>Buy Price :</strong> {{ art[artKeys[4]] }}$</p>
        <p><strong>Sell Price :</strong> {{ art[artKeys[5]] }}$</p>
        <p class="mb30"><strong>Museum Phrase</strong> : {{ art[artKeys[7]] }}</p>
        <router-link to="/art" class="back">Back</router-link>
    </div>
</template>
<style scoped lang="postcss">
.details {
    width: 400px;
    padding: 15px;
    border: 2px solid rgb(0, 0, 0);
    background-color: rgba(255, 255, 255, 0.85);
    border-radius: 15px;
    margin-left: 50%;
    transform: translateX(-50%);
    caret-color: transparent;
}

img {
    width: 160px;
    margin-left: 50%;
    transform: translateX(-50%);
    border: 1px solid #000;
    border-radius: 20px;
    padding: 10px 20px;
    margin-bottom: 10px;
}

.mb30 {
    margin-bottom: 30px;
}

.back {
    width: 80px;
    border: 1px solid #000;
    border-radius: 10px;
    padding: 5px 10px;
    margin-left: 40%;
    margin-top: 40px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
