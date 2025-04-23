function showSection(idname){
  const allObject = document.querySelectorAll(".main-content > div");
  allObject.forEach((object) => {
    object.classList.add("hidden");
  })
  const object = document.getElementById(idname +"Section");
  object.style.transition = "all 0.5s ease";
  object.classList.remove("hidden");

};



function loginPage(){
  window.location.href = "login.html";
}
function homepage(){
  window.location.href = "index.html";
}

function submitForm() {
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    

    if (username === 'admin' && password === 'password123') {
        window.location.href = 'index.html';
    } else {
        document.getElementById('errorMessage').style.display = 'block';
    }
  });
}





