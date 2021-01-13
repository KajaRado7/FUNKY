<template>
  <div class="card" >
  <img class="card-img-top" :src="info">   <!-- info je u west gdje su sve slike navedene -->
  <div class="card-body">
    <p class="card-text">Dostojevski night</p>
    <div class="actions" id="heart  ">
      <i class="far fa-heart" v-if="!heart" @click="heart = !heart"></i>
      <i class="fas fa-heart red" v-if="heart" @click="heart = !heart"></i>
    </div> 

  <!--    
    <button class="far fa-heart" v-on:click="heart = !heart"></button>
    <button class="fas fa-heart red" v-on:click="redHeart = !redHeart" ></button>
  -->

  

  </div>
  </div>
</template>

<script>
export default {
  props: ['info'],
  name: 'DogadajiCard',
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.card {
  border-bottom: 2px solid #F5B85C;
  border-bottom-left-radius: 0%;
  border-bottom-right-radius: 0%;
  border-left: none;
  border-right: none;
  border-top: none;
  background-color: #1A1A1A;
  
}

.card-img-top{ 
  height: 150px;
  object-fit: cover;
  border-radius: 10%;   /* zaobljenost rubova*/
}

.card-body {
  height: 5px;
  text-align: left;
  margin-top: 0%;
  margin-bottom: 3%;
}

.card-text {
  margin: 70;
  margin-left: -10px;
  color: #D0D0D0;
} 

.actions {
  position: absolute;
  top: 185px;  
  right: -10px;
  padding: 25px 20px;
  float: right;
}

.actions red {
    color: #C92525;
  }

.actions i {
    font-size: 1.5rem;
    cursor: pointer;
  }

</style>



