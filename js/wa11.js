const button = document.querySelector('#js-new-character');
button.addEventListener('click',findChar);

function findChar() {
    let input = submitCharacter.value;
    const endPoint = 'https://www.amiiboapi.com/api/amiibo/?character=' + input;
    console.log();
    getCharacter(endPoint,input);
}



async function getCharacter(endPoint) {
    try {
        const response = await fetch(endPoint)
        if(!response.ok) {
            throw Error(response.statusText)
        }
        const json = await response.json();
        console.log(json);
        const name = json.amiibo[0].character;
        const series = json.amiibo[0].gameSeries;
        const url = json.amiibo[0].image;
        console.log(json.amiibo[0])
        printName(name);
        printSeries(series);
        printUrl(url);
    }
    catch (err) {
        console.log(err);
        alert('Failed to find character');
    }
}

function printName(name) {
    const nameText = document.querySelector('#js-name-text');
    nameText.textContent = "Character: " + name;
}

function printSeries(series) {
    const seriesText = document.querySelector('#js-series-text');
    seriesText.textContent = "Series: " + series;
}

function printUrl(url) {
    const myImg = document.querySelector("img")
    myImg.src = url;
}

printName("Warren");
printSeries("Developer");