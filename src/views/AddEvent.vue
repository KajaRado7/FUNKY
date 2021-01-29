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
          <div style="text-align: left">
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
          <select
            name="region"
            id="region-select"
            v-model="regions"
            :class="{ 'is-invalid': submitted && $v.regions.$error }"
          >
            <option disabled selected>--Please choose a region--</option>
            <option value="sredisnja">Središnja</option>
            <option value="juzna">Južna</option>
            <option value="zapadna">Zapadna</option>
            <option value="istocna">Istočna</option>
            <option value="gorska">Gorska</option>
          </select>
          <div
            v-if="submitted && !$v.regions.required"
            class="invalid-feedback"
          >
            Region must be chosen!
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
            placeholder="e.g. Preradovićeva 1, 52100 Pula"
            :class="{ 'is-invalid': submitted && $v.address.$error }"
          />
          <div
            v-if="submitted && !$v.regions.required"
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
              Concert
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
              Book club
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
              Quiz
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
      model: {
        check: [],
      },
      imageReference: null,
      eventName: '',
      date: '',
      time: '',
      regions: '',
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
              result.ref
                .getDownloadURL()
                .then((url) => {
                  const imageData = this.newImageData;
                  const eventName = this.newEventName;
                  const date = this.newDate;
                  const time = this.newTime;
                  const address = this.newAddress;
                  const eventEntry = this.newEventEntry;
                  const concert = this.newConcert;
                  const games = this.newGames;
                  const bookClub = this.newBookClub;
                  const quiz = this.newQuiz;
                  const outdoor = this.newOutdoor;
                  const indoor = this.newIndoor;
                  const other = this.newOther;
                  const capacity = this.newCapacity;
                  const note = this.newNote;

                  db.collection('posts')
                    .add({
                      email: store.currentUser,
                      posted_at: Date.now(),
                      url: url,
                    })
                    .then((doc) => {
                      console.log('Document: ', doc);
                      this.imageData = null;
                      this.imageReference = null;
                      //this.$router.push({name: "posts"})
                    })
                    .catch((e) => {
                      console.error('Error adding document ', e);
                    });
                })
                .catch((e) => {
                  console.error(e);
                });
            })
            .catch((e) => {
              console.error(e);
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
  border-radius: 4px;
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
