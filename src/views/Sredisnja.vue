<template>
  <div class="container" style="max-width: 500px;">
    <dogadaji-card v-for="card in cards" :key="card" :info="card" />
    <!-- kada stavimo : onda ovaj = prima js  ako stavim samo info prenjet ce se string -->
    <footer id="footer"></footer>
    <!--<template>
  <div class="container" style="max-width: 500px;">
    <div id="cards">
      <regije-card v-for="card in cards" :key="card" :info="card" />
    </div>
    <footer id="footer"></footer>
  </div>
</template> -->
  </div>
</template>

<script></script>
<style scoped></style>
