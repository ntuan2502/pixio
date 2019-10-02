window.onload = () => {
    // Set the date we're counting down to
    var countDownDate = new Date("Nov 1, 2019 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();
        
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('cd-day').innerHTML = days >= 10 ? days : '0' + days;
        document.getElementById('cd-hour').innerHTML = hours >= 10 ? hours : '0' + hours;
        document.getElementById('cd-minute').innerHTML = minutes >= 10 ? minutes : '0' + minutes;
        document.getElementById('cd-second').innerHTML = seconds >= 10 ? seconds : '0' + seconds;
    }, 1000);
}