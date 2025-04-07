const tdKm = document.getElementById('km-viaggio');
const tdPrezzo = document.getElementById('prezzo-base');
const tdSconto = document.getElementById('sconto');
const tdTotale = document.getElementById('prezzo-finito');
console.log(tdKm, tdPrezzo, tdSconto, tdTotale);

let userKm = parseFloat(prompt('Quanti km devi percorrere?'));
console.log(userKm);

let userAge = parseInt(prompt('Quanti anni hai?'));
console.log(userAge);

const priceXKm = 0.21


const TicketPrice = userKm * priceXKm
console.log(TicketPrice)
var Sconto = 0
const PrezzoFinale = TicketPrice - Sconto

if (isNaN(userKm) || isNaN(userAge)) {

  console.error('I dati inseriti non sono corretti')
} else {

  console.log('Dati corretti')



  const PercentualeScontoGiovani = 20
  const PercentualeScontoAnziani = 40
  // const ScontoGiovani = (TicketPrice * PercentualeScontoGiovani) / 100
  // const ScontoAnziani = (TicketPrice * PercentualeScontoAnziani) / 100

  if (userAge < '18') {
    var Sconto = (TicketPrice * PercentualeScontoGiovani) / 100
    var PrezzoFinaleGiovani = (TicketPrice) - (Sconto)
    // const PrezzoScontato = (TicketPrice) - (Sconto)
    alert('Applicato sconto minorenne')
    console.log(`Il prezzo finale è ${PrezzoFinaleGiovani}`)
  }
  else if (userAge >= '65') {
    var Sconto = (TicketPrice * PercentualeScontoAnziani) / 100
    var PrezzoFinaleAnziani = (TicketPrice) - (Sconto)
    // const PrezzoScontato = (TicketPrice) - (Sconto)
    alert('Applicato sconto anziani')
    console.log(`Il prezzo finale è ${PrezzoFinaleAnziani}`)
  }
}

tdKm.innerHTML = `${userKm} km`;
tdPrezzo.innerHTML = `${TicketPrice} &euro;`;
tdSconto.innerHTML = `${Sconto} &euro;`;
if (userAge < '18') {
  tdTotale.innerHTML = `${PrezzoFinaleGiovani} &euro;`;
} else if (userAge >= '65') {
  tdTotale.innerHTML = `${PrezzoFinaleAnziani} &euro;`;
} else {
  tdTotale.innerHTML = `${TicketPrice} &euro;`;
}