//this function will find today's date
function calendar(){
  var day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var month=['January','February','March','April','May','June','July','August','September','October','November','December'];
  var d=new Date();
  setText('calendar-day', day[d.getDay()]);
  setText('calendar-date', d.getDate());
  setText('calendar-month-year', month[d.getMonth()]+' '+(1900+d.getYear()));
};

//this function will set the text value of <p> tags
function setText(id, val){
  if(val < 10){
      val = '0' + val;    //add leading 0 if val < 10
  }
  document.getElementById(id).innerHTML = val;
};

//call calendar() when page load
window.onload = calendar;


// var person = {
//   "info": [],
//   "family": true
// };

// person.info.push({ 
//   "first": "Bruce", 
//   "last": "Cook", 
//   "birthday": { 
//     "month": 7, 
//     "day": 7, 
//     "year": 1973 }, 
//   "ideas": ["drill", "kayak", "headphones"]
// });

// person.info.push({ 
//   "first": "Courtney", 
//   "last": "Cook", 
//   "birthday": { 
//     "month": 10, 
//     "day": 7, 
//     "year": 1998 }, 
//   "ideas": ["mallets", "keyboard", "plane ticket"]
// });

// person.info.push({ 
//   "first": "Dylan", 
//   "last": "Cook", 
//   "birthday": { 
//     "month": 7, 
//     "day": 6, 
//     "year": 2003 }, 
//   "ideas": ["book", "movie", "watch"]
// });

// person.info.push({ 
//   "first": "Travis", 
//   "last": "Cook", 
//   "birthday": { 
//     "month": 7, 
//     "day": 19, 
//     "year": 2006 }, 
//   "ideas": ["headphones", "phone", "video game"]
// });