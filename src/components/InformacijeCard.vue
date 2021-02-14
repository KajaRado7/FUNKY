<template>
  
    <div id="cards">
      <img class="card-img-top" :src="info.image" />
      <div class="card-body">
               
        <div class="form-group">
         
          <label for="eventName">            
            Event name            
           <span class="text-danger ml-1">{{info.eventName }}</span>    
        </label>           
        </div>

        <div class="form-group">
            <label for="date">
              Date
            <span class="text-danger ml-1">{{ info.date }}</span>
            </label>
          <br />
        </div>
        <div class="form-group">
          <label for="time">
            Time
            <span class="text-danger ml-1">{{ info.time }}</span>
          </label>
        </div>

        <div class="form-group">
            <label for="region">
            Region
            <span class="text-danger ml-1">{{ info.region }}</span>
          </label>
        </div>
        <div class="form-group">
          <label for="city">
            City
            <span class="text-danger ml-1">{{ info.city }}</span>
          </label>
        </div>

        <div class="form-group">
          <label for="address">
            Address
            <span class="text-danger ml-1">{{ info.address }}</span>
          </label>
        </div>

        <div class="form-group">
          <label for="eventEntry">
            Event entry
            <span class="text-danger ml-1">{{ info.eventEntry }}</span>
          </label>
        </div>

        <div class="form-group">
          <label for="categories">
            Categories:
            <span class="text-danger ml-1">{{ info.categories }}</span>
          </label>
        </div>
        <div class="form-group">
          <label for="capacity">
            Capacity
            <span class="text-danger ml-1">{{ info.capacity }}</span>
          </label>
        </div>
        <div class="form-group">
          <label for="note">Note:</label>
          {{ info.note }}
        </div>
    </div>
    </div>
  

</template>

<script>
import { db } from '@/firebase';

export default {
    props: ['info'],
    name: 'InformacijeCard',     
};
</script>

<style scoped>
/*#cards {
  margin-bottom: 25px;
  margin-top: 17px;
  border-bottom: none;
  border-bottom-left-radius: 0%;
  border-bottom-right-radius: 0%;
  border-left: none;
  border-right: none;
  border-top: none;
  background-color: #1a1a1a;
}*/
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
}¸
.form-control {
  margin-bottom: 8px;
  margin-top: 10px;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 2px solid #f5b85c;
  background-color: #1a1a1a;
  color: #d0d0d0;
  outline: none;
  box-shadow: none;
}
.form-control:focus,
.form-control:active {
  background: #1a1a1a;
  color: white;
  box-shadow: none;
  border-bottom: 2px solid #f5b85c;
}

/*.card-body {
  text-align: center;
  margin-top: -5px;
  margin-bottom: 5px;
}
.card-text {
  height: 1px;
  margin-bottom: 10px;
  font-size: 18px;
  margin-left: -10px;
  color: #d0d0d0;
}*/
</style>
