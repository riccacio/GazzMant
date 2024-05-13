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