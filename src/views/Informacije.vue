<template>
  <div class="container" style="max-width: 500px;">
    <div id="cards">
      <informacije-card v-for="card in cards" :key="card.naslov" :info="card" />
    </div>
    <footer id="footer"></footer>
  </div>
</template>

<script>
import InformacijeCard from '@/components/InformacijeCard.vue';
import { db } from '@/firebase';


export default {
    name: 'Informacije',
    data: function(){
        return {
            cards: [],
            };
    },
    components: {
      InformacijeCard,
    },
    mounted(){    
    this.getInfo();
    },
    methods: {
      getInfo() {
        console.log('firebase dohvat...');

        db.collection('posts')
        .get()
        .then((query) => {
          query.forEach((doc) => {
              const data = doc.data();

              this.cards.push({
                id: doc.id,
                adress: data.adress,
                capacity: data.capacity,
                city: data.city,
                date: data.date,
                eventEntry: data.entry,
                categories: data.model,
                eventName: data.name,
                note: data.note,
                region: data.region,
                time: data.time,
                image: data.url,                
              })
          });
          });
    },


}
}
</script>