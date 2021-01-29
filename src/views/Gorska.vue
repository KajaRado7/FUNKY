<template>
  <div class="container" style="max-width: 500px;">
    <div is="cards">
      <!---<dogadaji-card v-for="card in cards" :key="card.naslov" :info="card" />-->
      <h2>Sorry,there are no events available yet ...</h2>
      <font-awesome-icon icon="frown" color=" #f5b85c" size="2x" />
    </div>
    <footer id="footer"></footer>
  </div>
</template>

<style scoped>
h2 {
  color: #f5b85c;
}
#footer {
  width: 100%;
  height: 80px;
}
</style>
