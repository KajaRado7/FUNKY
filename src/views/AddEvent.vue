<template>
  <div id="addEvent">
    <div
      class="container"
      style="max-width: 500px; 
             text-align: left; 
             color: white"
    >
      <img
        v-if="loading"
        class="loading"
        :src="require('@/assets/loading3.gif')"
      />
      <form v-if="!loading" @submit.prevent="addNewEvent">
        <div class="mainDiv">
          <div style="text-align: left;">
            <label for="addEventPicture">
              Add event picture
              <span class="text-danger ml-1">*</span>
            </label>
          </div>
          <br />
          <croppa
            class="imageZone"
            :width="260"
            :height="150"
            placeholder="Upload image"
            v-model="imageReference"
          ></croppa>
          <div class="text-danger">{{ this.image }}</div>
        </div>
        <br />
        <div class="form-group">
          <label for="eventName">
            Event name
            <span class="text-danger ml-1">*</span>
          </label>
          <br />
          <!-- DEJANAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA-->
          <input
            type="text"
            maxlength="50"
            name="eName"
            v-model="eventName"
            class="form-control"
            id="eventName"
            placeholder="e.g. Deep Vibez"
            :class="{ 'is-invalid': submitted && $v.eventName.$error }"
          />
          <div
            v-if="submitted && !$v.eventName.required"
            class="invalid-feedback"
          >
            Event name must be filled!
          </div>
        </div>
        <br />
        <div class="form-group">
          <label for="date">
            Date
            <span class="text-danger ml-1">*</span>
          </label>
          <input
            type="date"
            name="date"
            v-model="date"
            class="form-control"
            id="date"
            placeholder="e.g. 12.03.2021."
            :class="{ 'is-invalid': submitted && $v.date.$error }"
          />
          <div v-if="submitted && !$v.date.required" class="invalid-feedback">
            Date must be filled!
          </div>
        </div>
        <br />
        <div class="form-group">
          <label for="time">
            Time
            <span class="text-danger ml-1">*</span>
          </label>
          <input
            type="time"
            name="time"
            v-model="time"
            class="form-control"
            id="time"
            placeholder="e.g. 10 p.m - 4 a.m."
            :class="{ 'is-invalid': submitted && $v.time.$error }"
          />
          <div v-if="submitted && !$v.time.required" class="invalid-feedback">
            Time must be filled!
          </div>
        </div>
        <br />

        <div class="form-group">
          <label for="region">
            Region
            <span class="text-danger ml-1">*</span>
          </label>
          <br />
          <br />

          <div class="chooseRegion">
            <select
              name="region"
              class="select"
              id="region-select"
              v-model="regions"
              :class="{ 'is-invalid': submitted && $v.regions.$error }"
            >
              <option disabled selected>--Please choose a region--</option>
              <option value="Central Croatia">Central Croatia</option>
              <option value="Dalmatia">Dalmatia</option>
              <option value="Istria">Istria</option>
              <option value="Slavonia">Slavonia</option>
              <option value="Mountain Croatia">Mountain Croatia</option>
            </select>
            <div
              v-if="submitted && !$v.regions.required"
              class="invalid-feedback"
            >
              Region must be chosen!
            </div>
          </div>
        </div>
        <br />

        <!-- DEJANAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA -->
        <div class="form-group">
          <label for="city">
            City
            <span class="text-danger ml-1">*</span>
          </label>
          <input
            type="text"
            name="city"
            v-model="city"
            class="form-control"
            id="city"
            placeholder="e.g. Pula"
            :class="{ 'is-invalid': submitted && $v.city.$error }"
          />
          <div v-if="submitted && !$v.city.required" class="invalid-feedback">
            City must be filled!
          </div>
        </div>
        <br />

        <div class="form-group">
          <label for="address">
            Address
            <span class="text-danger ml-1">*</span>
          </label>
          <input
            type="text"
            name="addres"
            v-model="address"
            class="form-control"
            id="address"
            placeholder="e.g. Preradovićeva 1"
            :class="{ 'is-invalid': submitted && $v.address.$error }"
          />
          <div
            v-if="submitted && !$v.address.required"
            class="invalid-feedback"
          >
            Address must be filled!
          </div>
        </div>
        <br />

        <div class="form-group">
          <label for="eventEntry">
            Event entry
            <span class="text-danger ml-1">*</span>
          </label>
          <input
            type="text"
            name="eEntry"
            v-model="eventEntry"
            class="form-control"
            id="eventEntry"
            placeholder="e.g. 10 kn"
            :class="{ 'is-invalid': submitted && $v.eventEntry.$error }"
          />
          <div
            v-if="submitted && !$v.eventEntry.required"
            class="invalid-feedback"
          >
            Event entry must be filled!
          </div>
        </div>
        <br />

        <div class="form-group">
          <label for="categories">
            Categories:
            <span class="text-danger ml-1">*</span>
          </label>
          <div class="wrapper" name="categories">
            <label class="checkbox" for="exampleCheck1">
              <br />
              <input
                class="form-check-input"
                v-model="model.check"
                type="checkbox"
                name="exampleCheckBoxes"
                id="Music"
                value="Music"
                checked
              />
              Music
              <span class="checkmark"></span>
            </label>

            <label class="checkbox" for="exampleCheck2">
              <br />
              <input
                class="form-check-input"
                type="checkbox"
                v-model="model.check"
                name="exampleCheckBoxes"
                id="Games"
                value="Games"
              />
              Games
              <span class="checkmark"></span>
            </label>

            <label class="checkbox" for="exampleCheck3">
              <input
                class="form-check-input"
                v-model="model.check"
                type="checkbox"
                name="exampleCheckBoxes"
                id="Literature"
                value="Literature"
              />
              Literature
              <span class="checkmark"></span>
            </label>

            <label class="checkbox" for="exampleCheck4">
              <input
                class="form-check-input"
                v-model="model.check"
                type="checkbox"
                name="exampleCheckBoxes"
                id="Art"
                value="Art"
              />
              Art
              <span class="checkmark"></span>
            </label>

            <label class="checkbox" for="exampleCheck5">
              <input
                class="form-check-input"
                v-model="model.check"
                type="checkbox"
                name="exampleCheckBoxes"
                id="Outdoor"
                value="Outdoor"
              />
              Outdoor
              <span class="checkmark"></span>
            </label>

            <label class="checkbox" for="exampleCheck6">
              <input
                class="form-check-input"
                v-model="model.check"
                type="checkbox"
                name="exampleCheckBoxes"
                id="Indoor"
                value="Indoor"
              />
              Indoor
              <span class="checkmark"></span>
            </label>

            <label
              class="checkbox"
              for="exampleCheck7"
              :class="{ 'is-invalid': submitted && $v.model.check.$error }"
            >
              <input
                class="form-check-input"
                v-model="model.check"
                type="checkbox"
                checked="checked"
                name="exampleCheckBoxes"
                id="Other"
                value="Other"
                @change="$v.model.check.$touch()"
              />
              Other
              <span class="checkmark"></span>
            </label>
            <br />
            <div
              v-if="submitted && $v.model.check.$error"
              class="invalid-feedback"
            >
              <span
                v-if="!$v.model.check.required"
                style="white-space: nowrap;"
              >
                Please select at least one category!
              </span>
            </div>
          </div>
        </div>
        <br />

        <div class="form-group">
          <label for="capacity">
            Capacity
            <span class="text-danger ml-1">*</span>
          </label>
          <input
            type="number"
            name="capacity"
            v-model="capacity"
            class="form-control"
            id="capacity"
            placeholder="e.g. 30"
            :class="{ 'is-invalid': submitted && $v.capacity.$error }"
          />
          <div
            v-if="submitted && !$v.capacity.required"
            class="invalid-feedback"
          >
            Capacity must be filled!
          </div>
        </div>
        <br />

        <div class="form-group">
          <label for="note">Note:</label>
          <textarea
            class="form-control"
            maxlength="500"
            v-model="note"
            id="note"
            rows="4"
          ></textarea>
        </div>
        <br />
        <button type="button" class="btn_publish" @click="addNewEvent()">
          <b>Publish</b>
        </button>
      </form>
    </div>
    <footer id="footer"></footer>
  </div>
</template>

<script>
import { firebase } from "@/firebase";
import store from "@/store";
import { db, storage } from "@/firebase";
import { required } from "vuelidate/lib/validators";

export default {
  name: "AddEvent",
  data() {
    return {
      loading: false,
      store,
      model: {
        check: []
      },
      imageReference: null,
      eventName: "",
      date: "",
      time: "",
      regions: "",
      city: "",
      address: "",
      eventEntry: "",
      capacity: "",
      note: "",
      image: null,
      submitted: false
    };
  },
  validations: {
    eventName: { required },
    time: { required },
    date: { required },
    regions: { required },
    eventEntry: { required },
    city: { required },
    address: { required },
    capacity: { required },
    model: {
      check: { required }
    },
    note: { required }
  },
  methods: {
    getEvent() {
      //Promise based,omotač
      return new Promise((resolveFn, errorFn) => {
        this.imageReference.generateBlob(data => {
          resolveFn(data);
        });
      });
    },
    async addNewEvent() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        if (!this.imageReference.hasImage()) {
          this.image = "No image to upload!";
          console.log("No image to upload");
        }
        return;
      }

      try {
        this.loading = true;
        let blobData = await this.getEvent();
        let imageName =
          "posts/" + store.currentUser + "/" + Date.now() + ".png";
        let result = await storage.ref(imageName).put(blobData);
        let url = await result.ref.getDownloadURL();
        console.log("Javni link", url);
        const newEventName = this.eventName;
        const newDate = this.date;
        const newTime = this.time;
        const newCity = this.city;
        const newAddress = this.address;
        const newRegion = this.regions;
        const newEventEntry = this.eventEntry;
        const check = this.model.check;
        const newCapacity = this.capacity;
        const newNote = this.note;

        let doc = await db.collection("posts").add({
          email: store.currentUser,
          posted_at: Date.now(),
          url: url,
          name: newEventName,
          date: newDate,
          time: newTime,
          city: newCity,
          address: newAddress,
          region: newRegion,
          entry: newEventEntry,
          model: check,
          capacity: newCapacity,
          note: newNote
        });
        console.log("Document: ", doc);
        // this.imageReference.remove();
        this.eventName = "";
        (this.date = ""), (this.time = "");
        this.city = "";
        this.address = "";
        this.eventEntry = "";
        this.regions = "";
        this.model.check = "";
        this.capacity = "";
        this.note = "";
        this.submitted = false;
      } catch (e) {
        console.error("greška", e);
      }
      this.loading = false;
    }
  }
};
</script>

<style scoped>
/*select i input field iste duljine*/
.form-control,
select {
  width: 100%;
}
#region-select {
  padding: 8px 12px;
  border: 2px solid #f5b85c;
  border-radius: 4px;
  background-color: #1a1a1a;
  color: white;
}
#footer {
  width: 100%;
  height: 80px;
}
img.preview {
  width: 200px;
}

.btn_publish {
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
#uploader {
  display: block;
  margin: auto;
}

.wrapper {
  display: grid;
  width: 100%;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  grid-auto-rows: minmax(30px, auto);
}
.box {
  text-align: center;
  color: white;
  width: fixed;
  height: 200px;
  padding: 20px 20px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: rgba(78, 76, 76, 0.77);
  font-size: 16px;
  margin: auto;
  margin-top: 5%;
  resize: both;
  overflow: auto;
}
.form-control {
  margin-bottom: 8px;
  margin-top: 10px;
  border: 2px solid #f5b85c;
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

.choose {
  background-color: #f5b85c;
  color: black;
  padding: 0.5rem;
  font-family: sans-serif;
  border-radius: 0.3rem;
  cursor: pointer;
  margin-top: 1rem;
}
.imageZone {
  background: #1a1a1a;
  border: 3px dashed #f5b85c;
}
.imageZone:hover {
  border: 4px solid #f5b85c;
}
.checkbox > input:checked {
  border: 1px solid #f5b85c;
  background-color: #f5b85c;
  box-shadow: inset 0px 0px 0px 4px #f5b85c;
}
.checkbox > input {
  border: 2px solid #f5b85c;
  background-color: #1a1a1a;
  box-shadow: none;
}
.loading {
  width: 200px;
  text-align: center;
}
</style>
