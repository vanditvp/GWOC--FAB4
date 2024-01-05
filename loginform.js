function validateLogin() {
    var username = document.querySelector('input[type="text"]').value;
    var password = document.querySelector('input[type="password"]').value;
    if (username === "ankit" && password === "ankittikna123") {
      window.location.href = "sellergallery.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
}