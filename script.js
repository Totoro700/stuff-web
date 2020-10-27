//Variables
var memory = [];
var align = 1;
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
	//Check & calculate
	if(s=='p'){
		//Addtion
		document.getElementById('ans').innerText=numOne+numTwo;
	}else if (s=='s'){
		//Subtraction
		document.getElementById('ans').innerText=numOne-numTwo;
	}else if (s=='m'){
		//Multiplication
		document.getElementById('ans').innerText=numOne*numTwo;
	}else if (s=='d'){
		//Division
		document.getElementById('ans').innerText=numOne/numTwo;
	}else if (s=='pow'){
		//To the power of
		document.getElementById('ans').innerText=Math.pow(numOne, numTwo);
	}else if (s=='mod'){
		//Modulus
		document.getElementById('ans').innerText=numOne%numTwo;
	}else if (s=='exp'){
		//Exponetial
		document.getElementById('ans').innerText=numOne**numTwo;
	}else if (s=='sqrt'){
		//Square root
		document.getElementById('ans').innerText=Math.sqrt(numOne);
	}else if (s=='sin'){
		//Sine
		document.getElementById('ans').innerText=Math.sin(numOne);
	}else if (s=='cos'){
		//Cosine
		document.getElementById('ans').innerText=Math.cos(numOne);
	}else if (s=='tan'){
		//Tangent
		document.getElementById('ans').innerText=Math.tan(numOne);
	}else if (s=='asin'){
		//Arcsin
		document.getElementById('ans').innerText=Math.asin(numOne);
	}else if (s=='acos'){
		//Arccos
		document.getElementById('ans').innerText=Math.acos(numOne);
	}else if (s=='atan'){
		//Arctan
		document.getElementById('ans').innerText=Math.atan(numOne);
	}else if (s=='log'){
		//Logistic
		document.getElementById('ans').innerText=Math.log(numOne);
	}else if (s=='bin'){
		//Binary
		document.getElementById('ans').innerText=numOne.toString(2);
	}else if (s=='abs'){
		//Absolute value
		document.getElementById('ans').innerText=Math.abs(numOne);
	}
}
//Pi
function Pi(){
	document.getElementById('piAns').innerText='1 Pi ≈ '+Math.PI.toString();
}
//Radians
function Rad(){
	document.getElementById('radAns').innerText='1 Radian ≈ '+57.2958+' Degrees(Deg)';
}
//Degrees
function Deg(){
	document.getElementById('degAns').innerText='1 Degree ≈ '+0.0174533+' Radians(Rad)';
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
		Ask()
	}
}
console.log(login());
//Check Local Storage
function login(){
	//Get data
	var username=localStorage.getItem('username');
	var UserPassword=localStorage.getItem('password');
	if (username==null && UserPassword==null){
		//User has not opened the page before
		//Name
		var name=prompt('Please enter your name', '');
		if (name==null || name==''){
			var name='[None]';
		}
		localStorage.setItem('name', name);
		//Username
		var username=prompt('Please choose a username', '');
		if (username==null || username==''){
			var username='';
		}
		localStorage.setItem('username', username);
		//Password
		var pass = prompt('Please choose a password', '');
		if (pass==null || pass==''){
			var pass='';
		}
		localStorage.setItem('password', pass);
		alert('This page uses some local storage, if you want to clear or reset it, scroll down to the end of the page and click "Clear Data"');
	}else{
		//User opened this page already
		var usernameQ=prompt('Please enter your username', '');
		var passwordQ=prompt('Please enter your password', '');
		if (usernameQ==username && passwordQ==UserPassword){
			//Get name
			var name=localStorage.getItem('name');
			//Greeting
			alert('Welcome back '+name+'!');
		}else{
			alert('The used login info was not valid!');
			var resetInfo=confirm('Do you want to reset your login info?');
			if (resetInfo){
				localStorage.clear();
				alert('Please choose another username and password you will remember');
				login();
			}else{
				location='about:blank';
			}
		}
	}
}
function randomStr(){
	document.getElementById('ranStr').innerText=Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
//Clear local storage
function clearLS(){
	localStorage.clear();
	login();
}
function ReqInfo(){
	var username = localStorage.getItem('username');
	var UserPassword = localStorage.getItem('password');
	alert('Your username is: '+username);
	alert('Your password is: '+UserPassword);
}
function ShowStats(){
	var lang = window.navigator.language;
	var syst = window.navigator.platform;
	alert(' Stats: \n Language: '+lang+' \n Platform: '+syst+' \n Cookies enabled: '+window.navigator.cookieEnabled+' \n Online: '+window.navigator.onLine+' \n Vendor: '+window.navigator.vendor);
}
