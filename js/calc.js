var entry = "";
var number = "";
var operator = "";
var stringResult = "";
var result;

// clear the screen (default it to 0)
var clearScreen = function() {
  entry = "";
  number = "";
  operator = "";
  stringResult = "";
  document.getElementById("viewfield").value = "0";
};

// clear the last added number
var clearEntry = function() {
  entry = "";
  document.getElementById("viewfield").value = "0";
};

// create a number out of digits
var addNum = function(num) {
  if (entry.length < 10) {
    entry += num;
  } else return;
  document.getElementById("viewfield").value = entry;
};

// use decimal point in the number
var addDecimal = function(dec) {
  if (!entry.includes(".")) {
    entry += ".";
  }
};

// add the operator to the string
var addOperator = function(op) {
  if (stringResult == "") {
    stringResult = entry;
    operator = op;
    entry = "";
  } else {
    number = entry;
    stringResult += operator + number;
    entry = "";
    result = eval(stringResult).toFixed(8);
    result = parseFloat(result);
    document.getElementById("viewfield").value = result;
    stringResult = result.toString();
    operator = op;
  }
};

// calculate the result by evaluating the string
var calcResult = function() {
  stringResult += operator + entry;
  result = eval(stringResult).toFixed(8);
  result = parseFloat(result);
  document.getElementById("viewfield").value = result;
  entry = "";
  stringResult = result.toString();
};
