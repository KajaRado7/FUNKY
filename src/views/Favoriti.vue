<template>
  <div class="container" style="max-width: 500px;">
    <div id="cards">
      <dogadaji-card v-for="card in cards" :key="card.naslov" :info="card" @delete="delEvent"/>
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
      //card: {},
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
      console.log("Firebase dohvat favoriti");
        var email = localStorage.getItem("email");
        
        var query = await db.collection("users")
                  .doc(email).collection("favoriti").get();
                  console.log(query.docs);
                    query.forEach(element => {
                      element = element.data();
                      this.cards.push({
                        id: element.id,
                        img: element.img,
                        naslov: element.naslov,
                        // heart: this.heart
                      });
                    
                  });
                   //try catch catcha error 
              
    },
    delEvent(id) {
      this.cards = this.cards.filter((card) => {
        return card.id !== id;
      });
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
