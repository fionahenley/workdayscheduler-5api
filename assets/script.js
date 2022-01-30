var californiaTime = document.querySelector("#currentDay");


var currentTime = moment();
californiaTime.textContent = currentTime.format('MMMM Do YYYY, h:mm a'); // January 29th 2022, 11:22:08 am
var currentHour = moment().format('H'); // January 29th 2022, 11:22:08 am
var am = true;


// create elements for timeblock 
    function showSched() {
    var officeHours = 9;

    for (var i = 1; i < 10; i++) {
      var containerRow = $("<div class='row'>");
      var hourBox = $("<div class='col-1 hour time-block'>");
      if (am) {
        hourBox.text(officeHours+ ":hr");
      } else {
        hourBox.text(officeHours + ":hr");
      }

      var taskBox = $("<textarea class='col-10 description textarea' id='text-area'>");
      taskBox.addClass("description-" + i);
      
      if(officeHours == currentHour) {
        taskBox.addClass("present");
      } else  if (officeHours > currentHour){
        taskBox.addClass("future");
      } else {
        taskBox.addClass("past");
      }

      var btnBox = $("<button class='col-1 time-block saveBtn far fa-save fa-2x' id='btn-box'></button>" );

      // append the container elements
      $(".container").append(containerRow);
      containerRow.append(hourBox);
      containerRow.append(taskBox);
      containerRow.append(btnBox);
      officeHours++;
      
      if (officeHours > 18) {
        officeHours = 0;
        am = false;
        officeHours++;
      }
    
    // save-item functon in a closure function

      function saveFunc(index) {
      btnBox.click(function() {

        var task = $(".description-" + index).val(); //get the value of the textarea

        if(index === 1){
        console.log(task);        
        localStorage.setItem("task1", task)

        } else if (index === 2) {
          console.log(task);
          localStorage.setItem("task2", task)        
        }  else if (index === 3) {
          localStorage.setItem("task3", task)
        }  else if (index === 4) {
          localStorage.setItem("task4", task)
        }  else if (index === 5) {
          localStorage.setItem("task5", task)
        }  else if (index === 6) {
          localStorage.setItem("task6", task)
        }  else if (index === 7) {
          localStorage.setItem("task7", task)
        }  else if (index === 8) {
          localStorage.setItem("task8", task)
        }  else if (index === 9) {
          localStorage.setItem("task9", task)
        } 

      });
    }
    saveFunc(i);
  }
}
showSched();


function getVal() {
  var getTask9am = localStorage.getItem("task1");
  document.querySelector(".description-1").innerHTML = getTask9am;

  var getTask10am = localStorage.getItem("task2");
  document.querySelector(".description-2").innerHTML = getTask10am;
  console.log(getTask10am);

  var getTask11am = localStorage.getItem("task3");
  document.querySelector(".description-3").innerHTML = getTask11am;
  console.log(getTask11am);

  var getTask12pm = localStorage.getItem("task4");
  document.querySelector(".description-4").innerHTML = getTask12pm;
  console.log(getTask12pm);

  var getTask1pm = localStorage.getItem("task5");
  document.querySelector(".description-5").innerHTML = getTask1pm;
  console.log(getTask1pm);

  var getTask2pm = localStorage.getItem("task6");
  document.querySelector(".description-6").innerHTML = getTask2pm;
  console.log(getTask2pm);

  var getTask3pm = localStorage.getItem("task7");
  document.querySelector(".description-7").innerHTML = getTask3pm;
  console.log(getTask3pm);

  var getTask4pm = localStorage.getItem("task8");
  document.querySelector(".description-8").innerHTML = getTask4pm;
  console.log(getTask4pm);

  var getTask5pm = localStorage.getItem("task9");
  document.querySelector(".description-9").innerHTML = getTask5pm;
  console.log(getTask5pm);


}
getVal();
