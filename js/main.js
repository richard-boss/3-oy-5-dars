var elTitle = document.querySelector ('.title')


var userName = prompt('Ismiz nmedi🤔', 'ABDULLOH😎')

var ticketPrise = 500;
var hotelPrice = 250;
var othersPrice = 120;
var dolarToSum = 11225;
var euroToSum = 11686;
var dollar = (ticketPrise + hotelPrice) * dolarToSum;
var euro = othersPrice * euroToSum;
var owerAll = dollar + euro;
var userMoney = prompt(`To'risini etin nechi puliz bor ${userName}aka 💰`);
if (userMoney >= owerAll ) {
  elTitle.textContent = `Oq yo'l ${userName}aka GAZINI BOSING✊`;
} else {
  elTitle.textContent = `${userName}aka hisobingizda yetarlik mablag mavjud emas, Iltimos yana biroz pulni bosing😉`;
}