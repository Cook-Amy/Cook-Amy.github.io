  // all the info we're looking for
  var name = "";
  var population = "";
  var capital = "";
  var borders = [];
  var languages = [];
  var currencies = [];
  var region = "";
  var languageJSON = {};
  var currencyJSON = {};

/***************************************************************
 * Get user's input
 * Send AJAX request
****************************************************************/
function getInfo() {
  var input = document.getElementById("userInput").value;
  clearInfo();
  if(input == "") {
    document.getElementById("errorMsg").innerHTML = "What country would you like to search for?";
    // document.getElementById("errorMsg").style.color = "red";
  }
  else {
    document.getElementById("errorMsg").innerHTML = "";

    // country AJAX request
    var countryRequest = new XMLHttpRequest();
    countryRequest.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200) {
        var jsonResp = JSON.parse(this.responseText);
        findCountryInfo(jsonResp, input);
      }
    };
    countryRequest.open("GET", 
                    "https://ajayakv-rest-countries-v1.p.rapidapi.com/rest/v1/all", 
                    true);
    countryRequest.setRequestHeader("x-rapidapi-host", "ajayakv-rest-countries-v1.p.rapidapi.com");
    countryRequest.setRequestHeader("x-rapidapi-key", "ee4b7e9cd4msh3784326c778d050p14e05bjsn5708de186e98");
    countryRequest.send();

    // language AJAX request
    var languageRequest = new XMLHttpRequest();
    languageRequest.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200) {
        languageJSON = JSON.parse(this.responseText);
      }
    };
    languageRequest.open("GET", "languageCodes.txt", true);
    languageRequest.send();

    // currency AJAX request
    var currencyRequest = new XMLHttpRequest();
    currencyRequest.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200) {
        currencyJSON = JSON.parse(this.responseText);
      }
    };
    currencyRequest.open("GET", "currencyCodes.txt", true);
    currencyRequest.send();
  }
}

/***************************************************************
 * Find the country info that matches user's input
****************************************************************/
function findCountryInfo(jsonResp, input) {
  country = changeCase(input);

  // loop through response JSON
  for(var i = 0; i < jsonResp.length; i++) {
    var respName = jsonResp[i].name;

    for(var j = 0; j < jsonResp[i].altSpellings.length; j++) {
      var respAltName = jsonResp[i].altSpellings[j];
      // check if input matches country name or alternate name
      if((respName == input) || (respAltName == input)) {
        // get single variables
        name = respName;
        var pop = jsonResp[i].population;
        population = pop.toLocaleString("en-US");
        capital = jsonResp[i].capital;
        region = jsonResp[i].region + "/" + jsonResp[i].subregion;

        // get border countries
        for(var b = 0; b < jsonResp[i].borders.length; b++) {
          borders.push(jsonResp[i].borders[b]);
        }

        // get languages
        for(var l = 0; l < jsonResp[i].languages.length; l++) {
          languages.push(jsonResp[i].languages[l]);
        }

        // get currencies
        for(var c = 0; c < jsonResp[i].currencies.length; c++) {
          currencies.push(jsonResp[i].currencies[c]);
        }
        break;
      }
    }
  }
  if(name == "") {
    document.getElementById("errorMsg").innerHTML = "No information available for \"" + input + "\".";
  }
  else {
    formatDisplay(jsonResp);
  }
}

/***************************************************************
 * Change all names to lower case so case won't matter during search
****************************************************************/
function changeCase(input) {

}

/***************************************************************
 * Format the results and display to the screen
****************************************************************/
function formatDisplay(jsonResp) {
  // display single variables
  document.getElementById("listName").innerHTML = name;
  document.getElementById("listRegion").innerHTML = region;
  document.getElementById("listPopulation").innerHTML = population;
  document.getElementById("listCapital").innerHTML = capital;

  // display languages
  var dispLanguages = "";
  for(var l = 0; l < languages.length; l++) {
    if(l > 0) {
      dispLanguages += "<br>";
    }
    dispLanguages += languageJSON[languages[l]];
  }
  document.getElementById("listLanguages").innerHTML = dispLanguages;

  // display currencies
  var dispCurrencies = "";
  for(var c = 0; c < currencies.length; c++) {
    if(c > 0) {
      dispCurrencies += "<br>";
    }
    dispCurrencies += currencyJSON[currencies[c]];
  }
  document.getElementById("listCurrencies").innerHTML = dispCurrencies;

  // diplay borders
  var dispBorders = "";
  for(var b = 0; b < borders.length; b++) {
    if(b > 0) {
      dispBorders += "<br>";
    }
    for(var i = 0; i < jsonResp.length; i++) {
      if(jsonResp[i].alpha3Code == borders[b])
      dispBorders += jsonResp[i].name;
    }
  }
  document.getElementById("listBorders").innerHTML = dispBorders;
}

/***************************************************************
 * Clear all results from variables and screen. 
****************************************************************/
function clearInfo() {
  name = "";
  population = "";
  capital = "";
  borders = [];
  languages = [];
  currencies = [];
  region = "";

  document.getElementById("userInput").value = "";
  document.getElementById("listName").innerHTML = "";
  document.getElementById("listRegion").innerHTML = "";
  document.getElementById("listPopulation").innerHTML = "";
  document.getElementById("listCapital").innerHTML = "";
  document.getElementById("listLanguages").innerHTML = "";
  document.getElementById("listCurrencies").innerHTML = "";
  document.getElementById("listBorders").innerHTML = "";
  document.getElementById("errorMsg").innerHTML = "";
}
