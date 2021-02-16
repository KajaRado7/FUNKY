<template>
  <div class="card">
    <button type="button" class="btn_publish" @click="myfuntion()">
      <img class="card-img-top" :src="info.img" />
      <!-- info je u west gdje su sve slike navedene -->
    </button>
    <div class="card-body">
      <p class="card-text" value="naslov">{{ info.naslov }}</p>

      <span
        v-if="site == 'home'"
        class="transform"
        :class="favorite ? 'icon-heart-2' : 'icon-heart'"
        @click.stop.prevent="toggleFav"
      ></span>

      <div class="actions" id="heart">
        <div @click="clickheart()">
          <i
            class="far fa-heart"
            v-if="!info.heart"
            @click="info.heart = !info.heart"
          ></i>
          <i
            class="fas fa-heart red"
            v-if="info.heart"
            @click="info.heart = !info.heart"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InformacijeCard from "@/components/InformacijeCard.vue";
import { db } from "@/firebase";
import DogadajiCard from "../components/DogadajiCard.vue";

export default {
  props: ["info"],
  name: "DogadajiCard",
  data: function() {
    return {
      heart: false
    };
  },
  mounted() {
    this.clickheart();
  },
  methods: {
    myfuntion() {
      this.$router.push({
        name: "Informacije",
        params: { event_id: this.info.id }
      });
    },

    clickheart() {
      if (heart) {
      }
    }
  }
};
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
  background-color: #1a1a1a;
}

.card-img-top {
  height: 150px;
  object-fit: cover;
  border-radius: 14%; /* zaobljenost rubova*/
}

.card-body {
  height: 10px;
  text-align: left;
  margin-top: 0%;
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
  top: 200px;
  right: -10px;
  padding-right: 20px;
  float: right;
  color: #c92525;
}

.actions red {
  color: #c92525;
}

.actions i {
  font-size: 1.4rem;
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
  background-color: #1a1a1a;
}
</style>
