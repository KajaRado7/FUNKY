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
  created() {
    // this.emitResult();
    // this.clickGoing();
    // this.notGoing();
    this.updateG();
    this.sizeG();
  //  this.isGoing();
  },
  methods: {
    async sizeG(){
      var query = await db.collection("users")
                  .doc(store.currentUser)
                  .collection("going").where("result", "==", this.result).get().then((data) => {
                    data = data.size;
                    console.log(data);
                    console.log(this.result);
                  })
                  
    },
    async updateG(){
      await db.collection("users")
              .doc(store.currentUser)
              .collection("going").doc(this.info.id).update({
                result: this.result
              })
              .then(() => {
                console.log("Document successfully updated!");
              });
    },
    async clickGoing() {
      console.log("Firebase dohvat going");
      if (this.result < this.info.capacity) {
        this.going = false;
        this.nGoing = true;
        this.result += 1;
        var email = localStorage.getItem("email");

      var query =  await db
          .collection("users")
          .doc(email)
          .collection("going")
          .doc(this.info.id)
        /*  .get();
          console.log(query.docs);
          query.forEach(element => {
              element = element.data();
          this.result.push({
            result: element.result
          });
          }); */
         .set({
            id: this.info.id,
            /*image: this.info.image,
            eventName: this.info.name,
            date: this.info.date,
            time: this.info.time,
            region: this.info.region,
            city: this.info.city,
            address: this.info.address,
            eventEnty: this.info.entry,
            categories: this.info.categories,
            capacity: this.info.capacity,
            note: this.info.note, */
            result: this.result
          });
          // this.isGoing();
          
      this.updateG();
          this.sizeG();
        //this.emitResult()
      }
    
      /*else if (this.result = this.info.capacity){
          console.log("Capacity is full")
      }*/
    
  },

   async notGoing() {
      this.going = true;
      this.nGoing = false;
      this.sizeG();
      this.result -= 1;
      this.updateG()
      var email = localStorage.getItem("email");

      this.$emit("delete", this.info.id);
      await db
        .collection("users")
        .doc(email)
        .collection("going")
        .doc(this.info.id)
        .delete();
        

      
      //this.emitResult()
    },
  async isGoing(){
      console.log("Firebase dohvat going...");
      var query = await db.collection("users")
                  .doc(store.currentUser)
                  .collection("going").where("id", "==", this.info.id.toString()).get();
                  this.going = false;
                  query.forEach((doc) => {
                    this.going = true;
                    console.log(doc);
                   })
    },
//     async sizeG(){
//       var query = await db.collection("users")
//                   .doc(store.currentUser)
//                   .collection("going").where("result", "==", this.result).get().then((data) => {
//                     data = data.size;
//                     console.log(data);
//                     console.log(this.result);
//                   })
                  
//     },
//     async updateG(){
//       await db.collection("users")
//                   .doc(store.currentUser).collection("going").doc(this.info.id).update({
//     result: this.result
// })
// .then(() => {
//     console.log("Document successfully updated!");
// });
//     } 
    
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
