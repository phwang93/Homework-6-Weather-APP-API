//function to get Weather API info for the click

function InfoContainer() {
    var newSearch = document.getElementById("locationInput");
    var locationName = document.getElementById("locationName");
    locationName.innerHTML = newSearch.value;
    
    //fetch data from Weather API

    fetch("http://api.openweathermap.org/data/2.5/forecast?q='+newSearch.value+'&appid=b67ddd28f3d948a8618b521e9e267d64")
    .then(response => response.json())
    .then(data => {
        
        //Getting the temps(min,max) for each day
        for(i =0; i < 5; i++) {
            document.getElementById("day" + (i + 1) + "Low").innerHTML = "Low: " + Number(data.list[i].main.temp_min-273.15).toFixed(1) + "°";
        }

        for(i =0; i < 5; i++) {
            document.getElementById("day" + (i + 1) + "High").innerHTML = "High: " + Number(data.list[i].main.temp_max-273.15).toFixed(1) + "°";
        }
    })
}