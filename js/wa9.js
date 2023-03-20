const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

let storyText = "It was 15 degree fahrenheit outside, which was very hot, so :insertx: went hiking to :inserty:, then suddenly a monster :insertz: them from behind. Joel saw what happened to :insertx: which scarred for the rest of his life.";
let insertx = ["Grinch", "Batman", "July"];
let inserty = ["New Jersy", "Saturn", "Grace Anatomy"];
let insertz = ["digested", "Snapped","Massaged"];

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

randomize.addEventListener('click', result);


function result() {
    let newStory = storyText;
    let xItem = randomValueFromArray(insertx);
    let yItem = randomValueFromArray(inserty);
    let zItem = randomValueFromArray(insertz);

    newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replaceAll(':inserty:', yItem);
    newStory = newStory.replaceAll(':insertz:', zItem);


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);

  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300/14) + ' stone';
    let temperature =  Math.round((94 - 32) * (5/9)) + ' centigrade';
    newStory = newStory.replaceAll('94 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}