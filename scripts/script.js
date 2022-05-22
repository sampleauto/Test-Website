var today = new Date();
var hours = today.getHours();
var ampm = "am";
if(hours > 12) {
  hours = hours - 12;
  ampm = "pm";
}
var minutes = today.getMinutes();
minutes = String(minutes).padStart(2,'0');
var time = hours + ":" + minutes + ampm;
document.write(time);
