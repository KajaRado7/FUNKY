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
import DogadajiCard from "@/components/DogadajiCard.vue";
import { db } from "@/firebase";

/*let cards = [];

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
]; */

export default {
  name: "Istocna",
  data: function() {
    return {
      cards: []
    };
  },
  components: {
    DogadajiCard
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      console.log("Firebase dohvat..");

      db.collection("posts")
        .get()
        .then(query => {
          query.forEach(doc => {
            const data = doc.data();

            if (data.region == "Slavonia") {
              this.cards.push({
                id: doc.id,
                img: data.url,
                naslov: data.name,
                heart: false
              });
              if ("Slavonia" == null) {
                console.log("Sorry,there are no events available yet ... ");
              }
            }
          });
        });
    }
  }
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
