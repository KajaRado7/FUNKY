<template>
  <div class="container" style="max-width: 500px;">
    <div id="cards">
      <informacije-card :info="card" />
    </div>
    <footer id="footer"></footer>
  </div>
</template>

<script>
import InformacijeCard from "@/components/InformacijeCard.vue";
import { db } from "@/firebase";
import DogadajiCard from "../components/DogadajiCard.vue";

export default {
  name: "Informacije",
  data: function() {
    return {
      eventId: this.$route.params.event_id,
      card: {}
    };
  },
  components: {
    InformacijeCard
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    async getInfo() {
      console.log("Firebase dohvat...");
      var doc = await db
        .collection("posts")
        .doc(this.eventId)
        .get();

      const data = doc.data();

      this.card = {
        id: this.eventId,
        address: data.address,
        capacity: data.capacity,
        city: data.city,
        date: data.date,
        eventEntry: data.entry,
        categories: data.model,
        eventName: data.name,
        note: data.note,
        region: data.region,
        time: data.time,
        image: data.url
      };
    },
    async getGoing(){
      var query = await db.collection("users")
                  .doc(store.currentUser).collection("going").get();
                  console.log(query.docs);
                    query.forEach(element => {
                      element = element.data();
                      this.cards.push({
                        id: element.id,
                        count: element.count
                      });

    })
    }
  }
};
</script>
<style scoped>
#footer {
  width: 100%;
  height: 80px;
}
</style>
