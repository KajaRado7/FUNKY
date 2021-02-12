<template>
  <div class="container" style="max-width: 500px;">
    <div>
      
    </div>
    <footer id="footer"></footer>
  </div>
</template>

<script>
import store from '@/store';
import DogadajiCard from '@/components/DogadajiCard.vue';
import { firebase } from '@/firebase';
import { db } from '@/firebase';
import router from '@/router';

export default {
  name: 'Favoriti',
  data() {
    return {
      store,
      cards: [],
    };
  },
  components: {
    DogadajiCard,
  },
   methods: {
       
    getPosts() {
      console.log('dohvat..');

      db.collection('posts')
        .get()
        .then((query) => {
          query.forEach((doc) => {
            const data = doc.data();
            if (heart == true) {
              this.cards.push({
                id: doc.id,
                img: data.url,
                naslov: data.name,
                heart: false,

   })
            }
        })
        })
    }
   }
}