function validateForm() {
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email-field"].value;
  var password = document.forms["myForm"]["password"].value;
  var phone = document.forms["myForm"]["phone"].value;
  var message = document.forms["myForm"]["message"].value;
  if (name == "" || email == ""|| password == ""|| phone == ""|| message == "") {
    alert("HARAP ISI SEMUA FORM");
    return false;
  }
}