// from data.js
var ufoData = data;
var tbody = d3.select("tbody");

/** After the fact adding some data */
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

//Add the data and show the table first time
adddata();
showTable(ufoData);

// Wanted to do dropdown lists for search will re-visit
// // credit to https://stackoverflow.com/questions/33118036/how-to-get-distinct-values-in-d3-js
// function unique(x) {
//   return x.reverse().filter(function (e, i, x) {return x.indexOf(e, i+1) === -1;}).reverse();
// }
  
// var uniqueStateValues = unique(ufoData.map(function(d){return d.state}))
// var uniqueCityValues = unique(ufoData.map(function(d){return d.city}))
// var uniqueCountryValues = unique(ufoData.map(function(d){return d.country}))
// var uniqueShapeValues = unique(ufoData.map(function(d){return d.shape}))
// console.log(uniqueStateValues);
// console.log(uniqueCityValues);
// console.log(uniqueCountryValues);
// console.log(uniqueShapeValues);

d3.select("#filter-btn").on("click",filterdata);

/**  Clears tbody and writes all <tr><td>values</td></tr>
 * 
 * @param {obj} data 
 */
function showTable(data) {
    d3.select("tbody").html("");
    data.forEach((ufoSighting) => {

        var row = tbody.append("tr");
      
        Object.values(ufoSighting).forEach((value) => {
      
          row.append("td").text(value);
      
        });
    });
};

  // Select the submit button

/** filtering data on the basis of Date, city, state, country, shape*/
function filterdata(){

    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Clear all data
    d3.select("tbody").html("");

       // credit https://stackoverflow.com/questions/41626302/javascript-multiple-condition-array-filter?rq=1
    // creating filtercondition object for all the searches
    let filtercondition= {};
      
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
    showTable(dataFiltered);
  }; 

// old working code  for date only

    // // Select the input element and get the raw HTML node
    // var inputElement = d3.select("#datetime");

    // // Get the value property of the input element
    // var inputValue = inputElement.property("value");
    // var filteredData = ufoData.filter(ufoData => ufoData.datetime === inputValue);

    // filteredData.forEach((datedata) => {

    //     var row = tbody.append("tr");
        
    //     Object.values(datedata).forEach((value) => {

    //         row.append("td").text(value);
            
    //     })
    // });      
