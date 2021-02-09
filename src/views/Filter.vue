<!--U doradi------------------------------------------------------------------->
<template>
  <div class="container" style="max-width: 500px;">
    <div class="testing">
      <div class="buttonContainer">
        <!--Music-->
        <div class="Button1">
          <input
            type="checkbox"
            value="Music"
            name="events"
            @click="setFilters('Music')"
          />
          <font-awesome-icon icon="music" size="4x" color="white" />
          <label for="Music">
            <div class="choices">Music</div>
          </label>
        </div>
        <!--Games-->
        <div class="Button1">
          <input
            type="checkbox"
            value="Games"
            name="events"
            @click="setFilters('Games')"
          />
          <font-awesome-icon icon="dice" size="4x" color="white" />
          <label for="Games">
            <div class="choices">Games</div>
          </label>
        </div>
        <!--Literature-->
        <div class="Button1">
          <input
            type="checkbox"
            value="Literature"
            name="events"
            @click="setFilters('Literature')"
          />
          <font-awesome-icon icon="book-open" size="4x" color="white" />
          <label for="Literature">
            <div class="choices">Literature</div>
          </label>
        </div>
        <!--Art-->
        <div class="Button1">
          <input
            type="checkbox"
            value="Art"
            name="events"
            @click="setFilters('Art')"
          />
          <font-awesome-icon icon="theater-masks" size="4x" color="white" />
          <label for="Art">
            <div class="choices">Art</div>
          </label>
        </div>
        <!--Outdoor-->
        <div class="Button1">
          <input
            type="checkbox"
            value="Outdoor"
            name="events"
            @click="setFilters('Outdoor')"
          />
          <font-awesome-icon icon="cloud-sun" size="4x" color="white" />
          <label for="Outdoor">
            <div class="choices">Outdoor</div>
          </label>
        </div>
        <!--Indoor-->
        <div class="Button1">
          <input
            type="checkbox"
            value="Indoor"
            name="events"
            @click="setFilters('Indoor')"
          />

          <label for="Indoor">
            <div class="choices">
              <font-awesome-icon icon="home" size="4x" color="white" />
              Indoor
            </div>
          </label>
        </div>
      </div>

      <div class="bottomBtnContainer">
        <!--Other-->
        <div class="Button2">
          <input
            type="checkbox"
            value="Other"
            name="events"
            @click="setFilters('Other')"
          />
          <label for="Other">
            <div class="choices">Other</div>
          </label>
        </div>

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
        // proba za mix event - ne funkc.
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
.Button1 {
  width: 40%;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  margin: 4.7%;

  border-radius: 8px;
  border: 3px solid lightgrey;
}
.Button2 {
  width: 100%;
  margin: 4%;
  height: 50px;

  border-radius: 8px;
  border: 3px solid lightgrey;
}
.choices {
  background-color: #1a1a1a;
  font-size: 16px;
  font-family: century gothic;
}
/*input {
  display: none;
}*/
input:checked + label > .choices {
  background-color: #f5b85c !important;
}

/*izbrisati footer nakon testiranja*/
#footer {
  width: 100%;
  height: 80px;
}
.result {
  color: white;
}

label {
  color: white;
  padding-top: 5px;
}

.buttonContainer,
.bottomBtnContainer {
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
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
