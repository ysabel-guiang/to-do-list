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
newInput.classList = "checkbox";


let newLabel = document.createElement("label");
newLabel.innerText = textBox.value;
newLabel.classList = "label";

let newBreak = document.createElement("BR");

list.appendChild(newInput);
list.appendChild(newLabel);
list.appendChild(newBreak);



}

let checkbox = document.getElementsByClassName("checkbox");
let label = document.getElementsByClassName("label");
let brk = document.getElementsByTagName("br")


document.addEventListener('click', function () {

  for (let i = 0; i < checkbox.length;  i++){

    if (checkbox[i].checked){
      alert("Congratulations for getting something done! You're doing a great job!")
      checkbox[i].remove();
      label[i].remove();
      brk[i].remove();
  }
}
})

