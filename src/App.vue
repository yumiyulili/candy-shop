
<template>
<div >
  <btn id="btn1" title="Корзина" icon="https://img.icons8.com/fluency-systems-regular/48/737373/shopping-basket.png"></btn>
<div :class="{'backColor': newBack}">
  <btn @click = "clickBtn" id="btn2" title="Добавить" icon="https://img.icons8.com/fluency-systems-regular/48/737373/thick-arrow-pointing-down.png"> </btn>
  <btn @click = "clickBtn" id="btn3" title="Добавить" icon="https://img.icons8.com/fluency-systems-regular/48/737373/thick-arrow-pointing-down.png"></btn>
  <btn @click = "clickBtn" id="btn4" title="Добавить" icon="https://img.icons8.com/fluency-systems-regular/48/737373/thick-arrow-pointing-down.png"></btn>
  <btn @click = "clickBtn" id="btn5" title="Добавить" icon="https://img.icons8.com/fluency-systems-regular/48/737373/thick-arrow-pointing-down.png"></btn>
</div >
</div>
<div>
   <block id="block1"></block>
   <block id="block2"></block>
   <block id="block3"></block>
   <block id="block4"></block>
</div>
</template>


<script>
import Btn from './components/Btn.vue'
import Block from './Block.vue'
export default{
data(){
  return{
    newBack: false
  }
},

  components:{
    "btn": Btn,
    "block": Block
  },
  methods:{
    clickBtn(){
      this.newBack = !this.newBack
      console.log("adada")

    }

  }
  

}

</script>

<style scoped>
#btn1{
  margin-top: 13px;
  margin-left: 1100px;
}
#btn2,#btn3,#btn4,#btn5{
  margin-top: 295px;
  padding-left: 8px;
  position: absolute;
  color: rgb(255, 173, 138);
}
.backColor{
  background-color: rgb(255, 134, 82);
  color: rgb(255, 255, 255);
}
#btn2{
  left: 145px;
}
#btn3{
  left: 505px;
}
#btn4{
  left: 855px;
}
#btn5{
  left: 1210px;
}
#block1{
  left: 50px;
  bottom: 360px;
}
#block2{
  left: 406px;
  bottom: 360px;
}
#block3{
  bottom: 360px;
  left: 760px;
}
#block4{
  bottom: 360px;
  left: 1115px;
}


</style>
