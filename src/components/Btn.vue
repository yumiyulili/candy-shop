<template>
<button>
    <img :src="icon" alt="icon">
    {{ title }}
</button>
</template>

<script>
export default {
    props: {
        title: String,
        icon: String,
    }
}
</script>

<style scoped>
button {
    width: 125px;
    height: 28px;
    border-radius: 20px;
    border: none;
    font-size: 14px;
    color: rgb(126, 126, 126);
    background-color: rgb(255, 255, 255);
    align-items: center;
    z-index: 1;
    cursor: pointer;
    transition: 0.2s ease;
    display: flex;
    padding: 3px;
    padding-left: 13px;

}

button:hover {
    box-shadow: 1px 1px 18px rgb(255, 135, 91);
}

img {
    width: 22px;
    display: flex;
    align-items: center;
    padding: 5px;

}
</style>
