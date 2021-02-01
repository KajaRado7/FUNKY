<template>
  <div id="addEvent">
    <div
      class="container"
      style="max-width: 500px; 
             text-align: left; 
             color: white"
    >
      <form @submit.prevent="addNewEvent">
        <br />
        <br />
        <div
          class="alert alert-success"
          role="alert"
          style="max-width: 500px; text-align: center; background-color: #F5B85C; border-radius: 15px; color: black"
        >
          <h2 class="alert-heading">Add event</h2>
        </div>
        <br />
        <br />
        <div class="mainDiv">
          <div style="text-align: left;">
            <label for="addEventPicture">
              Add event picture
              <span class="text-danger ml-1">*</span>
            </label>
          </div>
          <br />
          <croppa
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
          <input
            type="text"
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

        <div class="form-group">
          <label for="region">
            Region
            <span class="text-danger ml-1">*</span>
          </label>
          <br />
          <br />
          <select
            name="region"
            id="region-select"
            v-model="regions"
            :class="{ 'is-invalid': submitted && $v.regions.$error }"
          >
            <option disabled selected>--Please choose a region--</option>
            <option value="sredisnja">Central Croatia</option>
            <option value="juzna">Dalmatia</option>
            <option value="zapadna">Istria</option>
            <option value="istocna">Slavonia</option>
            <option value="gorska">Mountain Croatia</option>
          </select>
          <div
            v-if="submitted && !$v.regions.required"
            class="invalid-feedback"
          >
            Region must be chosen!
          </div>
        </div>
        <br />
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
            :class="{ 'is-invalid': submitted && $v.address.$error }"
          />
          <div
            v-if="submitted && !$v.regions.required"
            class="invalid-feedback"
          >
            City must be filled!
          </div>
        </div>

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
            v-if="submitted && !$v.regions.required"
            class="invalid-feedback"
          >
            Address must be filled!
          </div>
        </div>

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

        <div class="form-group">
          <label for="categories">
            Categories:
            <span class="text-danger ml-1">*</span>
          </label>
          <div class="wrapper" name="categories">
            <label class="form-check-label" for="exampleCheck1">
              <br />
              <input
                class="form-check-input"
                v-model="model.check"
                type="checkbox"
                name="exampleCheckBoxes"
                id="exampleCheck1"
                value="option1"
                checked
              />
              Music
              <span class="checkmark"></span>
            </label>

            <label class="form-check-label" for="exampleCheck2">
              <br />
              <input
                class="form-check-input"
                type="checkbox"
                v-model="model.check"
                name="exampleCheckBoxes"
                id="exampleCheck2"
                value="option2"
              />
              Games
              <span class="checkmark"></span>
            </label>

            <label class="form-check-label" for="exampleCheck3">
              <input
                class="form-check-input"
                v-model="model.check"
                type="checkbox"
                name="exampleCheckBoxes"
                id="exampleCheck3"
                value="option3"
              />
              Literature
              <span class="checkmark"></span>
            </label>

            <label class="form-check-label" for="exampleCheck4">
              <input
                class="form-check-input"
                v-model="model.check"
                type="checkbox"
                name="exampleCheckBoxes"
                id="exampleCheck4"
                value="option4"
              />
              Art
              <span class="checkmark"></span>
            </label>

            <label class="form-check-label" for="exampleCheck5">
              <input
                class="form-check-input"
                v-model="model.check"
                type="checkbox"
                name="exampleCheckBoxes"
                id="exampleCheck5"
                value="option5"
              />
              Outdoor
              <span class="checkmark"></span>
            </label>

            <label class="form-check-label" for="exampleCheck6">
              <input
                class="form-check-input"
                v-model="model.check"
                type="checkbox"
                name="exampleCheckBoxes"
                id="exampleCheck6"
                value="option6"
              />
              Indoor
              <span class="checkmark"></span>
            </label>

            <label
              class="form-check-label"
              for="exampleCheck7"
              :class="{ 'is-invalid': submitted && $v.model.check.$error }"
            >
              <input
                class="form-check-input"
                v-model="model.check"
                type="checkbox"
                checked="checked"
                name="exampleCheckBoxes"
                id="exampleCheck7"
                value="option7"
                @change="$v.model.check.$touch()"
              />
              Other
              <span class="checkmark"></span>
            </label>
            <br />
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

        <div class="form-group">
          <label for="note">Note:</label>
          <textarea
            class="form-control"
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
import { firebase } from '@/firebase';
import store from '@/store';
import { db, storage } from '@/firebase';
import { required } from 'vuelidate/lib/validators';

export default {
  name: 'AddEvent',
  data() {
    return {
      store,
      model: {
        check: [],
      },
      imageReference: null,
      eventName: '',
      date: '',
      time: '',
      regions: '',
      city: '',
      address: '',
      eventEntry: '',
      capacity: '',
      note: '',
      image: null,
      submitted: false,
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
    imageReference: { required },
    model: {
      check: { required },
    },
  },
  methods: {
    addNewEvent() {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        if (!this.imageReference.hasImage()) {
          this.image = 'No image to upload!';
          console.log('No image to upload');
        }
        return;
      }
      this.imageReference.generateBlob((blobData) => {
        if (blobData != null) {
          let imageName =
            'posts/' + store.currentUser + '/' + Date.now() + '.png';

          storage
            .ref(imageName)
            .put(blobData)
            .then((result) => {
              result.ref.getDownloadURL().then((url) => {
                // const newImage = this.imageReference;
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

                db.collection('posts')
                  .add({
                    email: store.currentUser,
                    posted_at: Date.now(),
                    url: url,
                    // image: newImage,
                    name: newEventName,
                    date: newDate,
                    time: newTime,
                    city: newCity,
                    address: newAddress,
                    region: newRegion,
                    entry: newEventEntry,
                    model: check,
                    capacity: newCapacity,
                    note: newNote,
                  })
                  .then((doc) => {
                    console.log('Document: ', doc);
                    //this.imageReference = null;
                    this.eventName = null;
                    (this.date = null), (this.time = null);
                    this.city = null;
                    this.address = null;
                    this.eventEntry = null;
                    this.regions = null;
                    this.model.check = null;
                    this.capacity = null;
                    this.note = null;
                    //this.$router.push({name: "posts"})
                    this.submitted = false;
                  })
                  .catch((error) => {
                    console.error('Error adding document ', error);
                  });
              });
              /*.catch((error) => {
                  console.error(error);
                });*/
            })
            .catch((error) => {
              console.error(error);
            });
        }
      });
    },
  },
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
  border: 2px solid;
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
  grid-template-columns: 100px 1fr;
  gap: 10px;
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
</style>
