// document select id promotionButton and make it a variable
var promotionButton = document.getElementById('promotionButton');

// on the promotionButton add class button-hover and remove it every 2 seconds
setInterval(function() {
  promotionButton.classList.toggle('button-hover');
}, 1000);

document.querySelector("#eapps-events-calendar-d71aadf2-771f-44d2-bec7-ec0ef628dde3 > div > div:nth-child(3)").style.display = "none";