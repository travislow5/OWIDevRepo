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