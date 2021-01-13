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
        <progress id="uploader" value="0" max="100">0%</progress>
        <input type="file" id="fileButton" value="upload" />
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
  </div>
</template>

<style scoped>
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
</style>
