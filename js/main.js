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

window.addEventListener('#scroll', function() {
    const navbar2 = document.querySelector('#scroll');
    if (window.pageYOffset > 50) {
        navbar2.classList.add('sticky');
    } else {
        navbar2.classList.remove('sticky');
    }
});

window.onload = function() {
    function LargeFormat(){
        let currentDate = new Date();
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

        return currentDate.toLocaleDateString('it-IT', options);
    }

    function SmallFormat(){
        let currentDate = new Date();
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();

        if(day < 10) day = '0' + day;
        if(month < 10) month = '0' + month;

        return day + '/' + month + '/' + year;
    }

    document.getElementById('spanLarge').textContent = LargeFormat();
    document.getElementById('spanSmall').textContent = SmallFormat();
}