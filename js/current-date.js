window.onload = function() {
    var currentDate = new Date();

    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = currentDate.toLocaleDateString('it-IT', options);

    document.getElementById('current-date').textContent = formattedDate;
}