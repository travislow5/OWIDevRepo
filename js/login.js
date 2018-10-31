 function validate() {
     var email = document.getElementById("Email").value;
     var password = document.getElementById("Password").value;
     if (email == null || email == "") {
         alert("Please enter your email.");
         return false;
     } else {
         if (password == null || password == "") {
             alert("Please enter the password.");
             return false;
         }else{
                  alert('Login successful');
         }
     }
 }
