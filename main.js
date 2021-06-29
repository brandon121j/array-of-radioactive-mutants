/******************
 * YOUR CODE HERE *
 ******************/

function addMeToEnd(arr) {

  arr.push('Colin');

}


function addMeToStart(arr) {

  arr.unshift('Colin');

}

function changeLast(arr, val) {

  arr[arr.length - 1] = val;

}

function changeAllValuesTo(arr, val) {

  for (i = 0; i < arr.length; i++) {
    arr [i] = val;
  }
}

function oddOrEven(arr) {
  for (i = 0; i < arr.length; i++) {
    arr[i] % 2 === 0 ? arr[i] = 'even' : arr[i] = 'odd';
  }
}

function changeNextThreeToValue(start, arr, value) {
  arr[start] = value;
  arr[start + 1] = value;
  arr[start + 2] = value;
}

















/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof addMeToEnd === 'undefined') {
  addMeToEnd = undefined;
}

if (typeof addMeToStart === 'undefined') {
  addMeToStart = undefined;
}

if (typeof changeLast === 'undefined') {
  changeLast = undefined;
}

if (typeof changeAllValuesTo === 'undefined') {
  changeAllValuesTo = undefined;
}

if (typeof oddOrEven === 'undefined') {
  oddOrEven = undefined;
}

if (typeof changeNextThreeToValue === 'undefined') {
  changeNextThreeToValue = undefined;
}


module.exports = {
  addMeToEnd,
  addMeToStart,
  changeLast,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}
