'use strict'
  
  //console.log('yo');

  function initMap() {
//write jquery to load external JSON data


 $.getJSON( "map.json",

 function(jsonData){
   console.log('hi');
 // the code in this function is run by jQuery after JSON loads
 // now perform the steps in javascript to create the map                  
 // step 1. define the geocoord (lat,long) for the center

      let geocoords = {
        lat:38.46015,
        lng: -122.7357611
      };
//step #2 create google Map Object 

            let map1 = new google.maps.Map(
// tell gmaps to put map inside my id 

                document.getElementById('mapping'),
                  {
//give center in lat lng 

                    center:geocoords,
//set mzoom

                      zoom: 2

                  }
);
//console.log('blah');
//add in js for loop to not exeed marker plots
for( var i=0; i<jsonData.length; i++){

  //inside curlies, make a block of code associated with for loop
  //step #3 creat marker that will be placed on map
  
  let geocoords1 ={
    lat:jsonData[i].lat,
    lng:jsonData[i].lng,
  };
//console.log(geocoords1);
  let mymarker= new google.maps.Marker(
    {
      //#1 the position of the marker geocoord
      position:geocoords1,
      //#2 which google map js var to place marker inside of 
      map:map1,
      //#3 title to show when user hovers at marker
      title: jsonData[i].title
      
              }
            );
          }

    }
 );
}; 

