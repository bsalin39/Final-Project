<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

const { login, logout } = useAuth()

const router = useRouter()
const route = useRoute()

const username = ref('')
const password = ref('')

const logUserIn = async () => {
    if (await login(username.value, password.value)) {
        if (route.query.redirect) {
            router.push(route.query.redirect)
        } else {
            router.push({ name: 'Home' })
        }
    } else {
        logout()
    }
}
/*
function handleSelection(index){
  const buttons = document.querySelectorAll('.menu-button')
  for(let i=0; i<buttons.length; i++){
    buttons[i].classList.remove('selected')
  }
  buttons[index].classList.add('selected')
}
  
    <div class="text-2xl text-center">
        <h1 class="text-2xl text-center mt-6">Kindly login to Island Guide Website Now to learn about amazing world!
        </h1>
        <h3 class="text-2xl text-center mt-6">Enter Any Name and Password!</h3>
        <form class="login-form" @submit.prevent="logUserIn">
            <input v-model="username" type="text" placeholder="Username" />
            <input v-model="password" type="password" placeholder="Password" />
            <button type="submit" class="bg-green-500 px-4 py-2">Log In</button>
        </form>
    </div>

    .menu {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    .button-wrapper {
        width: 100px;
        display: flex;
        align-items: center;
        justify-content: center;

    }

    .menu-button {
        width: 100%;
        text-align: center;
        padding: 10px;
        font-size: 20px;
        margin: 5px;
        border-radius: 10px;
        background-color: rgb(236, 236, 236);
        transition: all .25s;
        cursor: pointer;
        caret-color: transparent;

        &:hover,
        &:active {
            background-color: #fff;
            border: 2px solid orangered;
            transform: scale(1.04);
        }
    }

    .selected {
        background-color: #fff;
        border: 2px solid orangered;

    }

}*/
</script>

<template>
    <form class="login-form" @submit.prevent="logUserIn">
        <input v-model="username" type="text" placeholder="Username" />
        <input v-model="password" type="password" placeholder="Password" />
        <button type="submit">Log In</button>
    </form>
</template>

<style scoped lang="postcss">
.login-form {
    @apply mx-auto mt-80 flex max-w-md flex-col gap-4 rounded-md bg-white p-8 shadow-lg;

    & input {
        @apply rounded-md px-4 py-2 text-xl ring-1 ring-slate-300;
    }
}
</style>

