const zeroPad = (num, places) => String(num).padStart(places, '0')
var today = new Date();
var hours = today.getHours();
var ampm = "am";
if(hours > 12) {
  hours = hours - 12;
  ampm = "pm";
}
var minutes = zeroPad(today.getMinutes(),2);
var time = hours + ":" + minutes + ampm;
document.write(time);
