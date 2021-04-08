<template>
  <div
    class="container"
    style="max-width: 500px;text-align: left; color: white"
  >
    <form id="search" class="navbar-form form-inline ml-auto">
      <input
        v-model="store.searchText"
        @keyup="this.filteredCards"
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search City"
        aria-label="Search"
      />
    </form>
    <img
      class="loading"
      v-if="loading"
      :src="require('@/assets/loading.gif')"
    />
    <div v-if="!loading">
      <p v-if="this.regije">
        <regije-card v-for="card in cards" :key="card.naslov" :info="card" />
      </p>
      <!--<regije-card v-for="card in cards" :key="card.naslov" :info="card" />-->
      <p v-if="!this.regije">
        <!-- OVO -->
        <dogadaji-card
          v-for="card in cardsEvents"
          :key="card.naslov"
          :info="card"
        />
      </p>
    </div>
    <footer id="footer"></footer>
  </div>
</template>

<script>
import RegijeCard from "@/components/RegijeCard.vue";
import DogadajiCard from "@/components/DogadajiCard.vue";
import store from "@/store";
import { db } from "@/firebase";

let cards = [];

cards = [
  {
    img: require("@/assets/zagreb.png"),
    naslov: "Central Croatia",
    route: "/Sredisnja"
  },
  {
    img: require("@/assets/dubrovnik.jpg"),
    naslov: "Dalmatia",
    route: "/Juzna"
  },
  {
    img: require("@/assets/amfiteatar.jpg"),
    naslov: "Istria",
    route: "/Zapadna"
  },
  {
    img: require("@/assets/suncokreti.jpg"),
    naslov: "Slavonia",
    route: "/Istocna"
  },
  {
    img: require("@/assets/plitvicka-jezera.jpg"),
    naslov: "Mountain Croatia",
    route: "/Gorska"
  }
];

export default {
  name: "Regije",
  data: function() {
    return {
      cards, //prvi cards je kljuc, a drugi varijabla od gore tj ova lista
      store,
      regije: true,
      cardsEvents: [],
      loading: false
    };
  },
  computed: {},
  methods: {
    /* getFiltered() {
      db.collection("posts")
        .get()
        .then(query => {
          query.forEach(doc => {
            const data = doc.data();
            let termin = this.store.searchText.toLowerCase();

            if (data.city.toLowerCase().indexOf(termin) >= 0) {
              this.cards.push({
                id: doc.id,
                img: data.url,
                naslov: data.name,
                heart: false
              });
            }
          });
        });
    }*/

    async getEvents() {
      let ref = await db
        .collection("posts")

        .get();
      this.cardsEvents = [];
      ref.forEach(doc => {
        const data = doc.data();

        if (
          data["city"].toLowerCase().startsWith(store.searchText.toLowerCase())
        )
          this.cardsEvents.push({
            id: doc.id,
            img: data.url,
            naslov: data.name,
            heart: false
          });
      });
      this.loading = false;
    },
    filteredCards() {
      if (!store.searchText.length) {
        this.regije = true;
      } else {
        this.loading = true;
        this.regije = false;
        this.getEvents();
      }
      return this.regije;
    }
  },
  components: {
    RegijeCard,
    DogadajiCard
  }
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
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 2px solid #f5b85c;
  background-color: transparent;
  color: #d0d0d0;
  outline: none;
  box-shadow: none;
}
</style>
