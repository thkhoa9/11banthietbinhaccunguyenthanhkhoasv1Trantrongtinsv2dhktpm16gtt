var free = document.getElementById("free");
var free2 = document.getElementById("free2");
var free3 = document.getElementById("free3");
var free4 = document.getElementById("free4");
var free5 = document.getElementById("free5");
var free6 = document.getElementById("free6");

free.addEventListener("click", () => {
    document.getElementById("freePopUp").style.display = "block";
})
free2.addEventListener("click", () => {
    document.getElementById("freePopUp2").style.display = "block";
})
free3.addEventListener("click", () => {
    document.getElementById("freePopUp3").style.display = "block";
})
free4.addEventListener("click", () => {
    document.getElementById("freePopUp4").style.display = "block";
})
free5.addEventListener("click", () => {
    document.getElementById("freePopUp5").style.display = "block";
})
free6.addEventListener("click", () => {
    document.getElementById("freePopUp6").style.display = "block";
})

document.getElementById("close").addEventListener("click", () => {
    document.getElementById("freePopUp").style.display = "none";
})
document.getElementById("close2").addEventListener("click", () => {
    document.getElementById("freePopUp2").style.display = "none";
})
document.getElementById("close3").addEventListener("click", () => {
    document.getElementById("freePopUp3").style.display = "none";
})
document.getElementById("close4").addEventListener("click", () => {
    document.getElementById("freePopUp4").style.display = "none";
})
document.getElementById("close5").addEventListener("click", () => {
    document.getElementById("freePopUp5").style.display = "none";
})
document.getElementById("close6").addEventListener("click", () => {
    document.getElementById("freePopUp6").style.display = "none";
})