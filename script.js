//The clock
function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString();
  document.getElementById("clock").textContent = time;
}
setInterval(updateClock, 1000);
updateClock();


// The Notes
const notesArea = document.getElementById("notes");


notesArea.value = localStorage.getItem("notes") || "";

function saveNotes() {
  localStorage.setItem("notes", notesArea.value);
  alert("Notes saved!");
}


// The Task
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;


  li.onclick = () => li.remove();

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}


//The Timer
let seconds = 0;
let timerInterval = null;

function startTimer() {
  if (timerInterval) return;

  timerInterval = setInterval(() => {
    seconds++;
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    document.getElementById("timer").textContent = `${mins}:${secs}`;
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  pauseTimer();
  seconds = 0;
  document.getElementById("timer").textContent = "00:00";
}
