// from data.js
var ufoData = data;

var tbody = d3.select("tbody");
console.log(tbody)
data.forEach((ufoSighting) => {

    var row = tbody.append("tr");
  
    Object.values(ufoSighting).forEach((value) => {
  
      row.append("td").text(value);
  
    });
});

  // Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

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
});
  
