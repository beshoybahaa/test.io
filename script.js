var firstname,secondname,email,pass;

function passvalues() {
  firstname = document.getElementById("txt1").value;
  //localStorage.setItem("textvalue1", firstname);

  secondname = document.getElementById("txt2").value;
  //localStorage.setItem("textvalue2", secondname);

  email = document.getElementById("txt3").value;
  //localStorage.setItem("textvalue3", email);

  pass = document.getElementById("txt4").value;
  //localStorage.setItem("textvalue4", pass);


setCookie("firstname", firstname, 120);
setCookie("secondname", secondname, 120);
setCookie("email", email, 120);
setCookie("pass", pass, 120);
var user = getCookie("firstname");
console.log("firstname : " + user);
  return false;
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

