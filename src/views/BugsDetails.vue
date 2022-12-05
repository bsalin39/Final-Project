<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()

let bug = ref({})
let bugKeys = ref([])

async function getData(id) {
    await axios
        .get(`https://acnhapi.com/v1/bugs/${id}`)
        .then((response) => {
            bug.value = response.data
            bugKeys.value = Object.keys(bug.value)
            return bug.value
        })
        .catch((error) => console.log(error))
}

onMounted(async () => {
    let bugId = route.params.id
    getData(bugId)
})
</script>
<template>
    <div class="details">
        <img :src="bug.image_uri" alt="" width="200" />
        <p><strong>Id :</strong> {{ bug.id }}</p>
        <p><strong>Name :</strong> {{ bug[bugKeys[1]] }}</p>
        <p><strong>Buy Price :</strong> {{ bug[bugKeys[4]] }}$</p>
        <p><strong>Sell Price :</strong> {{ bug[bugKeys[5]] }}$</p>
        <p class="mb30"><strong>Museum Phrase</strong> : {{ bug[bugKeys[7]] }}</p>
        <router-link to="/bugs" class="back">Back</router-link>
    </div>
</template>
.details {
    width: 400px;
    padding: 15px;
    border: 2px solid rgb(0, 0, 0);
    background-color: rgba(255, 255, 255, 0.85);
    border-radius: 15px;
    margin-left: 50%;
    transform: translateX(-50%);
    caret-color: transparent;}

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
        .hover {
            background-color: rgba(255, 71, 5, 0.726);
            color: #fff;
        }

</style>
