<<<<<<< HEAD
var ok=0;

function check_email()
{
 var email_val=$("#email").val();
 if(email_val=="" || email_val.indexOf("@")==-1 || email_val.indexOf(".")==-1)
 {
  $("#email").css({"border":"1px solid red"});
  $("#email_error").text("Email Must be Valid!");
  $("#email_error").css({"margin-top":"5px"});
 }
 else
 {
  $("#email").css({"border":"1px solid grey"});
  $("#email_error").text("");
  $("#email_error").css({"margin-top":"0px"});
  ok++;
 }
}

function check_pass()
{
 var pass_val=$("#pass").val();
 if(pass_val=="" || pass_val.length<8)
 {
  $("#pass").css({"border":"1px solid red"});
  $("#pass_error").text("Greater Or Equal To 8!");
  $("#pass_error").css({"margin-top":"5px"});
 }
 else
 {
  $("#pass").css({"border":"1px solid grey"});
  $("#pass_error").text("");
  $("#pass_error").css({"margin-top":"0px"});
  ok++;
 }
}

 function check_form()
{
 if(ok==2)
 {
  return true;
 }
 else
 {
  alert("Error! Check All The Fields");
  return false;
 }
}
=======
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
>>>>>>> d21aab4d955d131cb9a55b146c2698c0b15b6493
