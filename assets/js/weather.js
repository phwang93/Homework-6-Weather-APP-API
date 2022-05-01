//function for Home Screen
function homeScreen() {
    document.getElementById("locationInput").defaultValue = "Irvine";
    InfoContainer();
}
//function to get Weather API info for the click button

function InfoContainer() {
    var newSearch = document.getElementById("locationInput");
    var locationName = document.getElementById("locationName");
    locationName.innerHTML = newSearch.value;
    
    //fetch data from Weather API

    fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + newSearch.value + "&appid=b67ddd28f3d948a8618b521e9e267d64")
    .then(response => response.json())
    .then(data => {
        
        //Getting the temps(min,max) for each day
        for(i =0; i < 5; i++) {
            document.getElementById("day" + (i + 1) + "Low").innerHTML = "Low: " + Number(data.list[i].main.temp_min).toFixed(1) + "°";
        }

        for(i =0; i < 5; i++) {
            document.getElementById("day" + (i + 1) + "High").innerHTML = "High: " + Number(data.list[i].main.temp_max).toFixed(1) + "°";
        }

        //display weather icons from API, depending on conditions
        for (i = 0; i < 5; i++){
            document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/" + 
            data.list[i].weather[0].icon + ".png";
        }
    })
    
    //if error occurs, display error alert
    .catch(err => alert("The weather is not available"))
}

//Variables to display date for the next days

var time = new Date();
var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

//Function to display the correct date
function CheckDay(day){
    if(day + time.getDay() > 6) {
        return day + time.getDay() - 7;
    } else {
        return day + time.getDay();
    }
}

for (i = 0; i < 5; i++) {
    document.getElementById("day" + (i + 1)).innerHTML = weekDay[CheckDay(i)];

}