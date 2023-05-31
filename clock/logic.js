const body = document.querySelector("body")
const hourHand = document.querySelector(".hour")
const minutHour = document.querySelector(".minuts")
const secondHour = document.querySelector(".second")


const updateTime = ()=>{
    let data = new Date()
    let sectoDeg = (data.getSeconds() / 60) * 360;
    let mintoDeg = (data.getMinutes() / 60) * 360;
    let hrtoDeg = (data.getHours() / 12) * 360

    secondHour.style.transform = `rotate(${sectoDeg}deg)`
    minutHour.style.transform = `rotate(${mintoDeg}deg)`
    minutHour.style.transform = `rotate(${hrtoDeg}deg)`
}

setInterval(updateTime, 1000);