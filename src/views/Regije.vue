<template>
  <div class="container" >
    <form id="search" class="navbar-form form-inline ml-auto">
            <input
              v-model="store.searchText"
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search City"
              aria-label="Search"
            />
          </form>
    <div id="cards">
      <regije-card v-for="card in filteredCards" :key="card.naslov" :info="card" />
    </div>
    <footer id="footer"></footer>
  </div>
</template>

<script>
import RegijeCard from '@/components/RegijeCard.vue';
import store from "@/store";

let cards = [];

cards = [
  {
    img: require('@/assets/zagreb.png'),
    naslov: 'Central Croatia',
    route: '/Sredisnja',
  },
  {
    img: require('@/assets/dubrovnik.jpg'),
    naslov: 'Dalmatia',
    route: '/Juzna',
  },
  {
    img: require('@/assets/amfiteatar.jpg'),
    naslov: 'Istria',
    route: '/Zapadna',
  },
  {
    img: require('@/assets/suncokreti.jpg'),
    naslov: 'Slavonia',
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
      cards, //prvi cards je kljuc, a drugi varijabla od gore tj ova lista
      store,
    };
  },
  computed: {
    filteredCards(){
      // logika koja filtrira kartice
      let termin = this.store.searchText.toLowerCase();
      let newCards = [];
      
      for (let card of this.cards) {
        if (card.naslov.toLowerCase().indexOf(termin) >= 0) {
          newCards.push(card);
        }
      }
      return newCards;
    },
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
  border-radius: 15px;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  align-items: center;
}
.form-control {
  margin-bottom: 60px;
  margin-top: 10px;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 2px solid #f5b85c;
  background-color: #1a1a1a;
  color: #d0d0d0;
  outline: none;
  box-shadow: none;
}

</style>
