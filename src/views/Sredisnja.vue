<template>
  <div class="container" style="max-width: 500px;">
    <dogadaji-card v-for="card in cards" :key="card.naslov" :info="card" />   <!-- :key mora svugdje biti drugaciji tj imati nesta jedinstveno iz polja poput naslova-->
    <!-- kada stavimo : onda ovaj = prima js  ako stavim samo info prenjet ce se string -->
    <footer id="footer"></footer>
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
  name: 'sredisnja',
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
