<script setup>
function handleSelection(index) {
    const buttons = document.querySelectorAll('.menu-button')
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('selected')
    }
    buttons[index].classList.add('selected')
}
</script>

<template>
    <div class="menu">
        <p class="button-wrapper" @click="handleSelection(0)">
            <RouterLink class="menu-button" to="/">Home</RouterLink>
        </p>
        <p class="button-wrapper" @click="handleSelection(1)">
            <RouterLink class="menu-button" to="/fish">Fish</RouterLink>
        </p>
        <p class="button-wrapper" @click="handleSelection(2)">
            <RouterLink class="menu-button" to="/bugs">Critters</RouterLink>
        </p>
        <p class="button-wrapper" @click="handleSelection(3)">
            <RouterLink class="menu-button" to="/art">Art</RouterLink>
        </p>
    </div>
</template>

<style lang="scss" scoped>
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
        transition: all 0.25s;
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
}
</style>
