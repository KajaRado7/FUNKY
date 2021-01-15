<template>
  <div class="row">
    <div class="col-1"></div>
    <div class="col-10">
      <regije-card v-for="card in cards" :key="card" :info="card" />
      <!-- kada stavimo : onda ovaj = prima js  ako stavim samo info prenjet ce se string -->
    </div>
    <div class="col-1"></div>
    <footer id="footer"></footer>
  </div>
</template>

<script>

import RegijeCard from '@/components/RegijeCard.vue';

let cards = [];

cards = [
  {img: require("@/assets/zagreb.png"), naslov: "Sjeverna Hrvatska"},
  {img: require("@/assets/dubrovnik.jpg"), naslov: 'Južna Hrvatska'},
  {img: require("@/assets/amfiteatar.jpg"), naslov: 'Zapadna Hrvatska'},
  {img: require("@/assets/suncokreti.jpg"), naslov: 'Istočna Hrvatska'}
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
  height: 100px;
}
</style>