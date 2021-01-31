<template>
  <div class="container" style="max-width: 500px;">
    <div class="testing">
      <div class="buttonContainer">
        <button class="squareBtn" @click="setFilters('Music')">
          <font-awesome-icon icon="music" size="4x" color="white" />
          <span>Music</span>
        </button>

        <button class="squareBtn" @click="setFilters('Games')">
          <font-awesome-icon icon="dice" size="4x" color="white" />
          <span>Games</span>
        </button>

        <button class="squareBtn" @click="setFilters('Book Club')">
          <font-awesome-icon icon="book-open" size="4x" color="white" />
          <span>Literature</span>
        </button>

        <button class="squareBtn" @click="setFilters('Outdoor')">
          <font-awesome-icon icon="cloud-sun" size="4x" color="white" />
          <span>Outdoor</span>
        </button>

        <button class="squareBtn" @click="setFilters('Indoor')">
          <font-awesome-icon icon="home" size="4x" color="white" />
          <span>Indoor</span>
        </button>
      </div>

      <div class="bottomBtnContainer">
        <button class="otherBtn" @click="setFilters('Other')">
          <span>Other</span>
        </button>

        <button class="filterBtn" @click="filter"><b>Filter</b></button>
      </div>

      <div class="result" style="margin-top: 1rem;">
        <b>Test:</b>
        {{ filteredUsers }}
      </div>
    </div>

    <footer id="footer"></footer>
  </div>
</template>

<script>
import store from '@/store.js';

export default {
  name: 'Filter',
  data() {
    return {
      store,
      filters: [],
      filteredUsers: '',

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
          event: 'Literature',
          category: 'Literature',
        },
        {
          event: 'Art',
          category: 'Art',
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
  name: 'App',
};
</script>

<style scoped>
/*izbrisati footer nakon testiranja*/
#footer {
  width: 100%;
  height: 80px;
}
.result {
  color: white;
}

button {
  border-radius: 8px;
  border: 3px solid lightgrey;
  background: #1a1a1a;
}
button:focus {
  background: #f5b85c;
}
span {
  font-size: 14px;
  color: white;
  padding-top: 5px;
}

.buttonContainer,
.bottomBtnContainer {
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
}

.squareBtn {
  width: 40%;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  margin: 4.7%;
}

.otherBtn {
  width: 100%;
  margin: 4%;
}

.filterBtn {
  color: black;
  font-size: 16px;
  margin-top: 9%;
  padding: 16px 32px;

  border: none;
  border-radius: 15px;

  background-color: #f5b85c;
}
</style>
