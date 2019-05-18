// from data.js
var ufoData = data;


function adddata(){
dataadded =     {
  datetime: "1/28/1996",
  city: "dallas",
  state: "tx",
  country: "us",
  shape: "star",
  durationMinutes: "5 mins.",
  comments: "Cowboys win a superbowl, that's alien!."
  };

ufoData.splice(2,0,dataadded);
}

var tbody = d3.select("tbody");
// var submit = d3.select("#filter-btn");

//Add the data and show the table first time
adddata();
showTable();

// credit to https://stackoverflow.com/questions/33118036/how-to-get-distinct-values-in-d3-js
function unique(x) {
  return x.reverse().filter(function (e, i, x) {return x.indexOf(e, i+1) === -1;}).reverse();
}

var uniqueStateValues = unique(ufoData.map(function(d){return d.state}))
var uniqueCityValues = unique(ufoData.map(function(d){return d.city}))
var uniqueCountryValues = unique(ufoData.map(function(d){return d.country}))
var uniqueShapeValues = unique(ufoData.map(function(d){return d.shape}))
console.log(uniqueStateValues);
console.log(uniqueCityValues);
console.log(uniqueCountryValues);
console.log(uniqueShapeValues);

// credit to https://stackoverflow.com/questions/31831651/javascript-filter-array-multiple-conditions
//users = users.filter(obj => obj.name == filter.name && obj.address == filter.address)

d3.select("#filter-btn").on("click",filterdata);


function showTable() {
    d3.select("tbody").html("");
    ufoData.forEach((ufoSighting) => {

        var row = tbody.append("tr");
      
        Object.values(ufoSighting).forEach((value) => {
      
          row.append("td").text(value);
      
        });
    });
};

  // Select the submit button


function filterdata(){

    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Clear all data
    d3.select("tbody").html("");

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    
    var filteredData = ufoData.filter(ufoData => ufoData.datetime === inputValue);

    filteredData.forEach((datedata) => {

        var row = tbody.append("tr");
        
        Object.values(datedata).forEach((value) => {

            row.append("td").text(value);
            
        })
    });

};


  
