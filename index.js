document.querySelector('.offers select').addEventListener('change', function() {
const selectedValue = this.value;
document.querySelectorAll('.front-end').forEach(function(frontEnd) {
    frontEnd.style.display = 'none';
    if (frontEnd.classList.contains(selectedValue)) {
        frontEnd.style.display = 'flex';
     }
    if (selectedValue === 'all') {
         frontEnd.style.display = 'flex';
     }
       });
    });

const signupBtn = document.querySelector('.links button');
const modal = document.getElementById('signup');
const closeBtn = document.querySelector('.close-btn');
signupBtn.addEventListener('click', function() {
  modal.style.display = 'flex';
});
closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});
document.querySelector('.signup-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Sign up successful!');
  modal.style.display = 'none';
});