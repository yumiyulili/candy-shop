
<template>
    <div>
  <btn id="btn1" title="Корзина" icon="https://img.icons8.com/fluency-systems-regular/48/737373/shopping-basket.png"></btn>
  <btn id="btn2" title="Добавить" icon="https://img.icons8.com/fluency-systems-regular/48/737373/thick-arrow-pointing-down.png"></btn>
   </div>
</template>


<script>
import Btn from './components/Btn.vue'
export default{

  components:{
    "btn": Btn
  }
  

}



</script>

<style scoped>
#btn1{
  margin-top: 13px;
  margin-left: 1100px;
}
#btn2{
  margin-top: 500px;
  margin-left: 650px;
}


</style>
