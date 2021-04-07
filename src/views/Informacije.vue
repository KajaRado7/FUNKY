<template>
  <div class="container" style="max-width: 500px;">
    <div id="cards">
      <div id="cards" style="text-align: left; color: white;">
    <img class="card-img-top" :src="card.image" />
    <br />
    <br />

    <div class="card-body">
      <div class="form-control">
        <div class="nazivi">
          Event name:
        </div>
        <span class="text">{{ card.eventName }}</span>
      </div>
      <br />

      <div class="form-control">
        <div class="nazivi">
          Date:
        </div>
        <span class="text">{{ card.date }}</span>
      </div>
      <br />

      <div class="form-control">
        <div class="nazivi">
          Time:
        </div>
        <span class="text">{{ card.time }}</span>
      </div>
      <br />

      <div class="form-control">
        <div class="nazivi">
          Region:
        </div>
        <span class="text">{{ card.region }}</span>
      </div>
      <br />

      <div class="form-control">
        <div class="nazivi">
          City:
        </div>
        <span class="text">{{ card.city }}</span>
      </div>
      <br />

      <div class="form-control">
        <div class="nazivi">
          Address:
        </div>
        <span class="text">{{ card.address }}</span>
      </div>
      <br />

      <div class="form-control">
        <div class="nazivi">
          Event entry:
        </div>
        <span class="text">{{ card.eventEntry }}</span>
      </div>
      <br />

      <div class="form-control">
        <div class="nazivi">
          Categories:
        </div>
        <span class="text">{{ card.categories }}</span>
      </div>
      <br />

      <div class="form-control">
        <div class="nazivi">
          Capacity:
        </div>
        <span class="text">{{ this.result }}/{{ card.capacity }}</span>
      </div>
      <br />

      <div class="form-control">
        <div class="nazivi">
          Note:
        </div>
        <span class="text">{{ card.note }}</span>
      </div>
      <br />
      <div class="buttons">
        <button class="clickButton"  @click="clickGoing" :disabled="capacityFull && !going">
          <b v-if="!going">Going / Interested</b>
          <b v-else>Not going</b>
        </button>
        <!-- <button class="clickButton" v-else @click="notGoing">
          <b>Not going</b> 
        </button>-->
      </div>
    </div>
  </div>
    </div>
    <footer id="footer"></footer>
  </div>
</template>

<script>
import { db } from "@/firebase";
import DogadajiCard from "../components/DogadajiCard.vue";

export default {
  name: "Informacije",
  data: function() {
    return {
      eventId: this.$route.params.event_id,
      card: {},
      result: null,
      currentUser: localStorage.getItem("email"),
     // going: true,
      nGoing: false,
      going: false,
      result: null,
      capacityFull: false,
    };
  },
  

  mounted() {
    this.getInfo();
    this.isGoing();
  },
  methods: {
    async getInfo() {
      console.log("Firebase dohvat...");
      var doc = await db
        .collection("posts")
        .doc(this.eventId)
        .get();

      const data = doc.data();

      this.card = {
        id: this.eventId,
        address: data.address,
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
        
      };
    },
     async isGoing() {
    // this.eventId = this.id;
    // console.log(this.id);
      console.log("Firebase dohvat is going...");
      console.log(this.currentUser);
      console.log(this.eventId);
    
        var query = await db.collection("posts")
                  .doc(this.eventId)
                  .collection("going") 
                  .get();                  
                  this.result = query.docs.length
                  query.forEach((doc) => {  
                    console.log(doc.data().email);                
                    if(doc.data().email == this.currentUser){
                      this.going = true;
                    }                   
                   })
                  if(this.result == this.card.capacity){
                    this.capacityFull = true;
                  }
        
    },
    async notGoing() {
      var query = await db.collection("posts")
                  .doc(this.eventId)
                  .collection("going") 
                  .get(); 
                  query.forEach((doc) => {                                 
                    if(doc.data().email == this.currentUser){
                      doc.ref.delete();
                    }                   
                   })
    },
    async clickGoing() {
        
      // if (this.result < this.info.capacity) {
         this.going = !this.going;
         if(!this.going){
           this.result -= 1;
           this.notGoing();
        
          console.log("Brisem going")
          
         }else{
             this.result += 1;
             if(this.result == this.card.capacity){
                    this.capacityFull = true;
                  }
                await db
                  .collection("posts")
                  .doc(this.eventId)
                  .collection("going")       
                  .add({           
                  email: this.currentUser,                   
          });          
        }
        }
        
       },
   
              
    
  
};
</script>
<style scoped>
button:disabled,
button[disabled]{
  background-color: #cccccc;
  color: #666666;
}
#footer {
  width: 100%;
  height: 80px;
}
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
