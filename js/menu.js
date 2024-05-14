document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#openIcon').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('myMenu').classList.add('open');
    });

    document.querySelector('#openIcon2').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('myMenu').classList.add('open');
    });

    document.querySelector('#closeIcon').addEventListener('click', function() {
        document.getElementById('myMenu').classList.remove('open');
    });
});