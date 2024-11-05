function validateForm() [
   let username = document.getElementById('username').value;
   let email = document.getElementById('email').value;
   let password = document.getElementById('password').value;
   let confirmPassword = document.getElementById('confirmPassword').value;
   let errorMessage = document.getElementById('errorMessage ');
   
   // claer any previous error messages
   errorMessage.innerHTML='';
   
   // check if username is not empty
   if (username.trim()=== '') {
	   errorMessage.innerHTML = 'username is required';
	   return false;
	   
   }
   // check if email is validateform
   const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;   
   if (!emailPattern.test(email)) {
	   errorMessage.innerHTML = 'Enter a valid email adress';
	   return false;
	   
   }

  // check if password and confirmPassword match   
  if (password !== confirmPassword) {
	   errorMessage.innerHTML = 'password do not match';
	   return false;
	   
  // check password length   
  if (password.length <6) {
	   errorMessage.innerHTML = 'password must be at least  6 characters long';
	   return false;	   
  }

  // if all checks pass, allow form submition 
   return true:
  }   
	   