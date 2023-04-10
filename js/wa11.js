const button = document.querySelector('#js-new-character');
button.addEventListener('click',findChar);

function findChar() {
    var input = document.getElementsByClassName('.submitCharacter');
    var charName = input.value;
    const endPoint = 'https://www.amiiboapi.com/api/amiibo/?character=' + charName;
    console.log(input);
    getCharacter(endPoint);
}



async function getCharacter(endPoint) {
    try {
        const response = await fetch(endPoint)
        if(!response.ok) {
            throw Error(response.statusText)
        }
        const json = await response.json();
        console.log(json);
    }
    catch (err) {
        console.log(err);
        alert('Failed to find character');
    }
}