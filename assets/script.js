// Remaining time in the day
setInterval(() => {
    let nowTime = new Date
    let startDate = new Date(2022,1,1, nowTime.getHours() , nowTime.getMinutes() , 59);
    let dayEnd = new Date(2022,1,1, 23 , 59 , 59); 
    let dif = dayEnd - startDate 
    document.querySelector('#dayRem').textContent = msToTime(dif)
}, 1000)

function msToTime(duration) {
    let minutes = Math.floor((duration / (1000 * 60)) % 60)
    let hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
  
    return `${hours}H : ${minutes}M`
}



// Remaining time in the shift

let reqTime = {
    h: 8, m: 0
}
let workedTime = {
    h: 0, m: 0
}

let hIn = document.querySelector('#hIn')
hIn.addEventListener('input',(e) =>{
    if( e.target.value > 8) {
        alert('Max is 8')
        e.target.value = ''
        calcTime({h: 0, m: 0}, reqTime)

    } else {
        workedTime.h = e.target.value
        calcTime(workedTime, reqTime)
    }
 
})

let mIn = document.querySelector('#mIn')
mIn.addEventListener('input',(e) =>{
    if ( e.target.value > 59 ) {
        alert('Max is 59')
        e.target.value = ''
        calcTime({h: 0, m: 0}, reqTime)

    } else {
        workedTime.m = e.target.value
        calcTime(workedTime, reqTime)
    }

})


const calcTime = function(workedTime, reqTime){ 
    if(reqTime.m < workedTime.m) {
        reqTime.m += 60
        reqTime.h -= 1
    }
    if(reqTime.m - workedTime.m == 60){
        reqTime.m = 0
        reqTime.h += 1
    }

    document.querySelector('#shiftRem').textContent = `${reqTime.h - workedTime.h}H : ${reqTime.m - workedTime.m}M`
}

calcTime({h: 0, m: 0}, reqTime)

