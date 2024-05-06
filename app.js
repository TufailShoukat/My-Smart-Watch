
var minutes = 0
var second = 0
var miliSecond = 0
var Interval;

function start() {
    document.getElementById("dis").disabled = true


    var getMinutes = document.getElementById("minutes")
    var getSecond = document.getElementById("seconds")
    var getMiliSecond = document.getElementById("miliSeconds")
    Interval = setInterval(function () {
        miliSecond++
        getMiliSecond.innerHTML = miliSecond
        if (miliSecond >= 100) {
            second++
            getSecond.innerHTML = second
            miliSecond = 0
        }



        else if (second >= 60) {
            minutes++
            getMinutes.innerHTML = minutes
            second = 0


        }




    }, 10)

}
function stop() {


    clearInterval(Interval);
    document.getElementById("dis").disabled = false

}

function reset() {
    clearInterval(Interval);
    minutes = 0;
    second = 0;
    miliSecond = 0;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = second;
    document.getElementById("miliSeconds").innerHTML = miliSecond;
}









































