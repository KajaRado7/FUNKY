<template>
      <div id="addEvent">
                  		<div class="container"
                             style="max-width: 500px; 
                                    text-align: left; 
                                    color: black">
						<br/>
						<br/>
                         <div style="max-width: 500px; 
                                    text-align: center; 
                                    background-color: #F5B85C; 
                                    border: none;
                                     border-radius: 15px; 
                                     padding: 16px 150px; 
                                     display: inline-block">
                                     
						 <h2>Add event</h2>
						 </div>
						 <br/>
						 <br/>
		<div class="mainDiv" align="right">
		<div style="text-align: left">
		 <label for="addEventPicture">Add event picture<span class="text-danger ml-1">*</span></label>
		</div>
		<progress id="uploader" value="0" max="100">0%</progress>
		<input type="file" id="fileButton" value="upload"/>
	</div>
                            <br/>
                            <div class="form-group">
                                <label for="eventName">Event name<span class="text-danger ml-1">*</span></label>
                                <input type="text" class="form-control" id="eventName" placeholder="e.g. Deep Vibez">
                            </div>
                            <br/>
                            <div class="form-group">
                                <label for="date">Date<span class="text-danger ml-1">*</span></label>
                                <input type="date" class="form-control" id="date" placeholder="e.g. 12.03.2021.">
                                
                            </div>
                            <br/>
                            <div class="form-group">
                                <label for="time">Time<span class="text-danger ml-1">*</span></label>
                                <input type="time" class="form-control" id="time" placeholder="e.g. 10 p.m - 4 a.m.">
                            </div>
                            <br/>
                            <div class="form-group">
                                <label for="address">Address<span class="text-danger ml-1">*</span></label>
                                <input type="text" class="form-control" id="address" placeholder="e.g. Preradovićeva 1, 52100 Pula">
                            </div>
                            <br/>
                            <div class="form-group">
                                <label for="eventEntry">Event entry<span class="text-danger ml-1">*</span></label>
                                <input type="text" class="form-control" id="eventEntry" placeholder="e.g. 10 kn">
                            </div>
                            <br/>
							<div class="form-group">
							    <label for="categories">Categories:<span class="text-danger ml-1">*</span></label>
							<div class="wrapper">
                             <div class="form-check"><br/>
                                 <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                                 <label class="form-check-label" for="exampleRadios1">
                                     Concert
                                 </label>
                             </div>
	                         <div class="form-check"><br/>
                              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                              <label class="form-check-label" for="exampleRadios2">
                                     Games
                              </label>
                             </div>
                             <div class="form-check">
                              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                              <label class="form-check-label" for="exampleRadios2">
                                     Book club
                              </label>
                             </div>
                             <div class="form-check">
                              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                              <label class="form-check-label" for="exampleRadios2">
                                     Quiz
                              </label>
                             </div>
                             <div class="form-check">
                              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                              <label class="form-check-label" for="exampleRadios2">
                                     Outdoor
                              </label>
                             </div>
                             <div class="form-check">
                               <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                               <label class="form-check-label" for="exampleRadios2">
                                     Indoor
                               </label>
                             </div>
                             <div class="form-check">
                               <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                               <label class="form-check-label" for="exampleRadios2">
                                     Other
                               </label>
                             </div>
                            </div>
                            </div>
                
							<br/>
							<div class="form-group">
                                <label for="capacity">Capacity<span class="text-danger ml-1">*</span></label>
                                <input type="number" class="form-control" id="capacity" placeholder="e.g. 30">
							</div>
                            <br/>
                            <div class="form-group">
                                <label for="note">Note:</label>
                                <textarea class="form-control" id="note" rows="4" ></textarea>
                             </div>
                             <br/>
                            <button type="button" 
                                    class="btn btn-outline-secondary btn-block text-uppercase" 
                                    style="max-width: 500px; 
                                           text-align: center; 
                                           background-color: #F5B85C; 
                                           border: none; 
                                           border-radius: 15px; 
                                           padding: 16px 190px; 
                                           display: inline-block; 
                                           color: black">Publish</button>
                           
					</div>
                </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  width: 100%;
  grid-template-columns: 100px 1fr;
  gap: 10px;
  grid-auto-rows: minmax(30px, auto);
}

</style>