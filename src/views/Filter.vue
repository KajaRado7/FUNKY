<!--U doradi------------------------------------------------------------------->
<template>
  <div>
    <div class="buttonContainer">
      <!--Music-->
      <div class="Button1">
        <input
          type="checkbox"
          value="Music"
          name="events"
          id="Music"
          @click="setFilters('Music')"
        />

        <label for="Music">
          <div class="choices">
            <font-awesome-icon icon="music" size="4x" color="white" />
            <span>Music</span>
          </div>
        </label>
      </div>

      <!--Games-->
      <div class="Button1">
        <input
          type="checkbox"
          value="Games"
          name="events"
          id="Games"
          @click="setFilters('Games')"
        />

        <label for="Games">
          <div class="choices">
            <font-awesome-icon icon="dice" size="4x" color="white" />
            <span>Games</span>
          </div>
        </label>
      </div>

      <!--Literature-->
      <div class="Button1">
        <input
          type="checkbox"
          value="Literature"
          name="events"
          id="Literature"
          @click="setFilters('Literature')"
        />

        <label for="Literature">
          <div class="choices">
            <font-awesome-icon icon="book-open" size="4x" color="white" />
            <span>Literature</span>
          </div>
        </label>
      </div>

      <!--Art-->
      <div class="Button1">
        <input
          type="checkbox"
          value="Art"
          name="events"
          id="Art"
          @click="setFilters('Art')"
        />

        <label for="Art">
          <div class="choices">
            <font-awesome-icon icon="theater-masks" size="4x" color="white" />
            <span>Art</span>
          </div>
        </label>
      </div>

      <!--Outdoor-->
      <div class="Button1">
        <input
          type="checkbox"
          value="Outdoor"
          name="events"
          id="Outdoor"
          @click="setFilters('Outdoor')"
        />

        <label for="Outdoor">
          <div class="choices">
            <font-awesome-icon icon="cloud-sun" size="4x" color="white" />
            <span>Outdoor</span>
          </div>
        </label>
      </div>

      <!--Indoor-->
      <div class="Button1">
        <input
          type="checkbox"
          value="Indoor"
          name="events"
          id="Indoor"
          @click="setFilters('Indoor')"
        />

        <label for="Indoor">
          <div class="choices">
            <font-awesome-icon icon="home" size="4x" color="white" />
            <span>Indoor</span>
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
          id="Other"
          @click="setFilters('Other')"
        />
        <label for="Other">
          <div class="choices other"><span class="otherText">Other</span></div>
        </label>
      </div>
    </div>
    <button class="filterBtn" @click="filter"><b>Filter</b></button>

    <div class="result" style="margin-top: 1rem;">
      <b>Test:</b>
      {{ filteredUsers }}
    </div>

    <footer id="footer"></footer>
  </div>
</template>

<script>
import store from "@/store.js";

export default {
  name: "Filter",
  data() {
    return {
      store,
      filters: [],
      filteredUsers: "",

      users: [
        {
          event: "Music event",
          category: "Music"
        },
        {
          event: "Games event",
          category: "Games"
        },
        {
          event: "Literature",
          category: "Literature"
        },
        {
          event: "Art",
          category: "Art"
        },
        {
          event: "Outdoor event",
          category: "Outdoor"
        },
        {
          event: "Indoor event",
          category: "Indoor"
        },
        {
          event: "Other event",
          category: "Other"
        },
        // proba za mix event - ne funkc.
        {
          event: "Mix event",
          category: "Music Outdoor"
        }
      ]
    };
  },
  methods: {
    setFilters(newFilter) {
      if (this.filters.includes(newFilter))
        this.filters = this.filters.filter(filter => filter != newFilter);
      else this.filters.push(newFilter);
    },
    filter() {
      if (!this.filters.length) return;

      this.filteredUsers = this.users.filter(user =>
        this.filters.includes(user.category)
      );

      this.filters = [];
    }
  },
  name: "App"
};
</script>

<style scoped>
.Button1 {
  width: 40%;
}
.Button2 {
  width: 80%;
}
.choices.other {
  height: 50px;
  border-radius: 8px;
  border: 3px solid lightgrey;
}

.choices {
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  background-color: transparent;
  padding: 15px 32px;
  font-size: 16px;
  margin: 10px;

  border-radius: 8px;
  border: 3px solid lightgrey;
}
input {
  display: none;
}
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
  display: block;
}

span {
  color: white;
  padding: 5px 10px;
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
  margin-top: 5%;
  padding: 16px 32px;

  border: none;
  border-radius: 15px;

  background-color: #f5b85c;
}
</style>
