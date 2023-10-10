// references


var upper_led = "";


// number buttons

var btn_0 = document.getElementById("0");
var btn_1 = document.getElementById("1");
var btn_2 = document.getElementById("2");
var btn_3 = document.getElementById("3");
var btn_4 = document.getElementById("4");
var btn_5 = document.getElementById("5");
var btn_6 = document.getElementById("6");
var btn_7 = document.getElementById("7");
var btn_8 = document.getElementById("8");
var btn_9 = document.getElementById("9");



var input = document.getElementById("input1");


var ac = document.getElementById("ac");
var del = document.getElementById("del");

// operators
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var mulitply = document.getElementById("mulitply");
var divide = document.getElementById("divide");


var period = document.getElementById("period");

var equal = document.getElementById("equal");



var sin = document.getElementById("sin");



var on = document.querySelector(".on");
// ekran za rezultat
var main_display = document.querySelector(".main-display");

// Add event listener to the button
on.addEventListener("click", function() { 
	main_display.textContent = ""; 
	input.textContent = ""; 
	upper_led = "";
});





document.addEventListener("keydown", function(event) {

  var key = event.key;
  if (/^[0-9]$/.test(key)) {
    
    var button = document.getElementById(key);
    if (button) {
      
      button.click();
    }
  }
if (event.key === "+") {
	plus.click();
  } else if (event.key === "-") {
	minus.click();
  } else if (event.key === "*") {
	mulitply.click();
  } else if (event.key === "/") {
	divide.click();


  } else if (event.key === "Escape") {
	  ac.click();
  } if (event.key === "Enter") {
		equal.click();
  } if (event.key === ",") {
		period.click();
  }

	


  if (event.key === "Backspace") {
	  del.click();
  }
});


btn_0.addEventListener("click", function() { 
	input.textContent += "0"; 
	upper_led += "0";
});

btn_1.addEventListener("click", function() { 
	input.textContent += "1"; 
	upper_led += "1";
});


btn_2.addEventListener("click", function() { 
	input.textContent += "2"; 
	upper_led += "2";
});


btn_3.addEventListener("click", function() { 
	input.textContent += "3"; 
	upper_led += "3";
});

btn_4.addEventListener("click", function() { 
	input.textContent += "4"; 

	upper_led += "4";
});

btn_5.addEventListener("click", function() { 
	input.textContent += "5"; 
	upper_led += "5";
});

btn_6.addEventListener("click", function() { 
	input.textContent += "6"; 
	upper_led += "6";
});

btn_7.addEventListener("click", function() { 
	input.textContent += "7"; 
	upper_led += "7";
});

btn_8.addEventListener("click", function() { 
	input.textContent += "8"; 
	upper_led += "8";
});

btn_9.addEventListener("click", function() { 
	input.textContent += "9"; 
	upper_led += "9";
});


ac.addEventListener("click", function() { 
	main_display.textContent = ""; 
	input.textContent = ""; 
	upper_led = "";

});



del.addEventListener("click", function() { 

	var inputText = input.textContent;
	if (inputText.length > 0) {
	    // Remove the last character from the input text
	    inputText = inputText.slice(0, -1);
	    input.textContent = inputText;
	  }
});

plus.addEventListener("click", function() { 
	input.textContent += "+"; 
	upper_led += "+";
});


minus.addEventListener("click", function() { 
	input.textContent += "-"; 
	upper_led += "-";
});


period.addEventListener("click", function() { 
	input.textContent += "."; 
	upper_led += ".";
});





mulitply.addEventListener("click", function() { 
	input.textContent += "×"; 

	upper_led += "*";
});


divide.addEventListener("click", function() { 
	input.textContent += "÷"; 
	upper_led += "/";



});




// kada se pritisne jednako
equal.addEventListener("click", function() { 




	
	result = eval(upper_led);
	main_display.textContent = result.toString();

	input.textContent = ""; 

});


sin.addEventListener("click", function() { 



	
	result = eval(upper_led);

	trig = Math.sin(result);

	upper_led

	main_display.textContent = trig.toString();

	input.textContent = ""; 

});






































