let textBox = document.getElementById("text-box");
let timeFrame = document.getElementById("time-frame");
let todayCol = document.getElementById("today-col");
let tomorrowCol = document.getElementById("tomorrow-col");
let weekCol = document.getElementById("week-col");

let dueToday = timeFrame.options[0];
let dueTomorrow = timeFrame.options[1];
let dueWeek = timeFrame.options[2];

function addToList() {

  if (dueToday.selected){

    addCheckbox(todayCol);
  
  } else if (dueTomorrow.selected){

    addCheckbox(tomorrowCol);

  } else if (dueWeek.selected){

    addCheckbox(weekCol);

  }

}


function addCheckbox (list){

  let newInput = document.createElement("input");
  newInput.type = "checkbox";

  let newLabel = document.createElement("label");
  newLabel.innerText = textBox.value;

  list.appendChild(newInput);
  list.appendChild(newLabel);

}