<template>
  <div class="card" >
  <img class="card-img-top" :src="info.img">   <!-- info je u west gdje su sve slike navedene -->
  <div class="card-body">
    <p class="card-text">{{ info.naslov }}</p>
    <div class="actions" id="heart  ">
      <i class="far fa-heart" v-if="!info.heart" @click="info.heart = !info.heart"></i>
      <i class="fas fa-heart red" v-if="info.heart" @click="info.heart = !info.heart"></i>
    </div> 
  </div>
  </div>
</template>

<script>
export default {
  data: function (){
    return {
      heart: false,
    };
  },
  props: ['info'],
  name: 'DogadajiCard',
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.card {
  width: 18rem;
  margin-bottom: 35px;
  margin-top: 17px;
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
  border-radius: 14%;   /* zaobljenost rubova*/
}

.card-body {
  height: 10px;
  text-align: left;
  margin-top: 0%;
  margin-bottom: 5%;
}

.card-text {
  height: 50px;
  margin: 70;
  margin-left: -10px;
  color: #D0D0D0;
} 

.actions {
  position: absolute;
  top: 165px;  
  right: -10px;
  padding-right: 20px;
  float: right;
  color: #C92525;
}

.actions red {
    color: #C92525;
  }

.actions i {
    font-size: 1.4rem;
    cursor: pointer;
  }

</style>



