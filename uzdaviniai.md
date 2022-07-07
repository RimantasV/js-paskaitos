Uzduotis

Parasyti funkcija, kuri is eilutes panaikintu visus skaitmenis

pvz.: This cat looks5 cat grea8t! => This cat looks cat great!

uzduotis 2

//Parasykite funkcija, kuri priimtu skaiciu masyva kaip argumenta,
//ir grazintu masyva kuriame pradiniai skaiciai butu pakeisti taip:
// jei is skaiciaus imanoma istraukti kvadratine sakni, kad ji butu sveikasis skaicius,
// tuomet grazinti ta skaiciu, o jei ne, tuomet grazinti skaiciu pakelta kvadratu.

//Pvz.: [4,3,9,7,2,1] -> [2,9,3,49,4,1]

Math.sqrt(x)
push()
Math.pow(x, 2)

    result.push(
      Number.isInteger(Math.sqrt(arr[i])) ? Math.sqrt(arr[i]) : arr[i] * arr[i]
    );
