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
      eventId: this.$route.params.event_id,
      cards: [],
      card: {},
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
    async getFav() {
    // this.eventId = this.id;
    // console.log(this.id);
      console.log("Firebase dohvat...");
      try {
        var doc = await db.collection("users")
                  .doc(store.currentUser)
                  .collection("favoriti").get().then((query) => {
                    query.forEach(element => {
                      element = element.data();
                      this.cards.push({
                        id: element.id,
                        img: element.img,
                        naslov: element.naslov,
                        // heart: this.heart
                      });
                    });
                  }).catch((e) => console.log(e));
      } catch(ex) {}
    }
  }
}
// };
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
