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



