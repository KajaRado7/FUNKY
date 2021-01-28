<template>
  <div class="container" style="max-width: 500px; text-align: left;">
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
    naslov: 'Središnja Hrvatska',
    route: '/Sredisnja',
  },
  {
    img: require('@/assets/dubrovnik.jpg'),
    naslov: 'Južna Hrvatska',
    route: '/Juzna',
  },
  {
    img: require('@/assets/amfiteatar.jpg'),
    naslov: 'Zapadna Hrvatska',
    route: '/Zapadna',
  },
  {
    img: require('@/assets/suncokreti.jpg'),
    naslov: 'Istočna Hrvatska',
    route: '/Istocna',
  },
  {
    img: require('@/assets/plitvicka-jezera.jpg'),
    naslov: 'Gorska Hrvatska',
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
  max-width: 500px;
  align-content: center;
}
</style>
