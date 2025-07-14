<template>
    <div class="wrap">
       <img :src="images">
       <h2>{{ name }}</h2>
       <h3>{{ desc }}</h3>
       <h3 id="price">{{ price }}</h3>
    </div>
</template>

<script>
export default {
    data(){
        return{
            name:"Name",
            desc:"Description:",
            price:"$"
        }
    },
    props:{
        images:{
            type: String,
            default: "https://forstkids.ru/local/templates/berlingo/images/no-img-square.jpg"
        },
      
    }
}
</script>

<style scoped>
.wrap{
    width: 320px;
    height: 310px;
    background-color: rgba(255, 255, 255, 0.759);
    border-radius: 13px;
    
}
img{
    width: 160px;
    border-radius: 20px;
    border: 2px solid rgb(240, 240, 240);
    margin-left: 25%;
    margin-top: 4%;

}
h2{
    color: rgb(92, 92, 92);
    margin-left: 42%;
    font-size: 18px;
    margin-top: -3px;
}
h3{
    color: rgb(145, 145, 145);
    font-size: 17px;
    margin-left: 2%;
}
#price{
    margin-left: 40%;
    margin-top: 24px;
    font-size: 16px;
}
</style>