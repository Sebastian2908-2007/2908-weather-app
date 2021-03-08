 var inpBtn = document.querySelector('.inpBtn');
 var inputSearch = document.querySelector('.inputValue');
 var fiveDaySearch = document.querySelector(".inputFiveDay");
 var fveDayBtn = document.querySelector(".fveDay")
 var fveDayName = document.querySelector(".input-value-fd")
 var fveDayWeather = document.querySelector(".one")
 var fveDayWeather1 = document.querySelector(".two")
 var fveDayWeather2 = document.querySelector(".three")
 var fveDayWeather3 = document.querySelector(".four")
 var fveDayWeather4 = document.querySelector(".five")
 var savedBtns = document.querySelector(".new");
 var showName = document.querySelector(".input-value-nm") 
 var desc = document.querySelector(".desc") 
 var temp = document.querySelector(".temp") 
 var locale= [];


// new load function that prints whole array of saved inputs upon loading
function loading() {
  

 var history = localStorage.getItem("history");
 history = JSON.parse(history)
 for (i=0; i< history.length; i++ ) { prntBtn();
   function prntBtn () { 
  var container = document.querySelector(".gen");
  var btnGen = document.createElement("button");
  btnGen.setAttribute("id", "submit");
  btnGen.className = "btnO btn btn-light"
  btnGen.textContent = history[i];
  container.appendChild(btnGen);
   } 

 
}
  

}






 inpBtn.addEventListener("click", function() {
   var formrst = document.getElementById("user-form");
   
     // daily weather api url per city
   event.preventDefault();
  fetch( "https://api.openweathermap.org/data/2.5/weather?q="+inputSearch.value+"&appid=c5c96daed38db003f5a5228c5b83c909&units=imperial")
  .then(function(response) {
    if (response.ok) {
      response.json().then(function(data) {
      var temperature = data.main.temp;
       var descValue =  data.weather[0].description;
       var nameCity = data.name;
      localeStorage();
      createCityBtn ();
      showName.innerHTML = nameCity;
      desc.innerHTML = descValue;
      temp.innerHTML = temperature;
      formrst.reset();
      })
    }else {
     window.alert("please enter a real city");
    }

  })

})
// local storage logic
function localeStorage () {
let save = inputSearch.value;
locale.push(save)
localStorage.setItem("history", JSON.stringify(locale));
//console.log(locale);

}
// creates button every search
function createCityBtn () {
  var container = document.querySelector(".gen");
  var btnGen = document.createElement("button");
  btnGen.innerHTML = inputSearch.value;
  btnGen.className = "btnO btn btn-light"
  container.appendChild(btnGen);
}
// five day search logic
fveDayBtn.addEventListener("click", function () {
  var formrst = document.getElementById("sec-form");
   
  event.preventDefault();
  fetch("https://api.openweathermap.org/data/2.5/forecast?q="+fiveDaySearch.value+"&appid=c5c96daed38db003f5a5228c5b83c909&units=imperial")
  .then(function(response) {
    if (response.ok) {
      response.json().then(function(data) {
          //console.log(data);
          var cityName = data.city.name;
          var fiveDayDis = data.list[0].main.temp;
          var fiveDayDis1 = data.list[1].main.temp;
          var fiveDayDis2 = data.list[2].main.temp;
          var fiveDayDis3 = data.list[3].main.temp;
          var fiveDayDis4 = data.list[4].main.temp;
          localeStorage();
          fveDayName.innerHTML = cityName;
          fveDayWeather.innerHTML = fiveDayDis;
          fveDayWeather1.innerHTML = fiveDayDis1;
          fveDayWeather2.innerHTML = fiveDayDis2;
          fveDayWeather3.innerHTML = fiveDayDis3;
          fveDayWeather4.innerHTML = fiveDayDis4;
          formrst.reset()
      })
    }

  })
})
loading();




var oldSearchData = function (event) {
  event.preventDefault();
 //console.log(event.target);
  if (event.target.matches(".btnO")) {
    //console.log("yup")
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+event.target.innerHTML+"&appid=c5c96daed38db003f5a5228c5b83c909&units=imperial")
    .then(function(response) {
      if (response.ok) {
        response.json().then(function(data) {
         // console.log(data);
         var temperature = data.main.temp;
       var descValue =  data.weather[0].description;
       var nameCity = data.name;
       showName.innerHTML = nameCity;
       desc.innerHTML = descValue;
       temp.innerHTML = temperature;

        })
      }
    })
  }
}

savedBtns.addEventListener("click", oldSearchData);







