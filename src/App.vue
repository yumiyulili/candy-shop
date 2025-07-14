<template>
<div>
    <btn id="btn1" title="Cart" icon="https://img.icons8.com/fluency-systems-regular/48/737373/shopping-basket.png"></btn>
</div>
<div id="container">
    <div id="items">
        <div class="contain1">
            <block id="block1"></block>
            <btn @click="clickBtn" id="btn2" title="Add to Cart" icon="https://img.icons8.com/fluency-systems-regular/48/737373/thick-arrow-pointing-down.png"> </btn>
        </div>
        <div class="contain2">
            <block id="block2"></block>
            <btn @click="clickBtn" id="btn3" title="Add to Cart" icon="https://img.icons8.com/fluency-systems-regular/48/737373/thick-arrow-pointing-down.png"></btn>
        </div>
        <div class="contain3">
            <block id="block3"></block>
            <btn @click="clickBtn" id="btn4" title="Add to Cart" icon="https://img.icons8.com/fluency-systems-regular/48/737373/thick-arrow-pointing-down.png"></btn>
        </div>
        <div class="contain4">
            <block id="block4"></block>
            <btn @click="clickBtn" id="btn5" title="Add to Cart" icon="https://img.icons8.com/fluency-systems-regular/48/737373/thick-arrow-pointing-down.png"></btn>
        </div>

        <div id="items2">
            <div class="contain5">
                <block id="block5"></block>
                <btn @click="clickBtn" id="btn6" title="Add to Cart" icon="https://img.icons8.com/fluency-systems-regular/48/737373/thick-arrow-pointing-down.png"> </btn>
            </div>
            <div class="contain6">
                <block id="block6"></block>
                <btn @click="clickBtn" id="btn7" title="Add to Cart" icon="https://img.icons8.com/fluency-systems-regular/48/737373/thick-arrow-pointing-down.png"> </btn>
            </div>
            <div class="contain7">
                <block id="block7"></block>
                <btn @click="clickBtn" id="btn8" title="Add to Cart" icon="https://img.icons8.com/fluency-systems-regular/48/737373/thick-arrow-pointing-down.png"> </btn>
            </div>
            <div class="contain8">
                <block id="block8"></block>
                <btn @click="clickBtn" id="btn9" title="Add to Cart" icon="https://img.icons8.com/fluency-systems-regular/48/737373/thick-arrow-pointing-down.png"> </btn>
            </div>
            </div>

            <div id="items3">
                <div class="contain9">
                    <block id="block9"></block>
                    <btn @click="clickBtn" id="btn10" title="Add to Cart" icon="https://img.icons8.com/fluency-systems-regular/48/737373/thick-arrow-pointing-down.png"> </btn>
                </div>
                <div class="contain10">
                    <block id="block10"></block>
                    <btn @click="clickBtn" id="btn11" title="Add to Cart" icon="https://img.icons8.com/fluency-systems-regular/48/737373/thick-arrow-pointing-down.png"> </btn>
                </div>
                <div class="contain11">
                    <block id="block11"></block>
                    <btn @click="clickBtn" id="btn12" title="Add to Cart" icon="https://img.icons8.com/fluency-systems-regular/48/737373/thick-arrow-pointing-down.png"> </btn>
                </div>
                <div class="contain12">
                    <block id="block12"></block>
                    <btn @click="clickBtn" id="btn13" title="Add to Cart" icon="https://img.icons8.com/fluency-systems-regular/48/737373/thick-arrow-pointing-down.png"> </btn>
                </div>
                </div>

            </div>
        </div>
        <svg width="100%" height="70%" id="svg" viewBox="0 0 1440 490" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
            <path d="M 0,500 L 0,187 C 110.42857142857142,225.82142857142856 220.85714285714283,264.6428571428571 349,247 C 477.14285714285717,229.35714285714286 622.9999999999999,155.25 734,128 C 845.0000000000001,100.75000000000001 921.1428571428573,120.35714285714286 1033,138 C 1144.8571428571427,155.64285714285714 1292.4285714285713,171.32142857142856 1440,187 L 1440,500 L 0,500 Z" stroke="none" stroke-width="0" fill="#ffa99d" fill-opacity="0.7" class="transition-all duration-300 ease-in-out delay-150 path-0"></path>
        </svg>
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
#svg {
    position: fixed;
    top: 60%;
    right: 0px;
    left: 0px;
    bottom: 0px;

}

#container {
    position: relative;
    z-index: 100;

}

#items {
    top: 60px;
    position: absolute;
    left: 3.5%;
    display: flex;
    gap: 2.5%;
}

#items2 {
    top: 360px;
    position: absolute;
    display: flex;
    gap: 2.5%;
}
#items3 {
    top: 720px;
    position: absolute;
    display: flex;
    gap: 2.5%;
}

#btn1 {
    top: 25px;
    left: 80%;
    padding-left: 1.8%;
    position: relative;
}

#btn2,
#btn3,
#btn4,
#btn5,
#btn6,
#btn7,
#btn8,
#btn9,
#btn10,
#btn11,
#btn12,
#btn13 {
    left: 30%;
    top: -37px;
    color: rgb(255, 173, 138);
    z-index: 1000;
    position: relative;
}

.backColor {
    background-color: rgb(255, 134, 82);
    color: rgb(255, 255, 255);
}
</style>
