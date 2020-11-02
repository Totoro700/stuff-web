//Variables
var memory = [];
var align = 1;
var collapse = 0;
//Define functions
/** Reload **/
function Reload(){
	//Confirm if user want to reload
	var x = confirm('Are you sure you want to reload site? Data you inputed may not be saved');
	if (x){
		//Reload
		location.reload();
	}else{
		alert('Click OK to continue');
	}
}
/********Google and Microsoft********/
//Opens Google's home page
function Google(){
	window.open('https://google.com');
}
//Opens Microsoft's home page
function Microsoft(){
	window.open('https://microsoft.com');
}
function Ask(){
	var x = prompt('What\'s your name?'); 
	var x='Your name is : \n'+x; 
	document.getElementById('returnValue').innerText=x;
}
/********Links********/
//Redirect with link
function Redirect(){
	var z=document.getElementById('RLink').value; 
	document.write('Redirecting you to '+z+' . Please wait a few seconds. If you are not being redirected within 10 seconds, please reload the page'); 
	setTimeout(function(){location=z;},0);}
//Open tab/page with link
function Open(){
	var OLink=document.getElementById('Olink').value; 
	window.open(OLink);
}
//Open blank popup
function Popup(){
	window.open('about:blank', 'popup', 'None');
}
//Open popup with link
function OpenPopup(){
	var toOpen=document.getElementById('PopupLink').value; 
	window.open(toOpen, 'popup', 'None');
}
/***********Memory functions***********/
function MemorySave(){
	memory.push(' '+document.getElementById('ans').innerText);
}
function MemoryRecall(){
	document.getElementById('ans').innerText=memory;
}
function MemoryClear(){
	memory = [];
}
function MathClear(){
	//Clear
	document.getElementById('ans').innerText=null;
	document.getElementById('piAns').innerText=null;
	document.getElementById('radAns').innerText=null;
	document.getElementById('degAns').innerText=null;
}
/********Content alignment********/
//Left
function Left(){
	document.getElementById('Body').style.textAlign='left';
	document.getElementById('table').style.marginLeft='0';
	document.getElementById('table').style.marginRight='auto';
	document.getElementById('CurrentAlignment').innerText='Alignment: Left';
	align = 0;
}
//Right
function Right(){
	document.getElementById('Body').style.textAlign='right';
	document.getElementById('table').style.marginLeft='auto';
	document.getElementById('table').style.marginRight='0';
	document.getElementById('CurrentAlignment').innerText='Alignment: Right';
	align = 2;
}
//Center
function Center(){
	document.getElementById('Body').style.textAlign='center';
	document.getElementById('table').style.marginLeft='auto';
	document.getElementById('table').style.marginRight='auto';
	document.getElementById('CurrentAlignment').innerText='Alignment: Center';
	align = 1;
}
//Alignment random
function Random(){
	//Sets a random number
	var aR = Math.floor(Math.random()*3)+1;
	//Checks the current alignment
	if (aR==1){
		Center()
	} else if (aR==2){
		Right()
	} else if (aR==3){
		Left()
	}
}
//Align Next
function AlignNext(){
	//Checks the current alignment with the align variable
	if (align==0){
		Center();
	}else if (align==1){
		Right();
	}else{
		Left();
	}
}
//Align Previous
function AlignPrev(){
	//Checks the current alignment with the align variable
	if (align==0){
		Right();
	}else if (align==1){
		Left();
	}else{
		Center();
	}
}
/***********Math***********/
//Math functions
function math(){
	//Get Numbers
	var numOne=parseInt(document.getElementById('numOne').value); 
	var numTwo=parseInt(document.getElementById('numTwo').value); 
	//Get selected operation
	var s=document.getElementById('select').value;
	//Check & Calculate
	if(s=='p'){
		//Addtion
		document.getElementById('ans').innerText=numOne+numTwo;
	}else if(s=='s'){
		//Subtraction
		document.getElementById('ans').innerText=numOne-numTwo;
	}else if(s=='m'){
		//Multiplication
		document.getElementById('ans').innerText=numOne*numTwo;
	}else if(s=='d'){
		//Division
		document.getElementById('ans').innerText=numOne/numTwo;
	}else if(s=='pow'){
		//To the power of
		document.getElementById('ans').innerText=Math.pow(numOne, numTwo);
	}else if(s=='mod'){
		//Modulus
		document.getElementById('ans').innerText=numOne%numTwo;
	}else if(s=='exp'){
		//Exponetial
		document.getElementById('ans').innerText=numOne**numTwo;
	}else if(s=='sqrt'){
		//Square root
		document.getElementById('ans').innerText=Math.sqrt(numOne);
	}else if(s=='sin'){
		//Sine
		document.getElementById('ans').innerText=Math.sin(numOne);
	}else if(s=='cos'){
		//Cosine
		document.getElementById('ans').innerText=Math.cos(numOne);
	}else if(s=='tan'){
		//Tangent
		document.getElementById('ans').innerText=Math.tan(numOne);
	}else if(s=='asin'){
		//Arcsine
		document.getElementById('ans').innerText=Math.asin(numOne);
	}else if(s=='acos'){
		//Arccosine
		document.getElementById('ans').innerText=Math.acos(numOne);
	}else if(s=='atan'){
		//Arctangent
		document.getElementById('ans').innerText=Math.atan(numOne);
	}else if(s=='log'){
		//Logistic
		document.getElementById('ans').innerText=Math.log(numOne);
	}else if(s=='bin'){
		//Binary
		document.getElementById('ans').innerText=numOne.toString(2);
	}else if(s=='abs'){
		//Absolute value
		document.getElementById('ans').innerText=Math.abs(numOne);
	}else if(s=='rnd'){
		//Round
		document.getElementById('ans').innerText=Math.round(numOne);
	}else if(s=='flr'){
		//Floor
		document.getElementById('ans').innerText=Math.floor(numOne);
	}else if(s=='ceil'){
		//Ceiling
		document.getElementById('ans').innerText=Math.ceil(numOne);
	}else if(s=='e'){
		//Euler's number
		document.getElementById('ans').innerText=Math.E;
	}else if(s=='sinh'){
		//Hyperbolic sine
		document.getElementById('ans').innerText=Math.sinh(numOne);
	}else if(s=='cosh'){
		//Hyperbolic cosine
		document.getElementById('ans').innerText=Math.cosh(numOne);
	}else if(s=='tanh'){
		//Hyperbolic tangent
		document.getElementById('ans').innerText=Math.tanh(numOne);
	}else if(s=='asinh'){
		//Hyperbolic arcsine
		document.getElementById('ans').innerText=Math.asinh(numOne);
	}else if(s=='acosh'){
		//Hyperbolic arccosine
		document.getElementById('ans').innerText=Math.acosh(numOne);
	}else if(s=='atanh'){
		//Hyperbolic arctangent
		document.getElementById('ans').innerText=Math.atanh(numOne);
	}else if(s=='cbrt'){
		//Cubic root
		document.getElementById('ans').innerText=Math.cbrt(numOne);
	}else if(s=='ea'){
		//Add by Euler's number
		document.getElementById('ans').innerText=Math.E+numOne;
	}else if(s=='es'){
		//Subtract by Euler's number
		document.getElementById('ans').innerText=numOne-Math.E;
	}else if(s=='em'){
		//Multiply by Euler's number
		document.getElementById('ans').innerText=Math.E*numOne;
	}else if(s=='ed'){
		//Divide by Euler's number
		document.getElementById('ans').innerText=numOne/Math.E;
	}else if(s=='nan'){
		//Is Not a Number?
		if (isNaN(numOne)){
			document.getElementById('ans').innerText=numOne+' is not a number(NaN)';
		}else{
			document.getElementById('ans').innerText=numOne+' is a number';
		}
	}
}
//Pi
function Pi(){
	var piCont=document.getElementById('piAns').innerText;
	if (piCont==null || piCont==''){
		document.getElementById('piAns').innerText='1 Pi ≈ 3.1415926535897932384626433832795028841971693993751058209749445923\n078164062862089986280348253421170679';
	}else{
		document.getElementById('piAns').innerText='';
	}	
}
//Radians
function Rad(){
	var radCont=document.getElementById('radAns').innerText;
	if (radCont==null || radCont==''){
		document.getElementById('radAns').innerText='1 Radian ≈ '+57.2958+' Degrees(Deg)';
	}else{
		document.getElementById('radAns').innerText='';
	}
}
//Degrees
function Deg(){
	var degCont=document.getElementById('degAns').innerText;
	if (degCont==null || degCont==''){
		document.getElementById('degAns').innerText='1 Degree ≈ '+0.0174533+' Radians(Rad)';
	}else{
		document.getElementById('degAns').innerText='';
	}
}
/***********Other***********/
function Run(){
	var rs=document.getElementById('ACPselect').value;
	//Check the selected function
	if (rs=='a'){
		//Alert
		alert(document.getElementById('acpstr').value);
	}else if (rs=='c'){
		//Confirm
		var alpha = confirm(document.getElementById('acpstr').value);
		if (alpha){
			//The user clicked OK
			document.getElementById('returnValue').innerText='You clicked OK';
		}else{
			//The user clicked Cancel
			document.getElementById('returnValue').innerText='You clicked Cancel';
		}
	}else if (rs=='p'){
		//Prompt
		var alpha = prompt(document.getElementById('acpstr').value, document.getElementById('acpstrt').value);
		document.getElementById('returnValue').innerText=alpha;
	}else if (rs=='p2'){
		Ask();
	}
}
function randomStr(){
	document.getElementById('ranStr').innerText=Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
function ShowStats(){
	var lang = window.navigator.language;
	var syst = window.navigator.platform;
	alert('Info! These stats afterwards are collected from JavaScript!');
	alert(' Stats: \n Language: '+lang+' \n Platform: '+syst+' \n Cookies enabled: '+window.navigator.cookieEnabled+' \n Online: '+window.navigator.onLine+' \n Vendor: '+window.navigator.vendor+' \n User Agent: '+window.navigator.userAgent);
}
function showLS(){
	alert('Info! We use local storage to remember your choices of you background image, background color, and others!');
}
function updateLoadSpeed(){
	document.getElementById('loadingDiv').style.animation='spin '+document.getElementById('loadSpeed').value+'s linear infinite';
}
function openC(){
	window.open('https://stuff-web.xyz/mathCalculator');
}
function openCPopup(){
	window.open('https://stuff-web.xyz/mathCalculator', 'popup', 'width=500,height=500');
}
function load(){
	Center();
	var imgUrl=localStorage.getItem('imgUrl');
	if (imgUrl=='' || imgUrl==null){
		document.body.style.backgroundColor='#CCC';
	}else{
		document.body.style.backgroundImage='url('+imgUrl+')';
	}
	var bckClr=localStorage.getItem('bckClr');
	if (bckClr=='' || bckClr==null){
		document.body.style.backgroundColor='#CCC';
	}else{
		document.body.style.backgroundColor=bckClr;
	}
	var txtClr=localStorage.getItem('txtClr');
	if (txtClr=='' || txtClr==null){
		document.body.style.color='#000';
	}else{
		document.body.style.color=txtClr;
	}
}
function placeImg(){
	var imgLink=document.getElementById('url').value;
	document.body.style.backgroundImage='url('+imgLink+')';
	localStorage.setItem('imgUrl', imgLink);
}
function clearImg(){
	document.body.style.backgroundImage='url()';
	localStorage.setItem('imgUrl', '');
}
function setColor(){
	var color=document.getElementById('bckClr').value;
	document.body.style.backgroundColor=color;
	localStorage.setItem('bckClr', color);
}
function clearColor(){
	document.body.style.backgroundColor='#CCC';
	localStorage.setItem('bckClr', '');
}
function setColorTxt(){
	var txtColor=document.getElementById('txtClr').value;
	document.body.style.color=txtColor;
	localStorage.setItem('txtClr', txtColor);
}
function clearColorTxt(){
	document.body.style.color='#CCC';
	localStorage.setItem('txtClr', '');
}
