<template>
  <div class="container" style="max-width: 500px;">
    <div is="cards">
      <dogadaji-card v-for="card in cards" :key="card.naslov" :info="card" />
      <!-- :key mora svugdje biti drugaciji tj imati nesta jedinstveno iz polja poput naslova-->
      <!-- kada stavimo : onda ovaj = prima js  ako stavim samo info prenjet ce se string -->
      <footer id="footer"></footer>
    </div>
  </div>
</template>

<script>
import DogadajiCard from '@/components/DogadajiCard.vue';

let cards = [];

cards = [
  {
    img: require('@/assets/vidi-pivo.png'),
    naslov: 'Izložba VIDI, PIVO!/LOOK, BEER!',
    heart: false,
  },
  {
    img: require('@/assets/kazaliste.jpg'),
    naslov: 'Natjecanje amaterskih kazališta',
    heart: false,
  },
];

export default {
  name: 'Sredisnja',
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
  height: 80px;
}
#cards {
  max-width: 100%;
  align-content: center;
}
</style>
