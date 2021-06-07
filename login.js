function login(){
  var uname = document.getElementById('username').value;
  var pass = document.getElementById('password').value;

  if(uname == "uname" && pass== "123"){
    location.assign("file:///C:/Users/Admin/Desktop/practice/login/page.html");
  }else{
    window.alert("Login Failed");
  }
}
