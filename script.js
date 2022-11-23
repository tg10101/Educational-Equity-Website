
var yourName = 0;
var yourEmail = 0;
var yourMessage = 0;

var result = document.getElementById("result");

var restart = document.getElementById("reset");

var infoCount = 0; 
var submitForm = document.getElementById("submit form");

submitForm.addEventListener(name);
submitForm.addEventListener(email);
submitForm.addEventListener(message);

reset.addEventListener("click", resetButton);

function name() {
  yourName += 1;
  infoCount += 1; 

  console.log("infoCount = " + infoCount + " yourName = " + yourName);

  if (infoCount == 3) {
    console.log("Thank you for reaching out to us! We will be in touch soon.")
    } updateResult();
}

function email() {
  yourEmail += 1;
  infoCount += 1; 

  console.log("infoCount = " + infoCount + " yourEmail = " + yourEmail);

  if (infoCount == 3) {
    console.log("Thank you for reaching out to us! We will be in touch soon.")
    } updateResult();
}

function message() {
  yourMessage += 1;
  infoCount += 1; 

  console.log("infoCount = " + infoCount + " yourMessage = " + yourMessage);

  if (infoCount == 3) {
    console.log("Thank you for reaching out to us! We will be in touch soon.")
    } updateResult();
}

function restartButton() {
  result.innerHTML = "Please return to our Home and Resource pages to read more about Educational Equity.";
  yourName = 0;
  yourEmail = 0;
  yourMessage = 0;
  console.log("infoCount = " + infoCount + " yourName = " + yourName + " yourEmail = " + yourEmail + " yourMessage = " + yourMessage);
}


<script type="text/javascript">

function showMessage = (input) => {
    // get the form-field element
    function form = input.parentElement;

    // remove the error class
    form.classList.remove('error');
    form.classList.add('success');

    // hide the error message
    function error = form.querySelector('small');
    error.textContent = '';
}

function checkTheName = () => {

    let valid = false;
    function min = 3,
        max = 25;
    function name = nameEl.value.trim();

    if (!isRequired(name)) {
        showError(nameEl, 'Name cannot be blank.');
    } else {
        showMessage(nameEl);
        valid = true;
    }
    return valid;
}

function checkTheEmail = () => {
    let valid = false;
    function email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'The email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'The email entered is not valid.')
    } else {
        showMessage(emailEl);
        valid = true;
    }
    return valid;
}

form.addEventListener('submit', function (check) {
    // prevent the form from submitting
    check.preventDefault();

    // validate forms
    let isTheNameValid = checkTheName(),
        isTheEmailValid = checkTheEmail();  

    let isTheFormValid = isTheNameValid &&
        isTheEmailValid;

    // submit to the server if the form is valid
    if (isTheFormValid) {

    }
});









