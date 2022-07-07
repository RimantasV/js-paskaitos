function longesWord(sentence) {
  let answer = sentence[0];

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].length > answer.length) {
      console.log(sentence[i]);
      console.log(i);
      answer = sentence[i];
    }
  }

  return answer;
}

let array = [
  "Lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipisicing",
  "elit",
];

console.log(longesWord(array));

function midLetter(word) {
  jav;
  if (word.length % 2 !== 0) {
    // variantas kuomet zodio ilgis nelyginis
    return word[Math.floor(word.length / 2)];
  } else {
    // variantas kuomet zodio ilgis nelyginis
    // return word[word.length / 2 - 1] + word[word.length / 2];
  }
}

console.log(midLetter("darjcas"));

function word(n) {
  let result = "";

  while (n > 0) {
    result += "ha";

    n--;
  }

  return result;
}

console.log(word(15));

let bodyEl = document.querySelector("body");

let btnEl = document.querySelector("button");

btnEl.addEventListener("click", funcAddParagr);

function funcAddParagr() {
  let pAddEl = document.createElement("p");

  pAddEl.textContent = "Nauja pastraipa sukurta!";

  bodyEl.appendChild(pAddEl);
}

// kaip istrinti html elementa
// remove()
// peles kairio mygtuko eventas - click
// peles desinio mygtuko eventas - contextmenu
// text inputo ivestam tekstui pasiimti, naudojam: value
//   text-decoration: line-through;

let word1 = "hello";
let word2 = "world";

let greeting = word1 + " " + word2;
let greeting2 = word1.concat(", ", word2);
let greeting3 = `${word1} ${word2}`;
