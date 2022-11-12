function DigitalClock()
{
    let dt=new Date();

    let Hours=dt.getHours()
    let Min=dt.getMinutes()
    let Sec=dt.getSeconds()

    document.getElementById('hours').innerText=Hours;
    document.getElementById('min').innerText=Min;
    document.getElementById('sec').innerText=Sec;

    let date=dt.getDate()
    let mnth=dt.getMonth()+1
    let year=dt.getFullYear()

    document.getElementById('date').innerText=date;
    document.getElementById('month').innerText="0"+mnth;
    document.getElementById('year').innerText=year;

    let day=dt.getDay()

    switch(day)
    {
        case 1:day='Monday' 
        break;
        case 2:day='Tuesday'
        break;
        case 3:day='Wednesday'
        break;
        case 4:day='Thursday'
        break;
        case 5:day='Friday'
        break;
        case 6:day='Saturday'
        break;
        case 7:day='Sunday'
        break;
    }
    document.getElementById('day').innerText=day;

}