let finalDate = new Date(1685073600*1000)
let countdown = {
    seconds: document.getElementById('seconds'),
    minutes: document.getElementById('minutes'),
    hours: document.getElementById('hours'),
    days: document.getElementById('days'),
};
function countDown() {
    let date = new Date();
    month = date.getMonth()+1;
    if (month==5) {
        dateDifference=(finalDate-date);
        dateDifferenceSeconds = Math.floor((dateDifference / 1000) % 60);
        dateDifferenceMinutes = Math.floor((dateDifference / 1000 / 60) % 60);
        dateDifferenceHours = Math.floor((dateDifference / (1000 * 60 * 60)) % 24);
        dateDifferenceDays = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
        if (dateDifferenceDays == 1) {
            countdown.days.textContent=dateDifferenceDays + " day.";
        }
        else if (dateDifferenceDays != 1) {
            countdown.days.textContent=dateDifferenceDays + " days.";
        }
        countdown.hours.textContent=dateDifferenceHours + " hours.";
        countdown.minutes.textContent=dateDifferenceMinutes + " minutes.";
        countdown.seconds.textContent=dateDifferenceSeconds + " seconds.";
    }
    setTimeout(countDown, 1000);
}

countDown()
