/*!
 * webportfolio
 * Web Portfolio
 * https://github.com/RFormigao/web-portfolio
 * @author Robson Formigão
 * @version 1.0.0
 * Copyright 2018. MIT licensed.
 */
function initMap() {
  var uluru = {lat: -22.314395, lng: -48.548196};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: uluru,
    mapTypeId: 'roadmap'
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
