// SignUp

const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', e => {
  e.preventDefault();
  const email = signupForm['emailSignUp'].value;
  const password = signupForm['passwordSignUp'].value;
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    signupForm.reset();
  });
});
