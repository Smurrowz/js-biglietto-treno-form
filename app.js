const generateButton = document.querySelector('input[type="submit"]')
console.log(generateButton)

generateButton.addEventListener('click',
  function () {
    // prendo i dati dal form
    const passengerName = document.querySelector('input[type="text"]').value;
    console.log(passengerName);
    const distance = parseInt(document.querySelector('input[type="number"]').value);
    console.log(distance);
    const ageRange = document.getElementById('agerange').value;
    console.log(ageRange)


    // calcolo il prezzo del biglietto

    let ticketPrice = distance * 0.21;
    console.log(ticketPrice)

    // applico gli sconti

    if (ageRange === 'Minorenne') {
      ticketPrice = (ticketPrice * 0.8).toFixed(2);
    } else if (ageRange === 'Over65') {
      ticketPrice = (ticketPrice * 0.6).toFixed(2);
    }

    console.log(ticketPrice)

    // creo i vari range di offerta

    let offerType
    if (ageRange === 'Minorenne') {
      offerType = 'Biglietto con sconto minori'
    } else if (ageRange === 'Over65') {
      offerType = 'Biglietto con sconto anziani'
    } else {
      offerType = ' Biglietto standard'
    }

    console.log(offerType)

    // genero un numero di carrozza

    const carriageNumber = Math.floor(Math.random() * 10) + 1;
    console.log(carriageNumber)

    // genero un codice cp 
    const cpCode = Math.floor(Math.random() * 1000000) + 1;
    console.log(cpCode)


    // stampo nei vari dom i dati

    document.getElementById('passenger-name').innerHTML = passengerName
    document.getElementById('offer-type').innerHTML = offerType
    document.getElementById('carriage-number').innerHTML = carriageNumber
    document.getElementById('cp-code').innerHTML = cpCode
    document.getElementById('ticket-price').innerHTML = ticketPrice + '€'

    // Faccio comparire la secona sezione solo se i dati sono validi

    if(passengerName !== '' && !isNaN(distance)){
      document.getElementById('ticket').classList.remove('d-none')
    }else{
      alert ("Inserisci dei dati validi");
    }
    }
)


// bottone delete

const deleteButton = document.getElementById('delete-button')
console.log(deleteButton)

deleteButton.addEventListener('click',
  function () {
    document.querySelector('input[type="text"]').value = ''
    document.querySelector('input[type="number"]').value = ''
    document.getElementById('agerange').value = 'Maggiorenne' 
    
    // Faccio scomparire la seconda sezione se prima era stata attivata
    document.getElementById('ticket').classList.add('d-none')

  }
)
