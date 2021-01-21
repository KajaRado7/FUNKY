<template>
  <div class="container" style="max-width: 500px;">
    <dogadaji-card v-for="card in cards" :key="card.naslov" :info="card" />
    <!-- kada stavimo : onda ovaj = prima js  ako stavim samo info prenjet ce se string -->
    <footer id="footer"></footer>
  </div>
</template>

<script>
import DogadajiCard from '@/components/DogadajiCard.vue';

let cards = [];

cards = [
  {
    img: require('@/assets/dostojevski.jpg'),
    naslov: 'Dostojevski night',
    heart: false,
  },
  {
    img: require('@/assets/zaigrana-koza.jpg'),
    naslov: 'Večer društvenih igara',
    heart: false,
  },
  {
    img: require('@/assets/rasskol.jpg'),
    naslov: 'Svirka lokalnog benda Rasskol',
    heart: false,
  },
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
  height: 80px;
}
</style>
