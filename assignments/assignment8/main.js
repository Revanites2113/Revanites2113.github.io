const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
  }

var storyText = "It was 69 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Micah", "Dutch", "Artur"];
const insertY = ["St. Denis", "Tahiti", "New Hanover"];
const insertZ = ["lost complete faith", "sided with the rat Micah", "looked for LEEEEENNNNNYYYYYYY"];

randomize.addEventListener('click', result);

function result() {

    var newStory = storyText;

    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.0714286) + " stone";
    const temperature =  Math.round((69 - 32) * 5 / 9) + " centigrade";
    newStory = newStory.replace("300 pounds", weight);
    newStory = newStory.replace("69 fahrenheit", temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
