setInterval(SetClock, 1000)

const hourhand = document.querySelector('[data-hour-hand]')
const minhand = document.querySelector('[data-minute-hand]')
const sechand = document.querySelector('[data-second-hand]')


function SetClock() {
    const currentDate = new Date()
    const secondsratio = currentDate.getSeconds() / 60
    const mintuesratio = (secondsratio + currentDate.getMinutes()) / 60
    const Hoursratio = (mintuesratio + currentDate.getHours()) / 12
    setRotation(sechand, secondsratio)
    setRotation(minhand, mintuesratio)
    setRotation(hourhand, Hoursratio)


}

function setRotation(e, rotationRatio) {
    e.style.setProperty('--rotation', rotationRatio * 60)
}
SetClock()