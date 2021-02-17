<template>
  <div class="container" style="max-width: 500px;">
    <dogadaji-card :key="card.id" :info="card" v-for="card in events" />
    <footer id="footer"></footer>
  </div>
</template>

<script>
import store from "@/store.js";
import DogadajiCard from "../components/DogadajiCard.vue";

export default {
  components: { DogadajiCard },
  data() {
    return {
      events: []
    };
  },
  mounted() {
    this.events = store.filteredEvents;
  }
};
</script>

<style scoped>
#footer {
  width: 100%;
  height: 80px;
}
/*#cards {
  max-width: 500px;
  align-content: center;
}*/
</style>
