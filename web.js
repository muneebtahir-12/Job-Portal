document.getElementById('read-more').addEventListener('click', function() {
    document.querySelector('.small-text').style.display = 'none';
    document.querySelector('main p').style.display = 'block';
});
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Application submitted successfully!');
    window.location.href = "index.html";
});