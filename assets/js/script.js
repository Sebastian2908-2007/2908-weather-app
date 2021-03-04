 var inpBtn = document.querySelector('.inpBtn');
 var inputSearch = document.querySelector('.inputValue');
 var showName = document.querySelector(".input-value-nm") 
 var desc = document.querySelector(".desc") 
 var temp = document.querySelector(".temp") 

 inpBtn.addEventListener("click", function() {
     // daily weather api url per city
   event.preventDefault();
  fetch( "https://api.openweathermap.org/data/2.5/weather?q="+inputSearch.value+"&appid=c5c96daed38db003f5a5228c5b83c909")
  .then(function(response) {
    if (response.ok) {
      response.json().then(function(data) {
        console.log(data);
      })
    }else {
      console.log("you can do this try again!");
    }

  })

})