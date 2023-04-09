document.querySelector('.button').onclick = function(){
    if(document.querySelector(".day").value == 0 || document.querySelector(".month").value == 0 || document.querySelector(".year").value == 0){
        return false;
    }
    
    let day = document.querySelector('.day').value;
    let month = document.querySelector('.month').value;
    let year = document.querySelector('.year').value;

    let tomTomsIrZiņkārīgsSoManVajagaViņamParādītJoViņšPatsNemākIeslēgtVSCodeUnPatsIztestētViņamVajagaLiktManToDarīt = new Date(Date.now());

    tomTomsIrZiņkārīgsSoManVajagaViņamParādītJoViņšPatsNemākIeslēgtVSCodeUnPatsIztestētViņamVajagaLiktManToDarīt = new Date(tomTomsIrZiņkārīgsSoManVajagaViņamParādītJoViņšPatsNemākIeslēgtVSCodeUnPatsIztestētViņamVajagaLiktManToDarīt - (day * 24 * 60 * 60 * 1000) - (month))

    console.log(tomTomsIrZiņkārīgsSoManVajagaViņamParādītJoViņšPatsNemākIeslēgtVSCodeUnPatsIztestētViņamVajagaLiktManToDarīt)

    const fullYear = tomTomsIrZiņkārīgsSoManVajagaViņamParādītJoViņšPatsNemākIeslēgtVSCodeUnPatsIztestētViņamVajagaLiktManToDarīt.getFullYear();
    const fullMonths = tomTomsIrZiņkārīgsSoManVajagaViņamParādītJoViņšPatsNemākIeslēgtVSCodeUnPatsIztestētViņamVajagaLiktManToDarīt.getMonth()+1;
    const fullDays = tomTomsIrZiņkārīgsSoManVajagaViņamParādītJoViņšPatsNemākIeslēgtVSCodeUnPatsIztestētViņamVajagaLiktManToDarīt.getDate();

    let returnYear = fullYear - year;
    let returnMonth = fullMonths - month;
    if(returnMonth < 0){
        returnYear --;
        returnMonth = 12 + returnMonth;
    }
    
    let date = new Date();
    date.setFullYear(returnYear)
    date.setMonth(returnMonth-1);
    console.log(date);


    console.log(returnYear + " " + returnMonth + " " + fullDays);
    
    document.querySelector("#digYear").innerHTML = returnYear;
    document.querySelector("#digMonth").innerHTML = returnMonth;
    document.querySelector("#digDay").innerHTML = fullDays;

}
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
