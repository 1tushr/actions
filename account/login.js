
function login() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    // Get the user's information from local storage
    const user = JSON.parse(localStorage.getItem(email));
    
    if (user && user.password === password) {
      alert('Login successful!');

     window.location.href="/f3-project-main/shop/index.html"
      // Redirect to the dashboard or home page
    } else {
      alert('Invalid email or password. Please try again.');
    }
  }
  
  btn.addEventListener('click', login);
  