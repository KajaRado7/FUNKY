<template>
  <div :style="myStyle" id="wrapper">
  <div class="row">
    <div class="col-1"></div>
    <div class="col-10">
      <dogadaji-card v-for="card in cards" :key="card" :info="card" />     <!-- kada stavimo : onda ovaj = prima js  ako stavim samo info prenjet ce se string -->
      
    </div>
    <div class="col-1"></div>
  </div>
  </div>
</template>

<script>
/*export default {    za carddd
  el: '#heart',
  data: {
    heart: false,
  }
  }   */

import DogadajiCard from '@/components/DogadajiCard.vue'

let cards = [];

cards = [
  '@/assets/dostojevski.jpg',
  '@/assets/zaigrana-koza.jpg',
  '@/assets/rasskol.jpg',
];

export default {    
  name: 'west',
  data: function(){
    return {
      cards: cards,
    };
  },
  components: {
    DogadajiCard,
  },
};

</script>


<style scoped>

/*.card {
  border-bottom: 2px solid #F5B85C;
  border-bottom-left-radius: 0%;
  border-bottom-right-radius: 0%;
  border-left: none;
  border-right: none;
  border-top: none;
  background-color:#0D0D0D;
}

.card-img-top{ 
  height: 200px;
  object-fit: cover;
  border-radius: 10%;   /* zaobljenost rubova*/


/*.card-body {
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

*/
</style>



