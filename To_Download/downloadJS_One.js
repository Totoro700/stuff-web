/*

To do make a simple calculator, we add a button like this:
	<button onclick='math()'>Calculate</button>

Now, create two inputs, one with a id numOne, and another with a id numTwo. Also set it to number:
	<input id='numOne' type='number'>
	<input id='numTwo' type='number'>

Make a select with the options you want, if you want to remove some operations, just go below and cut out the ones you don't want. I made a example below(It only adds ans subtracts):

Html:

	<select>
		<option value='p'>Addition<option>
		<option value='s'>Subtraction</option>
	</select>

JS:

	function math(){
	var numOne=parseInt(document.getElementById('numOne').value);
	var numTwo=parseInt(document.getElementById('numTwo').value);
	var s=document.getElementById('select').value;
	if (isNaN(numOne) || isNaN(numTwo)){console.error('Input is NaN');}
	if(s=='p'){
		//Addition
		document.getElementById('ans').innerText=numOne+numTwo;
	}else if(s=='s'){
		document.getElementById('ans').innerText=numOne-numTwo;
	}


There you go!
*/
function math(){
	var numOne=parseInt(document.getElementById('numOne').value);
	var numTwo=parseInt(document.getElementById('numTwo').value);
	var s=document.getElementById('select').value;
	if(s=='p'){
		document.getElementById('ans').innerText=numOne+numTwo;
	}else if(s=='s'){
		document.getElementById('ans').innerText=numOne-numTwo;
	}else if(s=='m'){
		document.getElementById('ans').innerText=numOne*numTwo;
	}else if(s=='d'){
		document.getElementById('ans').innerText=numOne/numTwo;
	}else if(s=='pow'){
		document.getElementById('ans').innerText=Math.pow(numOne, numTwo);
	}else if(s=='mod'){
		document.getElementById('ans').innerText=numOne%numTwo;
	}else if(s=='exp'){
		document.getElementById('ans').innerText=numOne**numTwo;
	}else if(s=='sqrt'){
		document.getElementById('ans').innerText=Math.sqrt(numOne);
	}/* Some Trigonometry */else if(s=='sin'){
		document.getElementById('ans').innerText=Math.sin(numOne);
	}else if(s=='cos'){
		document.getElementById('ans').innerText=Math.cos(numOne);
	}else if(s=='tan'){
		document.getElementById('ans').innerText=Math.tan(numOne);
	}else if(s=='asin'){
		document.getElementById('ans').innerText=Math.asin(numOne);
	}else if(s=='acos'){
		document.getElementById('ans').innerText=Math.acos(numOne);
	}else if(s=='atan'){
		document.getElementById('ans').innerText=Math.atan(numOne);
	}else if(s=='log'){
		document.getElementById('ans').innerText=Math.log(numOne);
	}else if(s=='bin'){
		document.getElementById('ans').innerText=numOne.toString(2);
	}else if(s=='abs'){
		document.getElementById('ans').innerText=Math.abs(numOne);
	}else if(s=='rnd'){
		document.getElementById('ans').innerText=Math.round(numOne);
	}else if(s=='flr'){
		document.getElementById('ans').innerText=Math.floor(numOne);
	}else if(s=='ceil'){
		document.getElementById('ans').innerText=Math.ceil(numOne);
	}/*You probably won't need these ↓*/else if(s=='e'){
		document.getElementById('ans').innerText=Math.E;
	}else if(s=='sinh'){
		document.getElementById('ans').innerText=Math.sinh(numOne);
	}else if(s=='cosh'){
		document.getElementById('ans').innerText=Math.cosh(numOne);
	}else if(s=='tanh'){
		document.getElementById('ans').innerText=Math.tanh(numOne);
	}else if(s=='asinh'){
		document.getElementById('ans').innerText=Math.asinh(numOne);
	}else if(s=='acosh'){
		document.getElementById('ans').innerText=Math.acosh(numOne);
	}else if(s=='atanh'){
		document.getElementById('ans').innerText=Math.atanh(numOne);
	}else if(s=='cbrt'){
		document.getElementById('ans').innerText=Math.cbrt(numOne);
	}else if(s=='ea'){
		document.getElementById('ans').innerText=Math.E+numOne;
	}else if(s=='es'){
		document.getElementById('ans').innerText=numOne-Math.E;
	}else if(s=='em'){
		document.getElementById('ans').innerText=Math.E*numOne;
	}else if(s=='ed'){
		document.getElementById('ans').innerText=numOne/Math.E;
	}else if(s=='nan'){
		document.getElementById('ans').innerText=isNaN(numOne);
	}
}