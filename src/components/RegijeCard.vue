<template>
  <div class="card" >
    <a :href="info.route"><img class="card-img-top" :src="info.img" ></a>
  <div class="card-body">
    <p class="card-text">{{ info.naslov }}</p>
  </div>
  </div>
</template>

<script>
export default {
  props: ['info'],
  name: 'RegijeCard',
  }
</script>

<style scoped>
.card {
  width: 18rem;
  margin-bottom: 25px;
  margin-top: 17px;
  border-bottom: none;
  border-bottom-left-radius: 0%;
  border-bottom-right-radius: 0%;
  border-left: none;
  border-right: none;
  border-top: none;
  background-color: #1A1A1A;
}
.card-img-top{ 
  height: 150px;
  object-fit: cover;
  border-radius: 14%;   /* zaobljenost rubova*/
}
.card-body {
  text-align: center;
  margin-top: -5px;
  margin-bottom: 5px;
}
.card-text {
  height: 1px;
  margin-bottom: 10px;
  font-size: 18px;
  margin-left: -10px;
  color: #D0D0D0;
  
} 
</style>