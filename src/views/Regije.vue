<template>
  <div class="container" style="max-width: 500px;">
    <div id="cards">
      <regije-card v-for="card in cards" :key="card" :info="card" />
    </div>
    <footer id="footer"></footer>
  </div>
</template>

<script>
import RegijeCard from '@/components/RegijeCard.vue';

let cards = [];

cards = [
  { img: require('@/assets/zagreb.png'), naslov: 'Središnja Hrvatska' },
  { img: require('@/assets/dubrovnik.jpg'), naslov: 'Južna Hrvatska' },
  { img: require('@/assets/amfiteatar.jpg'), naslov: 'Zapadna Hrvatska' },
  { img: require('@/assets/suncokreti.jpg'), naslov: 'Istočna Hrvatska' },
  { img: require('@/assets/plitvicka-jezera.jpg'), naslov: 'Gorska Hrvatska' },
];

export default {
  name: 'regije',
  data: function() {
    return {
      cards: cards,
    };
  },
  components: {
    RegijeCard,
  },
};
</script>

<style scoped>
#footer {
  width: 100%;
  height: 60px;
}

.cards {
  max-width: 500px;
  align-content: center;
}
</style>
