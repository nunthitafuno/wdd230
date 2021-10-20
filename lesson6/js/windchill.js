let t = parseFloat(document.querySelector("#d-temp").innerHTML)
let s = parseFloat(document.querySelector("#d-wind-s").innerHTML)
let chillFactor = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s,0.16)) + (0.4275 * t * Math.pow(s,0.16))
if (t <= 50.0 && s > 3.0) {
    document.querySelector("#d-wind-c").innerHTML = Math.ceil(chillFactor)
}
else {
    document.querySelector(".data.chill").innerHTML = "N/A"
}