const listOfArabCountries =[
    'Algeria',
    'Bahrain',
    'Comoros',
    'Djibouti',
    'Egypt',
    'Iraq',
    'Jordan',
    'Kuwait',
    'Lebanon',
    'Libya',
    'Mauritania',
    'Morocco',
    'Oman',
    'Palestine',
    'Qatar',
    'Saudi Arabia',
    'Somalia',
    'Sudan',
    'Syrian Arab Republic',
    'Tunisia',
    'UAE',
    'Yemen'
];

const listOfArabCountriesAbbreviations =[
    'DZ',
    'BH',
    'KM',
    'DJ',
    'EG',
    'IQ',
    'JO',
    'KW',
    'LB',
    'LY',
    'MR',
    'MA',
    'OM',
    'PS',
    'QA',
    'SA',
    'SO',
    'SU',
    'SY',
    'TN',
    'AE',
    'YE'
];

function makeTableCell (element){
    return ("<td>" + element + "</td>");
}

function makeTableRow (element){
    return ("<tr>" + element + "</tr>");
}

let table = document.getElementById("stats-table");

let settings = {
    "url": "https://corona.lmao.ninja/v2/countries?yesterday&sort",
    "method": "GET",
    "timeout": 0,
    "error": function(){
        let headerTag = document.getElementById("header");
        headerTag.innerHTML+="<h2>API Error. Please try again later.</h2>"
    }
  };

$.ajax(settings).done(function (response) {
    // console.log(response);
    
    response.forEach(countryObject => {
        let rowContent="";
        if (listOfArabCountries.indexOf(countryObject.country)>=0){
            rowContent = rowContent + makeTableCell(countryObject.country); // Country
            rowContent = rowContent + makeTableCell(countryObject.todayCases.toLocaleString()); // New Cases
            rowContent = rowContent + makeTableCell(countryObject.todayRecovered.toLocaleString()); // New Recoveries
            rowContent = rowContent + makeTableCell(countryObject.recovered.toLocaleString()); // Total Recoveries
            rowContent = rowContent + makeTableCell(countryObject.deaths.toLocaleString()); // Total Deaths
            rowContent = rowContent + makeTableCell(countryObject.cases.toLocaleString()); // Total Cases
            rowContent = rowContent + makeTableCell(countryObject.active.toLocaleString()); // Active Cases
            rowContent = rowContent + makeTableCell(countryObject.activePerOneMillion.toLocaleString()); // Active Cases
            table.innerHTML += makeTableRow(rowContent);
        }
    });
  });   