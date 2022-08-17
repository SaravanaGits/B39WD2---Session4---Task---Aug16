//Display all the countries' name, subregion, region and population - using rest countries URL

const data = new XMLHttpRequest();

data.open("GET", "https://restcountries.com/v2/all");
data.send();

data.responseType = "json";

data.onload = function capital() {
    const countries = data.response;
    let count = 0;
    for (i = 0; i < countries.length; i += 1) {
        console.log(countries[i].name);
        console.log(countries[i].subregion);
        console.log(countries[i].region);
        console.log(countries[i].population);
        count += 1;
    }
    console.log("There are " + count + " countries in the world");
}