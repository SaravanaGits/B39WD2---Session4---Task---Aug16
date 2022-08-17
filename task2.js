//Display all the countries' flag using rest countries URL

const data = new XMLHttpRequest();

data.open("GET", "https://restcountries.com/v2/all");
data.send();

data.responseType = "json";

data.onload = function countryData() {
    const countries = data.response;
    let count = 0;
    for (i = 0; i < countries.length; i += 1) {
        console.log(countries[i].flag);
        count += 1;
    }
    console.log("There are " + count + " countries in the world"); //just tried to print total countries fetched
}