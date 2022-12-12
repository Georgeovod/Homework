let hours = prompt("Please enter number of hours");
const secondsInHours = (hours) => {
    let seconds = hours * 60;
    alert(seconds);
    return seconds;
}
secondsInHours(hours);