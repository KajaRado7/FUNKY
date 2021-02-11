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
import DogadajiCard from '@/components/DogadajiCard.vue';
import { db } from '@/firebase';

/*let cards = [];

cards = [
  {
    img: require('@/assets/dostojevski.jpg'),
    naslov: 'Dostojevski night',
    heart: false,
  },
  {
    img: require('@/assets/zaigrana-koza.jpg'),
    naslov: 'Večer društvenih igara',
    heart: false,
  },
  {
    img: require('@/assets/rasskol.jpg'),
    naslov: 'Svirka lokalnog benda Rasskol',
    heart: false,
  },
];*/

export default {
  name: 'Zapadna',
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
        console.log("firebase doghvat..");

        db.collection('posts')
          .get()
          .then((query) => {
            query.forEach(doc => {
              const data = doc.data();

              if(data.region == 'zapadna'){
              this.cards.push({
                id: doc.id,
                img: data.url,
                naslov: data.name,
                heart: false,
              })
              if(data.sredisnja == null){
                console.log("Sorry,there are no events available yet ... ")
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
  max-width: 100%;
  align-content: center;
}
</style>
