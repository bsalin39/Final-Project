<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()

let fish = ref({})
let fishKeys = ref([])
let availabilityTime = ref('')
let availabilityAllDay = ref('')
let availabilityAllYear = ref('')

async function getData(id) {
    await axios
        .get(`https://acnhapi.com/v1/fish/${id}`)
        .then((response) => {
            fish.value = response.data
            fishKeys.value = Object.keys(fish.value)
            availabilityTime.value = fish.value.availability.time
            availabilityAllDay.value = fish.value.availability.isAllDay
            availabilityAllYear.value = fish.value.availability.isAllYear
            return fish
        })
        .catch((error) => console.log(error))
}

onMounted(async () => {
    let fishId = route.params.id
    getData(fishId)
})
</script>

<template>
    <div class="details">
        <img :src="fish.icon_uri" alt="" width="200">
        <p><strong>Id :</strong> {{ fish.id }}</p>
        <p><strong>Name :</strong> {{ fish[fishKeys[1]] }}</p>
        <p><strong>Price :</strong> {{ fish.price }}$</p>
        <p><strong>Avalible time : </strong> {{ availabilityTime ? availabilityTime : 'Time Not Mentioned' }}</p>
        <p><strong>Avalible all Day : </strong> {{ availabilityAllDay }}</p>
        <p><strong>Avalible all Year : </strong> {{ availabilityAllYear }}</p>
        <p class="mb30">
            <strong>Museum Phrase</strong> : {{ fish[fishKeys[8]] }}
        </p>
        <router-link to="/fish" class="back">
            Back
        </router-link>
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
