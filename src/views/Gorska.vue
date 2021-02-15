<template>
  <div class="container" style="max-width: 500px;">
    <div id="cards">
      <dogadaji-card v-for="card in cards" :key="card.naslov" :info="card" />
      <!-- :key mora svugdje biti drugaciji tj imati nesta jedinstveno iz polja poput naslova-->
      <!-- kada stavimo : onda ovaj = prima js  ako stavim samo info prenjet ce se string -->
      <footer id="footer"></footer>
    </div>
  </div>
</template>

<script>
import DogadajiCard from '@/components/DogadajiCard.vue';
import { db } from '@/firebase';

export default {
  name: 'Gorska',
  data: function() {
    return {
      cards: [],
    };
  },
  components: {
    DogadajiCard,
  },
  mounted(){    
    this.getPosts();
  },
  methods: {
   getPosts(){
        console.log("firebase dohvat..");

        db.collection('posts')
          .get()
          .then((query) => {
            query.forEach(doc => {
              const data = doc.data();

              if(data.region == 'Mountain Croatia'){
              this.cards.push({
                id: doc.id,
                img: data.url,
                naslov: data.name,
                heart: false,                
              })
              /*if(data.region == !gorska){
                console.log("Sorry,there are no events available yet ... ")
              } */
              }else if(data.region == !'Mountain Croatia'){
               ("Sorry,there are no events available yet ... ");
              }


            });
        });
    }
  }
};
</script>

<style scoped>
h2 {
  color: #f5b85c;
}
#footer {
  width: 100%;
  height: 80px;
}
</style>
