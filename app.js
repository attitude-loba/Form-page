const form = document.getElementById ("form");
const username = document.getElementById ("username");
const email = document.getElementById ("email");
const password = document.getElementById ("password");
const password2 = document.getElementById ("password2");
const captcha = document.getElementById ("captcha");


const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('password2')








form.addEventListener('submit', (e)  => {
    e.preventDefault()
    // checking the input field
    checkInputs()
})

function checkInputs() {
  const usernameVal = username.value.trim()
  const emailVal = email.value.trim ()
  const passwordVal = password.value.trim()
  const passwordVal2 = password2.value.trim()
  const captchaVal = captcha.value.trim()


  // username 
  if (usernameVal === "") {
    setError(username, "Username can not be empty");
  } else if (usernameVal.length < 5) {
    setError(username, "The minimum username length is 5")
  } else {
    setSuccess(username)
  }
 // email
 if (emailVal === "") {
    setError(email, "Email can not be empty");
 } else if (!emailVal.includes ("@") ){
    setError(email, "Enter a valid email address")
 } else{
    setSuccess(email);
 }

 // password 
 if (passwordVal ==="") {
    setError(password, "Password can not be empty")
 } else if (!isValidPassword(passwordVal)) {
    setError(password, "Minimum lenght is 8, must contain uppercase, lowercase and a special charater");
 } else {
    setSuccess(password);
 }



  //  confrim password
  if (password != confirmPassword) {
    alert ("password do not match"); return false
  } else {
    return true
  }




 // captcha
  if (captchaVal ===""){
    setError(captcha, 'Confrim you are Human!')
 } 


 }




  





  //  function to validate confrim password 
   function validatePassword () {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("password2").value
   }

 




//  function for validating password 

 function isValidPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}




// captcha function 
 captcha.addEventListener("input", (e) =>{
 img = document.querySelector("img");
 const text = e.target.value;
 const blurValue = 20 - text.length; 
 img.style.filter = `blur(${blurValue}px)`;
 if (blurValue <= 0) {
     setSuccess(captcha);
 } else {
    setError(captcha, "The text is not long enough")
 }

})



// error function
  function setError(input, message){
  const formControl = input.parentElement;
  const small = formControl.querySelector("small")
  formControl.className = "form-control error";
  small.innerText = message;
}

// success function
  function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success"

}


 // toggling showing btn 
 //   
  const showBtn = document.querySelector(".show-btn")
  const showBtn2 = document.querySelector(".show-btn2")

  showBtn.addEventListener("click", () => {
    const inputType = password.getAttribute("type");
    console.log(inputType);
    if (inputType === "password") {
        password.setAttribute("type", "text");
        showBtn.value="Hide";
    }else {
        password.setAttribute("type", "password")
        showBtn.value = "show";
    }
 })
 showBtn2.addEventListener("click", () => {
    const inputType = password.getAttribute("type");
    console.log(inputType);
    if (inputType === "password") {
        password.setAttribute("type", "text");
        showBtn2.value="Hide";
    }else {
        password.setAttribute("type", "password")
        showBtn2.value = "show";
    }
 })

 
