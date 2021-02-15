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
        <span class="text">{{ info.capacity }}</span>
      </div>
      <br />

      <div class="form-control">
        <div class="nazivi">
          Note:
        </div>
        <span class="text">{{ info.note }}</span>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase";

export default {
  props: ["info"],
  name: "InformacijeCard"
};
</script>

<style scoped>
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
