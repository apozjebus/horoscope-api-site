function capitalizeFirstLetter(string) {
    string = string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const options = {
    method: 'POST',
    headers: {
    'X-RapidAPI-Key': 'eedbdfcad4msh975a5261e5e9976p1df735jsn62da277e5fb6',
    'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
    }
};

btn.addEventListener("click", () => {
    request(sgn.value)
});

function request(value) {
    if (value.toLowerCase() == 'aquarius' || value.toLowerCase() == 'aries' || value.toLowerCase() == 'taurus' || value.toLowerCase() == 'gemini' || value.toLowerCase() == 'cancer' || value.toLowerCase() == 'leo' || value.toLowerCase() == 'virgo' || value.toLowerCase() == 'libra' || value.toLowerCase() == 'scorpio' || value.toLowerCase() == 'sagittarius' || value.toLowerCase() == 'capricorn' || value.toLowerCase() == 'pisces') {
        fetch('https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign='+value+'&day=today', options)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                document.querySelector("div").style.display = "flex";
                document.querySelector("div").innerHTML = `
                <h2>${capitalizeFirstLetter(value)}</h2>
                <img src="${value}.png" alt="Free Zodiac signs by Freepik">
                <p style="color: ${((response.color).replace(/\s+/g, '')).toLowerCase()}">Color: ${response.color}</p>
                <p>Compatibility: ${response.compatibility}<img src="${response.compatibility}.png" style="height: 100%; width: 0.8em; margin: 0; padding-left: 0.2em;" alt="Free Zodiac signs by Freepik"></p>
                <p>Current date: ${response.current_date}</p>
                <p>Date range: ${response.date_range}</p>
                <p>Description: ${response.description}</p>
                <p>Lucky number: ${response.lucky_number}</p>
                <p>Lucky time: ${response.lucky_time}</p>
                <p>Mood: ${response.mood}</p>
                `
                document.querySelector('body').style.paddingTop = '40vh';
                document.querySelector('body').style.paddingBottom = '40vh';
            })
            .catch(err => console.error(err));
    }
    else {
        sgn.value = "";
        alert("Use a valid sign");
    }
}