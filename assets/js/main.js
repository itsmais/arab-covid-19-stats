const listOfArabCountries =[
    'algeria',
    'bahrain',
    'comoros',
    'djibouti',
    'egypt',
    'iraq',
    'jordan',
    'kuwait',
    'lebanon',
    'libya',
    'mauritania',
    'morocco',
    'oman',
    'palestine',
    'qatar',
    'saudi-arabia',
    'somalia',
    'sudan',
    'syria',
    'tunisia',
    'united-arab-emirates',
    'yemen'
]

function makeTableCell(element){
    return ("<td>" + element + "</td>");
}

  function makeTableRow(element){
      return ("<tr>" + element + "</tr>");
  }

listOfArabCountries.forEach(country => {
}); 

let table = document.getElementById("stats-table");


let settings = {
    "url": "https://api.covid19api.com/summary",
    "method": "GET",
    "timeout": 0,
  };
$.ajax(settings).done(function (response) {
    console.log(response);
    response.Countries.forEach(countryObject => {
        let rowContent="";
        if (listOfArabCountries.indexOf(countryObject.Slug)>=0){
            rowContent = rowContent + makeTableCell(countryObject.Country); // Country
            rowContent = rowContent + makeTableCell(countryObject.NewRecovered); // New Recoveries
            rowContent = rowContent + makeTableCell(countryObject.TotalRecovered); // Total Recoveries
            rowContent = rowContent + makeTableCell(countryObject.TotalDeaths); // Total Deaths
            rowContent = rowContent + makeTableCell(countryObject.TotalConfirmed); // Total Confirmed
            rowContent = rowContent + makeTableCell(countryObject.TotalConfirmed-countryObject.TotalDeaths-countryObject.TotalRecovered); // Active Cases
            table.innerHTML += makeTableRow(rowContent);
            // document.getElementById("main-text").innerHTML+=countryObject.Country + " " + countryObject.TotalConfirmed+"</br>";
        }
    });
  });   
