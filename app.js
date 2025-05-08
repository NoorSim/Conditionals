//If else condition e.g.
let subscribed = true

if (subscribed === true) {
  console.log('show the video')
}
else {
  console.log('tell user to log into account')
}
  
//Else if statement e.g.
//if no. 16 is false then no. 19 will run and so on
let subscribed = false
let loggedIn = true

if (subscribed === true) {
  console.log('show the video')
}
else if (loggedIn === true) {
  console.log('tell the user to ugrade their subscription')
}
else{
  console.log('tell user to log into account')
}

//Comparison operators
let cash = 50
let price = 40
let isStoreOpen = false

if (cash >= price && isStoreOpen === true) {
  console.log('print the receipt')
}

//Logical operators
let cash = 50
let price = 40
let isStoreOpen = false

if (cash >= price || isStoreOpen === true) {
  console.log('print the receipt')
}