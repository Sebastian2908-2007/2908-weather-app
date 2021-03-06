 var inpBtn = document.querySelector('.inpBtn');
 var inputSearch = document.querySelector('.inputValue');
 var showName = document.querySelector(".input-value-nm") 
 var desc = document.querySelector(".desc") 
 var temp = document.querySelector(".temp") 
 var locale= [];
 function loading() {
  JSON.parse(localStorage.getItem("history"))
  loading();
}


 inpBtn.addEventListener("click", function() {
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
      
      })
    }else {
      console.log("you can do this try again!");
    }

  })

})
function localeStorage () {
let save = inputSearch.value;
locale.push(save)
console.log(locale);
localStorage.setItem("history", JSON.stringify(locale));
}

function createCityBtn () {
  var container = document.querySelector(".gen");
  var btnGen = document.createElement("button");
  btnGen.innerHTML = inputSearch.value;
  btnGen.className = "btn"
  container.appendChild(btnGen);
}

