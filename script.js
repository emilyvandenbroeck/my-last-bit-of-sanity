//make comments like this in the script.js file
//by adding two slashes at the start of lines of code you can 'comment out' the code
//it's helpful to write comments to keep track of what each line of code does

//a function to select random item from a list (do not edit)
const buttonEmail = document.getElementById("poem");
function getRandomFromList(list) {
  return list[Math.floor(Math.random() * list.length)];
}
var i = 0;
var speed = 50;

//function for network error message
const sent1 = [
  "i <3 u",
  "have a wonderful day",
  "thinking of ur face",
  "u r beautiful",
  "call me x",
  "good morning sunshine",
  "good night, love u",
  "miss u",
];

const buttonRetry = document.getElementById("button-network");

function changeResultsError() {
  const paragraph = document.getElementById("networkError");
  paragraph.innerText = getRandomFromList(sent1);
}
buttonRetry.addEventListener("click", changeResultsError);
//end of network error function

//function dropdown menu (do not edit this first part)
function addEval(evalText) {
  const subjectContent = document.getElementById("subject-content");
  subjectContent.innerText = evalText;
}
//when selected in the dropdown menu, the x variables trigger the associated text. Edit the x variables (and make sure to also update them in the index.html file) and edit the associated text/emojis within the quotes
//think about what use you might have for a dropdown menu: you could have someone select their 'mood' and give them an appropriate song, a bit of good or bad advice, an emoji, etc.
function dropdownFunction() {
  var x = document.getElementById("subject").value;
  if (x === "flighty") {
    addEval("🛩️🐦🦅🦋🌪️💭");
  } else if (x === "vague") {
    addEval("🥱👽🐙🪼🌘");
  } else if (x === "joyful") {
    addEval("😀😍😸👾👻🕺");
  } else if (x === "cloudy") {
    addEval("🌦️🌨️🫧🌫️☔⚡🥶");
  } else if (x === "hangry") {
    addEval("🍟🥨🌮🥗🍱");
  }
}
//end of dropdown function

//start of haiku function
//lists of variables: replace all of the 5 and 7 syllable constants in the two arrays below. The more constants you write, the more variety you will have in your poem
const fiveSyllables = [
  "there are people",
  "and then there is you",
  "do you see me here?",
  "leaves are scuttling",
  "your eyes are so green",
  "now you've seen through mine",
  "the leaves are turning",
  "i think i love you",
  "more than i deserve",
  "show your heart to me",
];
const sevenSyllables = [
  "and there are trees a'plenty",
  "there is a breeze through my hair",
  "do you still like me the same?",
  "will you ever love freely?",
  "afraid to show you my heart",
];
//code for haiku function (do not edit)
const buttonHaiku = document.getElementById("button-haiku");
function changeResults() {
  const paragraph = document.getElementById("haiku-1-1");
  const paragraphTwo = document.getElementById("haiku-1-2");
  const paragraphThree = document.getElementById("haiku-1-3");
  const paragraphFour = document.getElementById("haiku-2-1");
  const paragraphFive = document.getElementById("haiku-2-2");
  const paragraphSix = document.getElementById("haiku-2-3");
  const paragraphSeven = document.getElementById("haiku-3-1");
  const paragraphEight = document.getElementById("haiku-3-2");
  const paragraphNine = document.getElementById("haiku-3-3");
  paragraph.innerText = getRandomFromList(fiveSyllables);
  paragraphTwo.innerText = getRandomFromList(sevenSyllables);
  paragraphThree.innerText = getRandomFromList(fiveSyllables);
  paragraphFour.innerText = getRandomFromList(fiveSyllables);
  paragraphFive.innerText = getRandomFromList(sevenSyllables);
  paragraphSix.innerText = getRandomFromList(fiveSyllables);
  paragraphSeven.innerText = getRandomFromList(fiveSyllables);
  paragraphEight.innerText = getRandomFromList(sevenSyllables);
  paragraphNine.innerText = getRandomFromList(fiveSyllables);
}
buttonHaiku.addEventListener("click", changeResults);
//end of haiku function

//start of search function
const textWrapper = document.getElementById("text-wrapper");
const textInput = document.getElementById("text-input");
//search function constants
//play with Google search function to come up with search terms most relevant to you. Think about how these search terms tell a story. Replace all of the placeholder text below (phrases in red font) with search terms of your own. If you keep the phrases organised alphabetically, you can ensure you have enough results for each word.
const words = [
  "am i okay",
  "are there people in antarctica",
  "ample definition",

  "bunning",
  "big w",
  "bom melbourne",

  "chatgpt",
  "canva",
  "chemist warehouse",
  "can i change the air con filter on my car",

  "dog training tips",
  "devotee",
  "dan murphy",

  "emily blunt",
  "emotional manipulation",
  "emotional instability causes",

  "free parking near me",
  "ferntree gully hikes",
  "furniture online",
  
  "good restraunts",
  "google maps",
  "garden gnomes",
  
  "have i got covid",
  "how many people in australia",
  "hypnotherapy",
  
];
//search function (do not edit)
function changeText(e) {
  const searchWord = e.target.value.toLowerCase().trim();
  const resultWords = words.filter((word) =>
    word.toLowerCase().startsWith(searchWord)
  );
  // clear exist words
  while (textWrapper.firstChild) {
    textWrapper.removeChild(textWrapper.firstChild);
  }
  if (searchWord != "") {
    for (var i = 0; i < resultWords.length; i++) {
      const line = document.createElement("div");
      line.innerHTML = resultWords[i];
      textWrapper.appendChild(line);
    }

    if (resultWords.length === 0) {
      const line = document.createElement("div");
      line.innerHTML = "no results";
      textWrapper.appendChild(line);
    }
  }
}
textInput.addEventListener("input", changeText);
// end search function code

//start of code for poem

const subjects =
    "scholar, academic, student, master, teacher, thinker".split(
      ","
    ),
  verbs =
    "reading, writing, learning, screaming, discussing, studying, testing, spiraling".split(
      ","
    ),
  objects =
    "at college, in the library, at the park, in the literary scene, at university, in the cafe, at a coffee, in the student lounge".split(
      ","
    );
// set up the counter
let counter = 0;

// a function to pull a random item from a list
function getRandomFromList2(list) {
  return list[Math.floor(Math.random() * list.length)];
}
// add a line to the poem constructed from the lists of words
function addLine(indent = false) {
  // create the line
  const line = document.createElement("div");
  if (indent === true) {
    // indent is true so add an indent class
    line.classList.add("indent");
  }
  const text =
    getRandomFromList2(subjects) +
    " " +
    getRandomFromList2(verbs) +
    " " +
    getRandomFromList2(objects);
  const lineText = document.createTextNode(text);
  line.appendChild(lineText);
  // get the poem
  const poem = document.getElementById("poem");
  poem.appendChild(line);
}
// add a blank line to the poem
function addBlankLine() {
  const line = document.createElement("div");
  const poem = document.getElementById("poem");
  poem.appendChild(line);
}
// remove the first line from the poem
function removeFirstLine() {
  const poem = document.getElementById("poem");
  poem.removeChild(poem.childNodes[0]);
}
// implement the rules of the poem
function processPoem() {
  counter++;
  if (counter % 5 === 0) {
    addBlankLine();
  } else if (counter % 5 === 2 || counter % 5 === 4) {
    // if the second or fourth line add the line with an indent
    addLine(true);
  } else {
    addLine();
  }
  if (counter > 15) {
    removeFirstLine();
  }
}
window.setInterval(processPoem, 1000);