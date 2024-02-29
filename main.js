/**
 * @param {event} evt
 * @param {string} cityName
 */ 
function openCity(evt, cityName) {
  console.log(evt, cityName);
  tabcontents = document.getElementsByClassName('tabcontent');
  for (let i =0;i<tabcontents.length;i++){
    tabcontents[i].style.display = 'none'
  }
  
  document.getElementById(cityName).style.display = 'block';
}

  
  // code
