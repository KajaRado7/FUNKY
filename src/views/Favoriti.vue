<template>
  <div class="container" style="max-width: 500px;">
    <div id="cards">
      <dogadaji-card v-for="card in cards" :key="card.naslov" :info="card" />
    </div>
    <footer id="footer"></footer>
  </div>
</template>
<script>
import DogadajiCard from "@/components/DogadajiCard.vue";
import { db } from "@/firebase";
import store from "@/store";

export default {
  name: "Favoriti",
  props: ["info"],
  data: function() {
    return {
      cards: [],
      site: "favorit"
    };
  },
  components: {
    DogadajiCard
  },

  mounted() {
    this.getFav();
  },
  methods: {
    getFav() {
      db.collection("users")
        .doc(store.currentUser)
        .collection("posts")
        .get()
        .then(query => {
          query.forEach(doc => {
            const data = doc.data();

            if (this.heart) {
              this.cards.push({
                id: doc.id,
                img: data.url,
                naslov: data.name,
                heart: this.heart
              });
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
  height: 60px;
}
#cards {
  max-width: 500px;
  align-content: center;
}
</style>
