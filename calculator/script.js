//Variablen
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var button6 = document.getElementById("button6");
var button7 = document.getElementById("button7");
var button8 = document.getElementById("button8");
var button9 = document.getElementById("button9");
var button0 = document.getElementById("button0");
var buttonA = document.getElementById("buttonAdd");
var buttonS = document.getElementById("buttonSub");
var buttonD = document.getElementById("buttonDiv");
var buttonM = document.getElementById("buttonMul");
var buttonE = document.getElementById("buttonEqu");
var buttonC = document.getElementById("buttonCom");
var buttonCom = document.getElementById("buttonCom");
var reset = document.getElementById("reset");
var textbox = document.getElementById("textbox");
var res = 0;

//Methoden
buttonE.addEventListener("click", function(){
	var str = textbox.value;
  str =	str.replace (/x/g, "*");
	str = str.replace (/÷/g, "/");
	var res = eval(str);
	textbox.value = res;
});

button1.addEventListener("click", function(){
	if ( textbox.value == '0'){
		textbox.value = "";
	}
	var text = textbox.value + '1';
  textbox.value = text;
});

button2.addEventListener("click", function(){
	if ( textbox.value == '0'){
		textbox.value = "";
	}
	var text = textbox.value + '2';
  textbox.value = text;
});

button3.addEventListener("click", function(){
	if ( textbox.value == '0'){
		textbox.value = "";
	}
	var text = textbox.value + '3';
  textbox.value = text;
});

button4.addEventListener("click", function(){
	if ( textbox.value == '0'){
		textbox.value = "";
	}
	var text = textbox.value + '4';
  textbox.value = text;
});

button5.addEventListener("click", function(){
	if ( textbox.value == '0'){
		textbox.value = "";
	}
	var text = textbox.value + '5';
  textbox.value = text;
});

button6.addEventListener("click", function(){
	if ( textbox.value == '0'){
		textbox.value = "";
	}
	var text = textbox.value + '6';
  textbox.value = text;
});

button7.addEventListener("click", function(){
	if ( textbox.value == '0'){
		textbox.value = "";
	}
	var text = textbox.value + '7';
  textbox.value = text;
});

button8.addEventListener("click", function(){
	if ( textbox.value == '0'){
		textbox.value = "";
	}
	var text = textbox.value + '8';
  textbox.value = text;
});

button9.addEventListener("click", function(){
	if ( textbox.value == '0'){
		textbox.value = "";
	}
	var text = textbox.value + '9';
  textbox.value = text;
});

button0.addEventListener("click", function(){
	if ( textbox.value == '0'){
		textbox.value = "";
	}
	var text = textbox.value + '0';
  textbox.value = text;
});

buttonCom.addEventListener("click", function(){
	if ( textbox.value == '0'){
		textbox.value = "";
	}
	var text = textbox.value + '.';
  textbox.value = text;
});

buttonA.addEventListener("click", function(){
	if ( textbox.value == '0'){
		textbox.value = "";
	}
	var text = textbox.value + '+';
  textbox.value = text;
});

buttonS.addEventListener("click", function(){
	if ( textbox.value == '0'){
		textbox.value = "";
	}
	var text = textbox.value + '-';
  textbox.value = text;
});

buttonD.addEventListener("click", function(){
	if ( textbox.value == '0'){
		textbox.value = "";
	}
	var text = textbox.value + '÷';
  textbox.value = text;
});

buttonM.addEventListener("click", function(){
	if ( textbox.value == '0'){
		textbox.value = "";
	}
	var text = textbox.value + 'x';
  textbox.value = text;
});

reset.addEventListener("click", function(){
  textbox.value = "";
});
