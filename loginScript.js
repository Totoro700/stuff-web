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
		var username=prompt('Please choose a username you can remember', '');
		if (username==null || username==''){
			var username='';
		}
		localStorage.setItem('username', username);
		//Password
		var pass = prompt('Please choose a password you can remember', '');
		if (pass==null || pass==''){
			var pass='';
		}
		localStorage.setItem('password', pass);
		alert('This page uses some local storage, if you want to clear or reset it, scroll down to the end of the page and click "Clear Data"');
		document.cookie='username=john doe';
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
				login();
			}
		}
	}
}