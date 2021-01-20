<template>
  <div id="addEvent">
    <div
      class="container"
      style="max-width: 500px; 
                                    text-align: left; 
                                    color: white"
    >
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
        <div class="box">
          <div>
            <input
              type="file"
              @change="previewImage"
              accept="image/*"
              style="background-color: #F5B85C;"
              id="actual-btn"
              hidden
            />
            <label class="choose" for="actual-btn">Choose Image</label>
          </div>
          <div>
            <br />
            <p>
              Progress: {{ uploadValue.toFixed() + '%' }}
              <progress id="progress" :value="uploadValue" max="100"></progress>
            </p>
          </div>
          <div v-if="imageData != null">
            <img class="preview" :src="picture" />
            <br />
            <button @click="onUpload" style="background-color: #F5B85C">
              Upload
            </button>
          </div>
        </div>
      </div>
      <br />
      <div class="form-group">
        <label for="eventName">
          Event name
          <span class="text-danger ml-1">*</span>
        </label>
        <input
          type="text"
          class="form-control"
          id="eventName"
          placeholder="e.g. Deep Vibez"
        />
      </div>
      <br />
      <div class="form-group">
        <label for="date">
          Date
          <span class="text-danger ml-1">*</span>
        </label>
        <input
          type="date"
          class="form-control"
          id="date"
          placeholder="e.g. 12.03.2021."
        />
      </div>
      <br />
      <div class="form-group">
        <label for="time">
          Time
          <span class="text-danger ml-1">*</span>
        </label>
        <input
          type="time"
          class="form-control"
          id="time"
          placeholder="e.g. 10 p.m - 4 a.m."
        />
      </div>
      <br />
      <div class="form-group">
        <label for="region">
          Region
          <span class="text-danger ml-1">*</span>
        </label>
        <select name="region" id="region-select">
          <option disabled selected>--Please choose a region--</option>
          <option value="sredisnja">Središnja</option>
          <option value="juzna">Južna</option>
          <option value="zapadna">Zapadna</option>
          <option value="istocna">Istočna</option>
          <option value="gorska">Gorska</option>
        </select>
      </div>
      <br />
      <div class="form-group">
        <label for="address">
          Address
          <span class="text-danger ml-1">*</span>
        </label>
        <input
          type="text"
          class="form-control"
          id="address"
          placeholder="e.g. Preradovićeva 1, 52100 Pula"
        />
      </div>
      <br />
      <div class="form-group">
        <label for="eventEntry">
          Event entry
          <span class="text-danger ml-1">*</span>
        </label>
        <input
          type="text"
          class="form-control"
          id="eventEntry"
          placeholder="e.g. 10 kn"
        />
      </div>
      <br />
      <div class="form-group">
        <label for="categories">
          Categories:
          <span class="text-danger ml-1">*</span>
        </label>
        <div class="wrapper">
          <label class="form-check-label" for="exampleCheck1">
            <br />
            <input
              class="form-check-input"
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
              type="checkbox"
              name="exampleCheckBoxes"
              id="exampleCheck6"
              value="option6"
            />
            Indoor
            <span class="checkmark"></span>
          </label>

          <label class="form-check-label" for="exampleCheck7">
            <input
              class="form-check-input"
              type="checkbox"
              checked="checked"
              name="exampleCheckBoxes"
              id="exampleCheck7"
              value="option7"
            />
            Other
            <span class="checkmark"></span>
          </label>
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
          class="form-control"
          id="capacity"
          placeholder="e.g. 30"
        />
      </div>
      <br />
      <div class="form-group">
        <label for="note">Note:</label>
        <textarea class="form-control" id="note" rows="4"></textarea>
      </div>
      <br />
      <button type="button" class="btn_publish">
        <b>Publish</b>
      </button>
    </div>
    <footer id="footer"></footer>
  </div>
</template>

<script>
import { firebase } from '@/firebase';

export default {
  name: 'Upload',
  data() {
    return {
      imageData: null,
      picture: null,
      uploadValue: 0,
    };
  },
  methods: {
    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },

    onUpload() {
      this.picture = null;
      const storageRef = firebase
        .storage()
        .ref(`${this.imageData.name}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.picture = url;
          });
        }
      );
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
