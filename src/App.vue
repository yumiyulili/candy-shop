<template>
<div>
    <btn id="btn1" title="Корзина" icon="https://img.icons8.com/fluency-systems-regular/48/737373/shopping-basket.png"></btn>
</div>
<div id="items">
    <div class="contain1">
        <block id="block1"></block>
        <btn @click="clickBtn" id="btn2" title="Добавить" icon="https://img.icons8.com/fluency-systems-regular/48/737373/thick-arrow-pointing-down.png"> </btn>
    </div>
    <div class="contain2">
        <block id="block2"></block>
        <btn @click="clickBtn" id="btn3" title="Добавить" icon="https://img.icons8.com/fluency-systems-regular/48/737373/thick-arrow-pointing-down.png"></btn>
    </div>
    <div class="contain3">
        <block id="block3"></block>
        <btn @click="clickBtn" id="btn4" title="Добавить" icon="https://img.icons8.com/fluency-systems-regular/48/737373/thick-arrow-pointing-down.png"></btn>
    </div>
    <div class="contain4">
        <block id="block4"></block>
        <btn @click="clickBtn" id="btn5" title="Добавить" icon="https://img.icons8.com/fluency-systems-regular/48/737373/thick-arrow-pointing-down.png"></btn>
    </div>
</div>
</template>

<script>
import Btn from './components/Btn.vue'
import Block from './Block.vue'
export default {
    data() {
        return {
            newBack: false
        }
    },

    components: {
        "btn": Btn,
        "block": Block
    },
    methods: {
        clickBtn() {
            this.newBack = !this.newBack
            console.log("adada")

        }

    }

}
</script>

<style scoped>
#items {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 80px;

}

#btn1 {
    margin-top: -60px;
    margin-left: 1100px;
    position: absolute;
}

#btn2,
#btn3,
#btn4,
#btn5 {
    margin-left: 100px;
    margin-top: -43px;
    color: rgb(255, 173, 138);
    z-index: 1000;
    position: relative;
}

.backColor {
    background-color: rgb(255, 134, 82);
    color: rgb(255, 255, 255);
}
</style>
