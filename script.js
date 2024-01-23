let dob = document.getElementById('dateofbirth');
let date = document.getElementById('cdate');
let searchButton = document.getElementById('sbutton');
let result = document.getElementById('result');

searchButton.addEventListener('click', function () {
    let year1 = date.valueAsDate.getFullYear();
    let month1 = date.valueAsDate.getMonth() + 1;
    let day1 = date.valueAsDate.getDate();

    let year2 = dob.valueAsDate.getFullYear();
    let month2 = dob.valueAsDate.getMonth() + 1;
    let day2 = dob.valueAsDate.getDate();

    let year = year1 - year2;
    let month;
    if (month1 >= month2) {
        month = month1 - month2;
    } else {
        month = 12 + month1 - month2;
        year--;
    }
    let day;
    if (day1 >= day2) {
        day = day1 - day2;
    } else {
        day = 31 + day1 - day2;
        month--;
    }
    result.innerHTML = (`You are ${year} years, ${month} months, ${day} days old`);
});
