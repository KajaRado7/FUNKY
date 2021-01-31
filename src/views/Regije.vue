<template>
  <div class="container" style="max-width: 500px;">
    <div id="cards">
      <regije-card v-for="card in cards" :key="card.naslov" :info="card" />
    </div>
    <footer id="footer"></footer>
  </div>
</template>

<script>
import RegijeCard from '@/components/RegijeCard.vue';

let cards = [];

cards = [
  {
    img: require('@/assets/zagreb.png'),
    naslov: 'Central Croatia',
    route: '/Sredisnja',
  },
  {
    img: require('@/assets/dubrovnik.jpg'),
    naslov: 'South Croatia',
    route: '/Juzna',
  },
  {
    img: require('@/assets/amfiteatar.jpg'),
    naslov: 'West Croatia',
    route: '/Zapadna',
  },
  {
    img: require('@/assets/suncokreti.jpg'),
    naslov: 'East Croatia',
    route: '/Istocna',
  },
  {
    img: require('@/assets/plitvicka-jezera.jpg'),
    naslov: 'Mountain Croatia',
    route: '/Gorska',
  },
];

export default {
  name: 'Regije',
  data: function() {
    return {
      cards: cards, //prvi cards je kljuc, a drugi varijabla od gore tj ova lista
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

#cards {
  width: 100%;
  align-content: center;
}
</style>
