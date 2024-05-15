document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#openIcon').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('myMenu').classList.add('open');
        document.getElementById('overlay').style.display = 'block';
        document.body.classList.add('no-scroll');
    });

    document.querySelector('#openIcon2').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('myMenu').classList.add('open');
        document.body.classList.add('no-scroll');
    });

    document.querySelector('#closeIcon').addEventListener('click', function() {
        document.getElementById('myMenu').classList.remove('open');
        document.body.classList.remove('no-scroll');
        document.getElementById('overlay').style.display = 'none';
    });
});