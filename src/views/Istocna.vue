<template>
  <div class="container" style="max-width: 500px;">
    <div id="cards">
      <dogadaji-card v-for="card in cards" :key="card.naslov" :info="card" />
    </div>
    <!-- kada stavimo : onda ovaj = prima js  ako stavim samo info prenjet ce se string -->
    <footer id="footer"></footer>
  </div>
</template>

<script>
import DogadajiCard from '@/components/DogadajiCard.vue';

let cards = [];

cards = [
  {
    img: require('@/assets/book_club_outdoor.jpg'),
    naslov: 'Bookworm',
    heart: false,
  },
  {
    img: require('@/assets/concert_jazz.jpg'),
    naslov: 'Jazz vibes',
    heart: false,
  },
];

export default {
  name: 'Istocna',
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
  max-width: 500px;
  align-content: center;
}
</style>
