document.addEventListener('DOMContentLoaded', function () {
   const form = document.getElementById('registerForm');

   form.addEventListener('submit', function (event) {
      event.preventDefault();

      if (validateForm()) {
         ThanksMsg();
         form.reset();

         setTimeout(function () {
            window.location.href = "./Home.html";
         }, 3000);
      }
   });

   function validateForm() {
      const fullname = document.getElementById('fullname').value.trim();
      const age = document.getElementById('age').value.trim();
      const mobile = document.getElementById('mobile').value.trim();
      const email = document.getElementById('mail').value.trim();
      const symptoms = document.getElementById('symptoms').value.trim();

      let isValid = true;

      if (fullname === '') {
         isValid = false;
         alert('Please enter your full name.');
      }

      if (age === '') {
         isValid = false;
         alert('Please enter your age.');
      } else if (isNaN(age) || parseInt(age) <= 0) {
         isValid = false;
         alert('Please enter a valid age.');
      }

      if (mobile === '') {
         isValid = false;
         alert('Please enter your mobile number.');
      } else if (isNaN(mobile) || mobile.length !== 10) {
         isValid = false;
         alert('Please enter a valid 10-digit mobile number.');
      }

      if (email !== '' && !isValidEmail(email)) {
         isValid = false;
         alert('Please enter a valid email address.');
      }

      if (symptoms == '' || symptoms === undefined) {
         isValid = false;
         alert('Please enter some symptoms.');
      }
      return isValid;
   }

   function isValidEmail(email) {
      var atPos = email.indexOf("@");
      var dotPos = email.lastIndexOf(".");

      if (atPos < 1 || dotPos < atPos + 2 || dotPos + 2 >= email.length) {
         return false;
      }
      return true;
   }
   function ThanksMsg() {
      setTimeout(function () {
         alert('Thank you for registering!');
      }, 1000);
   }
});
