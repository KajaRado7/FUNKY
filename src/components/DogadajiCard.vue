<template>
  <div class="card">
    <button type="button" class="btn_publish" @click="myfunction()">
      <img class="card-img-top" :src="info.img" />
      <!-- info je u west gdje su sve slike navedene -->
    </button>
    <div class="card-body">
      <p class="card-text" value="naslov">{{ info.naslov }}</p>

      <!--<span
        v-if="site == 'home'"
        class="transform"
        :class="favorite ? 'icon-heart-2' : 'icon-heart'"
        @click.stop.prevent="toggleFav"
      ></span> -->

      <div class="actions">
        <span
          :class="!heart ? 'far fa-heart' : 'fas fa-heart red'"
          @click.prevent="clickheart()"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
import InformacijeCard from "@/components/InformacijeCard.vue";
import { db } from "@/firebase";
import DogadajiCard from "../components/DogadajiCard.vue";
import store from "@/store";
// import Vue from 'vue';
// Vue.forceUpdate();

export default {
  props: ["info"],
  name: "DogadajiCard",
  data: function() {
    return {
      heart: null,
    };
  },
   mounted(){
      this.isFav();
      //this.clickheart();
    },
  methods: {
    myfunction() {
      this.$router.push({
        name: "Informacije",
        params: { event_id: this.info.id }
      });
    },
    async clickheart() {
      this.heart = !this.heart;
      if (this.heart) {
        await db
          .collection("users").doc(store.currentUser)
          .collection("favoriti").doc(this.info.id)
          .set({
            id: this.info.id,
            naslov: this.info.naslov,
            img: this.info.img,
            favorited: Date.now(),
          });
      } else {
        this.$emit("delete", this.info.id)    //naziv eventa je delete, mozemo imate vise evenata - yt, kartica ovako salje parentu naziv koju karticu treba izbacit iz fav 
        await db
          .collection("users").doc(store.currentUser)
          .collection("favoriti").doc(this.info.id)
          .delete();
        
      }
    },
    async isFav() {
    // this.eventId = this.id;
    // console.log(this.id);
      console.log("Firebase dohvat...");
    
        var query = await db.collection("users")
                  .doc(store.currentUser)
                  .collection("favoriti").where("naslov", "==", this.info.naslov).get();
                  this.heart = false;
                  query.forEach((doc) => {
                    this.heart = true;
                    
                   })
        
    }

  }
  
}

    
    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.card {
  margin-bottom: 25px;
  border-bottom: 2px solid #f5b85c;
  border-bottom-left-radius: 0%;
  border-bottom-right-radius: 0%;
  border-left: none;
  border-right: none;
  border-top: none;
  background-color: transparent;
}

.card-img-top {
  height: 150px;
  object-fit: cover;
  border-radius: 14%; /* zaobljenost rubova*/
}

.card-body {
  height: 10px;
  text-align: left;
  margin-top: -6%;
  margin-bottom: 5%;
}

.card-text {
  height: 50px;
  margin: 70;
  margin-left: -10px;
  color: #d0d0d0;
}

.actions {
  position: absolute;
  top: 185px;
  right: -10px;
  padding-right: 20px;
  float: right;
  color: #c92525;
  font-size: 20px;
}

.actions red {
  color: #c92525;
}

.actions i {
  font-size: 3rem;
  cursor: pointer;
}
.btn_publish {
  background-color: black;
  border: none;
  border-radius: 14px;
  display: block;
  margin: auto;
  margin-bottom: 25px;
  margin-top: 17px;
  border-bottom-left-radius: 0%;
  border-bottom-right-radius: 0%;
  border-left: none;
  border-right: none;
  border-top: none;
  background-color: transparent;
}
</style>
