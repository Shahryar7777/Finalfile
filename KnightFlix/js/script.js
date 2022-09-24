const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");
      forget = document.querySelector(".forget-link");
      back = document.querySelector(".back-link");



    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });
    forget.addEventListener("click", ( )=>{
        container.classList.add("active1");
    });
    back.addEventListener("click", ( )=>{
        container.classList.remove("active1","active");
    });









    // Signup Validaltion
    
var usernameEl = document.getElementById('username');
var emailEl = document.getElementById('email') ;
var passwordEl = document.getElementById('password');
var confirmPasswordEl = document.getElementById('confirm-password');

var form = document.getElementById('signup');

var showError = function(input,message){
    var formField = input.parentElement;

    formField.classList.remove('success');
    formField.classList.add('error');

    var error = formField.querySelector('small');
    error.textContent = message;

} ;

var showSuccess = function(input){
    var formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add('success');

    var error = formField.querySelector('small');
    error.textContent = ' ';
} ;

var isRequired =function(value){
    if(value =='')
    return false ;

    else
    return true ;
} ;


var isBetween = function(lenght , min , max){
    if(lenght < min || lenght > max)
        return false;
    else
        return true;
} ;

var isEmailValid = function(email){
    var re = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
    return re.test(email);
    };

    var isPasswordSecure = function(password) {

        var re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        
        return re.test(password);
        };

function signupCheck(){
    var isUsernameValid = checkUsername(),
    isEmailValid = checkEmail(),
    isPasswordValid = checkPassword(),
    isConfirmPasswordValid = checkConfirmPassword();
var isFormValid = isUsernameValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid;
    if(isFormValid){
        location.href="Home-page.html";
    }
    var usernameEl = document.getElementById('username').value;
    var emailEl = document.getElementById('email').value;

    localStorage.setItem("textvalue2",usernameEl);
    localStorage.setItem("textvalue3",emailEl);

    return false;
}
var checkUsername = () => {
    var valid = false;

    var min = 8, max = 20;

    var username = usernameEl.value.trim();

    if (!isRequired(username)) {
        showError(usernameEl, 'Username cannot be blank .');
    } else if (!isBetween(username.length, min, max)) {
        showError(usernameEl, 'Username Must be between 8 and 20 characters');
    } else {
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
} ;

var checkEmail = function() {
    var valid = false;

     var email = emailEl.value.trim();

     if (!isRequired (email)){
         showError(emailEl, 'Email cannot be blank .') ;
     } else if (!isEmailValid(email)){
         showError(emailEl, 'Email is not valid ')     
     } else{
         showSuccess(emailEl) ;
         valid = true ;
     }
     return valid ;
} ;

var checkPassword = function() {
    var valid = false;

     var password = passwordEl.value.trim();

     if (!isRequired (password)){
         showError(passwordEl, 'Password cannot be blank .') ;
     } else if (!isPasswordSecure(password)){
         showError(passwordEl, 'Password must be 8 characters or more.') ;   
     } else{
         showSuccess(passwordEl) ;
         valid = true ;
     }
     return valid ;
} ;


var checkConfirmPassword = function() {
    var valid = false;

     var confirmPassword  = confirmPasswordEl.value.trim();
     var password = passwordEl.value.trim();

     if (!isRequired (confirmPassword)){
         showError(confirmPasswordEl, 'Please enter the password again .') ;
     } else if (password !== confirmPassword){
         showError(confirmPasswordEl, 'Password does not match') ;   
     } else{
         showSuccess(confirmPasswordEl) ;
         valid = true ;
     }
     return valid ;
} ;


    form.addEventListener('submit', function (e) {
        // prevent the form from submitting
        e.preventDefault();
   
        
    });
    
    
    const debounce = (fn, delay = 500) => {
        let timeoutId;
        return (...args) => {
            // cancel the previous timer
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            // setup a new timer
            timeoutId = setTimeout(() => {
                fn.apply(null, args)
            }, delay);
        };
    };
    
    
    form.addEventListener('input', debounce(function (e) {
        switch (e.target.id) {
            case 'username':
                checkUsername();
                break;
            case 'email':
                checkEmail();
                break;
            case 'password':
                checkPassword();
                break;
            case 'confirm-password':
                checkConfirmPassword();
                break;
        }
    }));









        // Login Validaltion
        var usernameE2 = document.getElementById('username1');
        var emailE2 = document.getElementById('email1') ;
        var passwordE2 = document.getElementById('password1');
        
        var form2 = document.getElementById('login');
        
        var showError2 = function(input,message){
            var formField = input.parentElement;
        
            formField.classList.remove('success');
            formField.classList.add('error');
        
            var error = formField.querySelector('small');
            error.textContent = message;
        
        } ;
        
        var showSuccess2 = function(input){
            var formField = input.parentElement;
        
            formField.classList.remove('error');
            formField.classList.add('success');
        
            var error = formField.querySelector('small');
            error.textContent = ' ';
        } ;
        
        var isRequired2=function(value){
            if(value =='')
            return false ;
        
            else
            return true ;
        } ;
        
        
        var isBetween2 = function(lenght , min , max){
            if(lenght < min || lenght > max)
                return false;
            else
                return true;
        } ;
        
        var isEmailValid2 = function(email){
            var re = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
            return re.test(email);
            };
        
            var isPasswordSecure = function(password) {
        
                var re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
                
                return re.test(password);
                };
        function loginCheck(){

            var username = document.getElementById('username1').value;
            var email = document.getElementById('email1').value;
            var pass = document.getElementById('password1').value;
            if(username == "Sherry777" && email == "Sherry@gmail.com" && pass == "@Sherry777"){
                location.href="Home-page.html";
            }
            var usernameEl = document.getElementById('username1').value;
            var emailEl = document.getElementById('email1').value;
        
            localStorage.setItem("textvalue2",usernameEl);
            localStorage.setItem("textvalue3",emailEl);
        
            return false;
    

        }
        
        var checkUsername2 = () => {
            var username = document.getElementById('username1').value;

            var valid = false;
        
            var min = 8, max = 20;
        
            var username = usernameE2.value.trim();
        
            if (!isRequired(username)) {
                showError(usernameE2, 'Username cannot be blank .');
            } else if (!isBetween(username.length, min, max)) {
                showError(usernameE2, 'Username Must be between 8 and 20 characters');
            } else if (username == "Sherry777"){
                showSuccess(usernameE2);
                valid = true;
            }else{
                showError(usernameE2, 'UserName is not valid ') }
            return valid;
        } ;
        
        var checkEmail2 = function() {
            var email = document.getElementById('email1').value;

            var valid = false;
        
             var email = emailE2.value.trim();
        
             if (!isRequired (email)){
                 showError(emailE2, 'Email cannot be blank .') ;
             }else if(email == "Sherry@gmail.com"){
                showSuccess(emailE2) ;
                valid = true ;
            }else{
                 showError(emailE2, 'Email is not valid ')     
             } 
             return valid ;
        } ;
        
        var checkPassword2 = function() {
            var pass = document.getElementById('password1').value;
            var min = 8, max = 20;

            var valid = false;
        
             var password = passwordE2.value.trim();
        
             if (!isRequired (password)){
                 showError(passwordE2, 'Password cannot be blank .') ;
             } else if (!isBetween(passwordE2.length, min, max)){
                 showError(passwordE2, 'Password must be 8 characters or more.') ;   
             } else if(pass == "@Sherry777"){
                showSuccess(passwordE2) ;
                valid = true ;
            }else{
                showError(passwordE2, 'Password is not valid ')     
            } 
             return valid ;
        } ;
        
        
        
        
        
            form2.addEventListener('submit', function (e) {
                // prevent the form from submitting
                e.preventDefault();
                // validate forms
                var isUsernameValid = checkUsername(),
                    isEmailValid = checkEmail(),
                    isPasswordValid = checkPassword(),
                    isConfirmPasswordValid = checkConfirmPassword();
                var isFormValid = isUsernameValid &&
                    isEmailValid &&
                    isPasswordValid &&
                    isConfirmPasswordValid;
                // submit to the server if the form is valid
                if (isFormValid) {
                    alert('You have successfully submitted the form!');
                }
            });
            
            
            const debounce2 = (fn, delay = 500) => {
                let timeoutId;
                return (...args) => {
                    // cancel the previous timer
                    if (timeoutId) {
                        clearTimeout(timeoutId);
                    }
                    // setup a new timer
                    timeoutId = setTimeout(() => {
                        fn.apply(null, args)
                    }, delay);
                };
            };
            
            
            form2.addEventListener('input', debounce2(function (e) {
                switch (e.target.id) {
                    case 'username1':
                        checkUsername2();
                        break;
                    case 'email1':
                        checkEmail2();
                        break;
                    case 'password1':
                        checkPassword2();
                        break;
                  
                }
            }));
        