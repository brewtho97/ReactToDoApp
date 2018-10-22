const moment = require('moment');

console.log(moment().format());

//January 1st 1970 @ 12:00am -> 0
//January 1st 1970 @ 12:01am -> 60
//Counted in seconds since 1970??
let now = moment();
console.log('Current Timestamp: ', now.unix())

let timestamp = 1540217731;
let currentMoment = moment.unix(timestamp);
console.log('Current Moment: ', currentMoment.format('MMM Do YYYY @ h:mma'));

//January 3rd, 2018 @ 12:13 AM
console.log('Challenge: ', currentMoment.format('MMMM Do, YYYY @ hh:mm A'))