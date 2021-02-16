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

export default {
  name: "Juzna",
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

            if (data.region == "Juzna") {
              this.cards.push({
                id: doc.id,
                img: data.url,
                naslov: data.name,
                heart: false
              });
              if ("Gorska" == null) {
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
