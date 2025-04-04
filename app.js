const userKm = prompt('Quanti km vuoi percorrere?');
console.log(userKm);

const userAge = prompt('Quanti anni hai?');
console.log(userAge);

const priceXKm = 0.21

const TicketPrice = (userKm) * (priceXKm)
console.log(TicketPrice)

const PercentualeScontoGiovani = 20
const PercentualeScontoAnziani = 40

const ScontoGiovani = (TicketPrice * PercentualeScontoGiovani) / 100
const ScontoAnziani = (TicketPrice * PercentualeScontoAnziani) / 100

if (userAge <= '18') {
  const PrezzoScontatoGiovani = Math.floor(TicketPrice) - (ScontoGiovani)
  alert('Applicato sconto minorenne')
  console.log(`Il prezzo scontato è ${PrezzoScontatoGiovani}`)
}
else if (userAge >= '65') {
  const PrezzoScontatoAnziani = Math.floor(TicketPrice) - (ScontoAnziani)
  alert('Applicato sconto anziani')
  console.log(`Il prezzo scontato è ${PrezzoScontatoAnziani}`)
}