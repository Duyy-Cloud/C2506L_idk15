const btn = document.getElementById("loginBtn");

    btn.onclick = function() {
      const email = document.getElementById("email").value.trim();
      const pass = document.getElementById("password").value.trim();
      const error = document.getElementById("error");

      if (email === "admin@example.com" && pass === "123456") {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "admin.html";
      } else {
        error.textContent = "Invalid email or password!";
      }
    }

    
    if (localStorage.getItem("loggedIn") === "true") {
      window.location.href = "admin.html";
    }