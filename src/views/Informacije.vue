<template>
  <div class="container" style="max-width: 500px;">
    <div id="cards">
      <regije-card v-for="card in cards" :key="card.naslov" :info="card" />
    </div>
    <footer id="footer"></footer>
  </div>
</template>

<script>
import InformacijeCard from '@/components/InformacijeCard.vue';


export default {
    name: 'informacijeCard',
    data: function(){
        return {
            cards: [],
            store,

        };
    },
     mounted: function() {
        console.log("mounted")
    }, 

}
</script>