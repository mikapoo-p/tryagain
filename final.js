//THIS FUNCTION USED FOR FILLED ERROR
function filledError() {
    var firestname = document.forms["joinin_form"]["firstName"].value;//name variables
    var lastname = document.forms["joinin_form"]["lastName"].value;
    var email = document.forms["joinin_form"]["email"].value;
    var password = document.forms["joinin_form"]["password"].value;
    if (firestname == "") {
      alert("First Name must be filled out");//give a alert to users if they not fill in this form
      return false;
    }
    else if (lastname == "") {
        alert("Last Name must be filled out");
      return false;
    }
    else if (email == "") {
        alert("Email must be filled out");
      return false;
    }
    else if (password == "") {
        alert("Password must be filled out");
      return false;
    }
  }




