var day =   document.getElementById("p1")
var search = document.getElementById("search")
function weather_api(location){
    var allpost;
    var req = new XMLHttpRequest();
    req.open("GET" , `https://api.weatherapi.com/v1/forecast.json?key=e8c5a356ce344fcfbff194219233012&q=${location}&days=3`);
    req.send();
    req.addEventListener("readystatechange", function (){
        if (req.readyState == 4 && req.status >= 200 && req.status < 300){

            allpost = JSON.parse(req.response)
            const days = ['Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday'];
            const dayNumber =  allpost.current.is_day;
            const dayName = days[dayNumber];  
            const daynumber2 = allpost.current.is_day + 1;
            const dayName2 = days[daynumber2];
            const daynumber3 = allpost.current.is_day + 2;
            const dayName3 = days[daynumber3];
                var cartoona = ``
                cartoona += `
                <p class="position-absolute" style="color:#bfc1c8;">${dayName}</p>
                <p class="date" style="color:#bfc1c8;">${allpost.forecast.forecastday[0].date}</p>
                </div>
                <br>
                <p style="color:#bfc1c8;">${allpost.location.name}</p>
                <br>
                <h1 style="color: white; font-size: 100px;">${allpost.current.temp_c}<sup>o</sup>c</h1>
                <img src=${allpost.current.condition.icon} width="30%" style="margin-top:10px;" class="img1">
                <p class="text-info fs-6">${allpost.current.condition.text}</p>
                <p style="color:#bfc1c8;"><i class="fa-solid fa-umbrella"></i> 20% &nbsp;&nbsp;&nbsp;&nbsp; <i class="fa-solid fa-wind"></i> 18km/h &nbsp;&nbsp;&nbsp;&nbsp <i class="fa-regular fa-compass"></i> East</p>
                `
                document.getElementById("item1").innerHTML = cartoona 
                search.addEventListener("keyup", function(){
                  weather_api(search.value);
                }
              ) 
              var cartoona2 = ``
              cartoona2 += `
              <center><p style="color:#bfc1c8;">${dayName2}</p></center>
              <br><br>
              <center><img src=${allpost.forecast.forecastday[1].day.condition.icon} width="70px"></center>
              <br>
              <center><h1 style="color: white;">${allpost.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>c</h1></center>
              <center><p class=" fs-6" style="color:#bfc1c8;">${allpost.forecast.forecastday[1].day.avgtemp_c}<sup>o</sup></p></center>
              <center><p class="text-info fs-6">${allpost.forecast.forecastday[1].day.condition.text}</p></center>
              `
              document.getElementById("item2").innerHTML = cartoona2
              var cartoona3 = ``
              cartoona3 += `              
              <center><p style="color:#bfc1c8;">${dayName3}</p></center>
              <br><br>
              <center><img src=${allpost.forecast.forecastday[2].day.condition.icon} width="70px"></center>
              <br>
              <center><h1 style="color: white;">${allpost.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>c</h1></center>
              <center><p class=" fs-6" style="color:#bfc1c8;">${allpost.forecast.forecastday[2].day.avgtemp_c}<sup>o</sup></p></center>
              <center><p class="text-info fs-6">${allpost.forecast.forecastday[2].day.condition.text}</p></center>`
              document.getElementById("item3").innerHTML = cartoona3

            document.querySelector(".heado").classList.add("d-none")
            document.querySelector("body").classList.add("overflow-auto")

        }
    })
}
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      weather_api(lat + ", " + lon)
    });
  }

