window.onload = function() {

    function LargeFormat(){
        var currentDate = new Date();
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

        return currentDate.toLocaleDateString('it-IT', options);;
    }

    function SmallFormat(){
        var currentDate = new Date();
        var day = currentDate.getDate();
        var month = currentDate.getMonth() + 1;
        var year = currentDate.getFullYear();

        if(day < 10) day = '0' + day;
        if(month < 10) month = '0' + month;

        return day + '/' + month + '/' + year;
    }

    document.getElementById('spanLarge').textContent = LargeFormat();
    document.getElementById('spanSmall').textContent = SmallFormat();
}