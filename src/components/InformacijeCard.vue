<template>
  <div id="cards" style="text-align: left; color: white;">
    <img class="card-img-top" :src="info.image" />
    <br />
    <br />

    <div class="card-body">
      <div class="form-control">
        <div class="nazivi">
          Event name:
        </div>
        <span class="text">{{ info.eventName }}</span>
      </div>
      <br />

      <div class="form-control">
        <div class="nazivi">
          Date:
        </div>
        <span class="text">{{ info.date }}</span>
      </div>
      <br />

      <div class="form-control">
        <div class="nazivi">
          Time:
        </div>
        <span class="text">{{ info.time }}</span>
      </div>
      <br />

      <div class="form-control">
        <div class="nazivi">
          Region:
        </div>
        <span class="text">{{ info.region }}</span>
      </div>
      <br />

      <div class="form-control">
        <div class="nazivi">
          City:
        </div>
        <span class="text">{{ info.city }}</span>
      </div>
      <br />

      <div class="form-control">
        <div class="nazivi">
          Address:
        </div>
        <span class="text">{{ info.address }}</span>
      </div>
      <br />

      <div class="form-control">
        <div class="nazivi">
          Event entry:
        </div>
        <span class="text">{{ info.eventEntry }}</span>
      </div>
      <br />

      <div class="form-control">
        <div class="nazivi">
          Categories:
        </div>
        <span class="text">{{ info.categories }}</span>
      </div>
      <br />

      <div class="form-control">
        <div class="nazivi">
          Capacity:
        </div>
        <span class="text">{{ result }}/{{ info.capacity }}</span>
      </div>
      <br />

      <div class="form-control">
        <div class="nazivi">
          Note:
        </div>
        <span class="text">{{ info.note }}</span>
      </div>
      <br />
      <div class="buttons">
        <button class="clickButton" v-if="going" @click="clickGoing">
          <b>Going / Interested</b>
        </button>
        <button class="clickButton" v-if="nGoing" @click="notGoing">
          <b>Not going</b>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase";
import store from "@/store";

export default {
  props: ["info"],
  name: "InformacijeCard",
  data: function() {
    return {
      store,
      result: null,
      going: true,
      nGoing: false
    };
  },
  mounted() {
    this.emitResult();
    this.clickGoing();
    this.notGoing();
  },
  methods: {
    async emitResult() {
      this.$emit("input", this.result);
    },
    async clickGoing() {
      console.log("Firebase dohvat going");
      if (this.result < this.info.capacity) {
        this.going = false;
        this.nGoing = true;
        this.result++;
        var email = localStorage.getItem("email");

      var query =  await db
          .collection("users")
          .doc(email)
          .collection("going")
          .doc(this.info.id)
          .get();
          console.log(query.docs);
          query.forEach(element => {
              element = element.data();
          this.result.push({
            result: element.result
          });
          }); 
        /* .set({
            id: this.info.id,
            result: this.result
          });*/
        //this.emitResult()
      }
    
      /*else if (this.result = this.info.capacity){
          console.log("Capacity is full")
      }*/
    
  },
    async notGoing() {
      this.going = true;
      this.nGoing = false;
      this.result -= this.result;
      var email = localStorage.getItem("email");

      this.$emit("delete", this.info.id);
      await db
        .collection("users")
        .doc(email)
        .collection("going")
        .doc(this.info.id)
        .delete();

      //this.emitResult()
    }
  }
};
</script>

<style scoped>
.buttons {
  max-width: 500px;
  text-align: center;
}
.clickButton {
  background-color: #f5b85c;
  border: none;
  border-radius: 15px;
  padding: 16px 32px;
  color: black;
}
.form-control,
select {
  width: 100%;
}
#footer {
  width: 100%;
  height: 80px;
}
.card-img-top {
  height: 150px;
  object-fit: cover;
  border-radius: 14%; /* zaobljenost rubova*/
  margin-bottom: -13px;
}
.form-control {
  margin-bottom: 8px;
  margin-top: 5px;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 2px solid #f8f8f8;
  background-color: transparent;
  color: #d0d0d0;
  outline: none;
  box-shadow: none;
}
.form-control:focus,
.form-control:active {
  background: transparent;
  color: white;
  box-shadow: none;
  border-bottom: 2px solid #f5b85c;
}
.nazivi {
  margin-bottom: 5px;
  margin-left: -10px;
}
.text {
  color: #f5b85c;
  margin-bottom: -5px;
  margin-left: -10px;
}
</style>
