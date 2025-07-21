<template>
  <div class="isLoading"></div>
  <p>Loading wait please...</p>
</template>

<script>
export default {

}
</script>

<style scoped>
.isLoading{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.34);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
p{
    font-size: 30px;
    align-items: center;
    justify-content: center;
    display: flex;
    align-content: center;
    margin-top: 300px;
    color: rgb(84, 84, 84);
    z-index: 99999;
}
</style>