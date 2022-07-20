// pasiimam is vartotojo input'a, kiek automobiliu turi lenktyniauti
// pasiimam is vartotojo input'a kiek toli turi buti finisas
// patikrinam vartotojo suvestus duomenis: ar suvestas teigiamas sveikasis skaicius,
// jei ne, prasom dar karta suvesti duomenis

// susikuriame masinos klase
// ji turetu tureti tokius properties: id, speed, distance. Id turi ateiti kaip parametras, o
// pradiniai speed ir distance yra 0.
// ir tokius metodus:
// accelerate: priima parametra (skaiciu), ir tokiu dydziu padidina automobilio greiti
// slowdown: priima parametra (skaiciu), ir tokiu dydziu sumazina greiti.
// Jei greitis tampa mazesnis nei 0, greitis turetu buti 0.
// move: padidina distance tokiu dydziu koks yra greitis

// susikuriam masyva cars, kuriame laikysime savo sukurtus masinu objektus.
//Pradzioje tai bus tuscias masyvas
//susikuriame tiek automobiliu objektu, kiek praso numberOfCars kintamasis ir sukeliame visus i masyva

//kiekvienam masyve esanciam objektui sukuriame div elementa su ID tokiu koks yra objekto property id,
// ir ikeliame i body tag.
// duodame automobiliui stiliu per javascript. Kadangi noresime automobilius judinti per javascrit,
//duodame pozicija absolute ir surikiuojame viena po kitu.

let inputAutoCount = 0;
let inputDistance = 0;
let autoArray = [];

function isPositiveInteger(x) {
  return Number.isInteger(x) && x > 0;
}

while (!isPositiveInteger(inputAutoCount)) {
  inputAutoCount = Number.parseInt(prompt("Kiek masinu turi lengtyniauti", 5));
}

while (!isPositiveInteger(inputDistance)) {
  inputDistance = Number.parseInt(prompt("Kokia distancija", 100));
}

class Auto {
  constructor(id) {
    this.id = id;
    this.speed = 0;
    this.distance = 0;
  }

  getAccelerate(x) {
    // this.speed += x;
    this.speed = this.speed + x;
  }

  getSlowdown(x) {
    this.speed -= x;

    if (this.speed < 0) {
      this.speed = 0;
    }
  }

  getMove() {
    this.distance += this.speed;
  }
}

for (let i = 1; i <= inputAutoCount; i++) {
  autoArray.push(new Auto(i));
}
