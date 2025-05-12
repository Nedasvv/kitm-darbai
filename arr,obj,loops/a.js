// Suma nuo 1 iki 100
let suma = 0;

for (let i = 1; i <= 100; i++) {
  suma += i;
}

console.log("Suma nuo 1 iki 100 yra:", suma);

// Masyvas su knygomis
let knygos = [
  "Hobitas",
  "Karas ir taika",
  "1984",
  "Infernas",
  "Dune",
  "Pilkasis vilkas",
  "It",
  "Metro 2033"
];

function trumpiPavadinimai(knyguMasyvas) {
  return knyguMasyvas.filter(pavadinimas => pavadinimas.length < 10);
}

console.log("Trumpi pavadinimai:", trumpiPavadinimai(knygos));

