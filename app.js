let firstName = "";
let n;
let characters = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  e: 0,
  f: 0,
  g: 0,
  h: 0,
  i: 0,
  j: 0,
  k: 0,
  l: 0,
  m: 0,
  n: 0,
  o: 0,
  p: 0,
  q: 0,
  r: 0,
  s: 0,
  t: 0,
  u: 0,
  v: 0,
  w: 0,
  x: 0,
  y: 0,
  z: 0,
};

let charactersNumber = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function factorial(num) {
  var result = num;
  if (num === 0 || num === 1) return 1;
  while (num > 1) {
    num--;
    result *= num;
  }
  return result;
}

let numberOfRepeats = 0;

repeats = {};
formatRepeats = {};

function evaluateName() {
  firstName = firstName.trim().toLowerCase();
  n = firstName.length;
  console.log(firstName);

  const responseContent = document.querySelector("#response-content");

  for (letter of firstName) {
    characters[letter] += 1;
  }

  for (character in characters) {
    if (characters[character] > 1) {
      repeats[character] = characters[character];
    }
  }

  let index = 0;
  for (repeat in repeats) {
    formatRepeats[charactersNumber[index]] = repeats[repeat];
    index += 1;
  }

  numberOfRepeats = Object.keys(repeats).length;

  responseContent.innerHTML += `
    <p><b>n = ${n}</b></p>
  `;

  if (numberOfRepeats >= 1) {
    responseContent.innerHTML += `
    <b>repeating letters (if any):</b>  
    `;
  }

  for (repeat in formatRepeats) {
    responseContent.innerHTML += `
    <p><b>${repeat} = ${formatRepeats[repeat]}</b></p>
  `;
  }
}

function questionOne() {
  solution = document.querySelector("#a-solution");
  solution.innerHTML += `
    <p>Number of total letters: ${n}</p>
  `;

  if (numberOfRepeats == 0) {
    let answer = factorial(n);

    solution.innerHTML += `
      <p>Number of repeats: 0</p>
      Permutations = ${n}! = <b>${answer}</b>
    `;
  } else {
    let repeatsText = "";
    let factorialBottom = "";
    let factorialBottomValue = 1;

    for (let i = 0; i < numberOfRepeats - 1; i++) {
      repeatsText += `${formatRepeats[charactersNumber[i]]}, `;
      factorialBottom += `${formatRepeats[charactersNumber[i]]}! x `;
      factorialBottomValue *= factorial(formatRepeats[charactersNumber[i]]);
    }

    repeatsText += `${formatRepeats[charactersNumber[numberOfRepeats - 1]]}`;
    factorialBottom += `${
      formatRepeats[charactersNumber[numberOfRepeats - 1]]
    }!`;

    factorialBottomValue *=
      formatRepeats[charactersNumber[numberOfRepeats - 1]];

    let answer = factorial(n) / factorialBottomValue;

    let factorialFormula = "";

    for (let i = 0; i < numberOfRepeats - 1; i++) {
      factorialFormula += `${charactersNumber[i]}! x `;
    }

    factorialFormula += `${charactersNumber[numberOfRepeats - 1]}!`;

    console.log(repeatsText);

    let formula = `n! / (${factorialFormula})`;

    solution.innerHTML += `
      <p>Number of repeats: ${repeatsText}</p>
      Permutations = ${formula} = ${n}! / (${factorialBottom}) = <b>${answer}</b>
    `;
  }
}

function questionTwo() {}

document.querySelector(".name-input-button").onclick = () => {
  firstName = document.querySelector(".first-name-input").value;
  setup();
  evaluateName();
  questionOne();
};

function setup() {
  n;
  characters = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  };

  numberOfRepeats = 0;

  repeats = {};
  formatRepeats = {};

  document.querySelector("#response-content").innerHTML = ``;
  solution = document.querySelector("#a-solution").innerHTML = "";
}
