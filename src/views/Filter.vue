<template>
  <div class="container" style="max-width: 500px;">
    <div class="testing">
      <div class="buttonContainer">
        <div class="btn ">
          <button class="squareBtn" @click="setFilters('Music')">
            <font-awesome-icon icon="music" size="4x" color="white" />
            <span>Music</span>
          </button>
        </div>
        <div class="btn">
          <button class="squareBtn" @click="setFilters('Games')">
            <font-awesome-icon icon="dice" size="4x" color="white" />
            <span>Games</span>
          </button>
        </div>
        <div class="btn">
          <button class="squareBtn" @click="setFilters('Book Club')">
            <font-awesome-icon icon="book-open" size="4x" color="white" />
            <span>Book club</span>
          </button>
        </div>

        <div class="btn ">
          <button class="squareBtn" @click="setFilters('Quiz')">
            <font-awesome-icon icon="spell-check" size="4x" color="white" />
            <span>Quiz</span>
          </button>
        </div>
        <div class="btn ">
          <button class="squareBtn" @click="setFilters('Outdoor')">
            <font-awesome-icon icon="cloud-sun" size="4x" color="white" />
            <span>Outdoor</span>
          </button>
        </div>
        <div class="btn ">
          <button class="squareBtn" @click="setFilters('Indoor')">
            <font-awesome-icon icon="home" size="4x" color="white" />
            <span>Indoor</span>
          </button>
        </div>
      </div>
      <!--Other i Filter---->
      <div class="btn">
        <button class="otherBtn" @click="setFilters('Other')">
          <span>Other</span>
        </button>
      </div>
      <div class="btn">
        <button class="filterBtn" @click="filter"><b>Filter</b></button>
      </div>
      <!--Other i Filter---->

      <!--Rezultat---->
      <div class="result" style="margin-top: 2rem;">
        <b>Test :</b>
        {{ filteredUsers }}
      </div>
      <!--Rezultat---->
    </div>
    <footer id="footer"></footer>
  </div>
</template>

<script>
import store from '@/store.js';
import { firebase } from '@/firebase';
import router from '@/router';

// basic filter bez cards-a (test verzija)

export default {
  name: 'App',
  data() {
    return {
      store,
      users: [
        {
          event: 'Music event',
          category: 'Music',
        },
        {
          event: 'Games event',
          category: 'Games',
        },
        {
          event: 'Book club event',
          category: 'Book Club',
        },
        {
          event: 'Quiz event',
          category: 'Quiz',
        },
        {
          event: 'Outdoor event',
          category: 'Outdoor',
        },
        {
          event: 'Indoor event',
          category: 'Indoor',
        },
        {
          event: 'Other event',
          category: 'Other',
        },
        // proba za mix event - ne funkc. ( treba se doraditi )
        {
          event: 'Mix event',
          category: 'Music Outdoor',
        },
      ],
      filters: [],
      filteredUsers: '',
    };
  },
  methods: {
    setFilters(newFilter) {
      if (this.filters.includes(newFilter))
        this.filters = this.filters.filter((filter) => filter != newFilter);
      else this.filters.push(newFilter);
    },
    filter() {
      if (!this.filters.length) return;
      this.filteredUsers = this.users.filter((user) =>
        this.filters.includes(user.category)
      );

      this.filters = [];
    },
  },
};
</script>

<style scoped>
#footer {
  width: 100%;
  height: 80px;
}
.result {
  color: white;
}
button:focus {
  background-color: #f5b85c;
}
.otherBtn {
  width: 280px;
}

.filterBtn {
  background-color: #f5b85c;
  border: none;
  border-radius: 15px;
  color: black;
  padding: 16px 32px;
  text-align: center;
  font-size: 16px;
  display: block;
  margin: auto;
  text-decoration: none;
}
.squareBtn {
  padding: 10px;
}

button {
  border-radius: 8px;
  border: 3px solid lightgrey;
  size: 40px;
  background-color: #1a1a1a;
}

span {
  font-size: 14px;
  color: white;
}

.buttonContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px 2em;
}
</style>
