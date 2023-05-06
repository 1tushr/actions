

function saveSignup(){
     let firstName,lastName,email,password,confirmPassword;
     firstName=document.getElementById('first-name').value;
     lastName=document.getElementById('last-name').value;
     email=document.getElementById('email').value;
     password=document.getElementById('password').value;
     confirmPassword=document.getElementById('confirm-password').value;

     // Check if email already exists in local storage
     const existingUser = localStorage.getItem(email);
     if (existingUser) {
         // If email exists, alert user and ask them to update their info
         if (confirm('This email already exists. Do you want to update your information?')) {
             localStorage.setItem('firstName', firstName);
             localStorage.setItem('lastName', lastName);
             localStorage.setItem('email', email);
             localStorage.setItem('password', password);
             localStorage.setItem('confirmPassword', confirmPassword);
             alert('Information updated successfully!');
         }
     } else {
         // If email does not exist, save the new information to local storage
         localStorage.setItem(email, JSON.stringify({
             firstName,
             lastName,
             password,
             confirmPassword
         }));
         alert('Sign up successful!');
         window.location.href="login.html";
     }
}

btn.addEventListener('click', saveSignup);













