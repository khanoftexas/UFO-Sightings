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

    let filtercondition= {};
    
    

    // // Select the input element and get the raw HTML node
    // var inputElement = d3.select("#datetime");

    // // Get the value property of the input element
    // var inputValue = inputElement.property("value");

    // if (inputValue != ""){
    //   filtercondition["datetime"]=inputValue;
    // }
    // var inputElement = d3.select("#city");

    // // Get the value property of the input element
    // var inputValue = inputElement.property("value");

    // if (inputValue != ""){
    //   filtercondition["city"]=inputValue;
    // }

    // credit https://stackoverflow.com/questions/41626302/javascript-multiple-condition-array-filter?rq=1
    // Get the value property of the input element for date
    var dateinputvalue =d3.select("#datetime").property("value");
    if (dateinputvalue != ""){
      filtercondition["datetime"]=dateinputvalue;
    }
     // Get the value property of the input element for city
    var cityinputvalue =d3.select("#city").property("value");
    if (cityinputvalue != ""){
      filtercondition["city"]=cityinputvalue.toLowerCase();
    }
    // Get the value property of the input element for state
    var stateinputvalue =d3.select("#state").property("value");
    if (stateinputvalue != ""){
       filtercondition["state"]=stateinputvalue.toLowerCase();
    }
    // Get the value property of the input element for country
    var countryinputvalue =d3.select("#country").property("value");
    if (countryinputvalue != ""){
       filtercondition["country"]=countryinputvalue.toLowerCase();
    }
    // Get the value property of the input element for shape
    var shapeinputvalue =d3.select("#shape").property("value");
    if (shapeinputvalue != ""){
       filtercondition["shape"]=shapeinputvalue.toLowerCase();
    }




    console.log(filtercondition);
    let filterData = (array, filter) => {

      return array.filter( (item) => {
    
          /* here, we iterate each item and compare with your filter,
             if the item pass, you must return true. Otherwise, false */ 
    
          /* e.g.: datetime, city, state, country, shape check (if present only) */
          if (filter.datetime && filter.datetime !== item.datetime) {
              return false;
          }
          if (filter.city && filter.city !== item.city) {
            return false;
          }
          if (filter.state && filter.state !== item.state) {
            return false;
          }
          if (filter.country && filter.country !== item.country) {
            return false;
          }
          if (filter.shape && filter.shape !== item.shape) {
            return false;
          }
      
          return true;
    })
    }
    let dataFiltered = filterData(ufoData, filtercondition);
    console.log(dataFiltered);
    dataFiltered.forEach((datedata) => {

        var row = tbody.append("tr");
        
        Object.values(datedata).forEach((value) => {

            row.append("td").text(value);
            
        })
      });
    
    // var filteredData = ufoData.filter(ufoData => ufoData.datetime === inputValue);

    // filteredData.forEach((datedata) => {

    //     var row = tbody.append("tr");
        
    //     Object.values(datedata).forEach((value) => {

    //         row.append("td").text(value);
            
    //     })
    // });
    // var filtered = ufoData.filter(function(obj) {
    //   for (var key in filtercondition) {
    //     console.log(key);
    //   //   filtered.forEach((alldata) => {

    //   //     var row = tbody.append("tr");
          
    //   //     Object.values(alldata).forEach((value) => {
  
    //   //         row.append("td").text(value);
              
    //   //     })
    //   //  });
    //   }

    //   return true;
    //   });
     
      
};


