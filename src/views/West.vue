<template>
  <div class="row">
    <div class="col-1"></div>
    <div class="col-10">
      <dogadaji-card v-for="card in cards" :key="card" :info="card" />
      <!-- kada stavimo : onda ovaj = prima js  ako stavim samo info prenjet ce se string -->
    </div>
    <div class="col-1"></div>
    <footer id="footer"></footer>
  </div>
</template>

<script>
/*export default {    za carddd
  el: '#heart',
  data: {
    heart: false,
  }
  }   */

import DogadajiCard from '@/components/DogadajiCard.vue';

let cards = [];

cards = [
  'https://cdn.discordapp.com/attachments/776752694466707466/780142704683384832/dostojevskiiii.jpg',
  'https://cdn.discordapp.com/attachments/776752694466707466/780141433914130443/81839990_3369511939786727_8260664549204557824_o.jpg' /*@/assets/zaigrana-koza.jpg" ne radi why doe*/,
  'https://cdn.discordapp.com/attachments/776752694466707466/780144785737908224/rasskol.jpg',
];

export default {
  name: 'west',
  data: function() {
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
#footer {
  width: 100%;
  height: 100px;
}
</style>
