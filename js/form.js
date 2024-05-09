
var nameError = document.getElementById('name_error');
var emailError = document.getElementById('email_error');
var phnError = document.getElementById('phn_error');
var msgError = document.getElementById('msg_error');

// form validation
function validateName(){
  var name = document.getElementById('name').value;

  if(name.length == 0) {
    nameError.innerHTML = '*Name is required';
    return false;
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = 'Write Full Name';
    return false;
  }
  nameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}

function validatePhn(){
  var phone = document.getElementById('phone').value;

  if(phone.length==0){
    phnError.innerHTML = '*Phone no is required';
    return false;
  }

  if(phone.length !== 10){
    phnError.innerHTML = '*Phone no should be 10 digits';
    return false;
  }

  if(!phone.match(/^[0-9]{10}$/)){
    phnError.innerHTML = 'Only digits please';
    return false;
  }

  phnError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}

function validateEmail(){
  var email = document.getElementById('email').value;

  if(email.length == 0){
    emailError.innerHTML = 'Email is required';
    return false;
  }

  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML = 'Email Invalid';
    return false;
  }

  emailError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}

function validateMsg(){
  var message = document.getElementById('message').value;
  var required = 30;
  var left = required - message.length;

  if(left > 0){
    msgError.innerHTML = left + 'more characters required';
    return false;
  }

  msgError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
}
// form validation ends

// form data to gmail
function Send(){
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var message = document.getElementById('message').value;

  var body = "name: " + name + "<br/> email: " + email + "<br/> phone: " + phone + "<br/> message:" + message;
  console.log(body);
  

  Email.send({
    SecureToken : "d85bc007-643b-4b17-9187-e1979886d628",
    Host : "smtp.elasticemail.com",
    Username : "shyamshaji42@gmail.com",
    Password : "D4849FABA41E7A8E3623FFA1CBB4E64FB389",
    To : 'shyamshaji42@gmail.com',
    From : "shyamshaji42@gmail.com",
    Subject : "This mail form client",
    Body : body
}).then(
  message => {
    if(message=='OK') {
      swal("Successfull", "You Data Successfull Received", "success");
    }
    else {
      swal("Something Wrong", "You Data not Received", "error");
    }
  }
);

}
// form data to gmail ends