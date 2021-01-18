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

  <!--<template>
  <div class="container" style="max-width: 500px;">
    <div id="cards">
      <regije-card v-for="card in cards" :key="card" :info="card" />
    </div>
    <footer id="footer"></footer>
  </div>
</template> -->
</template>

<script>
import DogadajiCard from '@/components/DogadajiCard.vue';

let cards = [];

cards = [
  { img: require('@/assets/quiz.png'), naslov: 'Quiz night', heart: false },
  {
    img: require('@/assets/games_outdoor.jpg'),
    naslov: 'UNO natjecanje',
    heart: false,
  },
  { img: require('@/assets/other (1).jpg'), naslov: 'Basket', heart: false },
  {
    img: require('@/assets/concert_indoor.jpg'),
    naslov: 'I love techno',
    heart: false,
  },
];

export default {
  name: 'juzna',
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
