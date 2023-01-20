var timestamp_actual = new Date().getTime();
var timestamp_2024 = new Date('January 1, 2024 00:00:00 GMT+00:00').getTime();

var distance_2024 = timestamp_2024 - timestamp_actual;

var seconds = distance_2024/1000;
var minutes = seconds/60;
var hours = minutes/60;
var days = hours/24;

console.log(days);