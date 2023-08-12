document.addEventListener("DOMContentLoaded", function() {
    // Get the target element where the typing effect will be displayed
    var typedOutput = document.getElementById("typed-output");
  
    // Create a new Typed.js instance
    var typed = new Typed(typedOutput, {
      strings: ["I hope you like it", "Have a wonderful day!", "I LOVE YOU! 💜"],
      typeSpeed: 50,        // Typing speed in milliseconds
      backSpeed: 25,        // Backspacing speed in milliseconds
      backDelay: 1500,      // Time to wait before starting to backspace
      startDelay: 500,      // Time to wait before typing starts
      loop: true,           // Loop the animation indefinitely
      showCursor: true,     // Show blinking cursor
      cursorChar: "|",      // Custom cursor character
    });
  });
  


  document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.getElementById("login-form");
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    var loginMessage = document.getElementById("login-message");
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
      
      var username = usernameInput.value;
      var password = passwordInput.value;
      
      // Call a function to perform authentication
      authenticateUser(username, password);
    });
  
    function authenticateUser(username, password) {
      // Replace this with your actual authentication logic
      if (username === "Kristine0813@surg.com" && password === "SGaug132000") {
        // Redirect to another HTML file on successful login
        alert("Successfully login 💜");
        window.location.href = "products.html";
      } else {
        alert("Login failed. Please check your SG Card.");
        // loginMessage.style.color = "red";
      }
    }
  });
  
  