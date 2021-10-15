/* Students: Please use this week's project for Week 9: Midterm Project: Map-Based Mobile App. 
     You will need to replace the contents of this JavaScript file with your own work, 
     and create any other files, if any, required for the assignment.
     When you are done, be certain to submit the assignment in both Repl.it and Canvas to be graded. */
/* console.log('yo');

  function initMap() {
//write jquery to load external JSON data
console.log('here');
 $.getJSON( "map.json",

 function(jsonData){
 // the code in this function is run by jQuery after JSON loads
 // now perform the steps in javascript to create the map                  
 // step 1. define the geocoord (lat,long) for the center

      var geocoords = {
        lat:38.46015 ,
        lng: -122.7357611
      };
//step #2 create google Map Object 
console.log('blah');
            var map1 = new google.maps.Map(
// tell gmaps to put map inside my id 

                document.getElementById('mapping'),
                  {
//give center in lat lng 

                    center:geocoords,
//set mzoom

                      zoom: 3

                  }
);
//add in js for loop to not exeed marker plots
for( var i=0; i<jsonData.length; i++){
  //inside curlies, make a block of code associated with for loop
  //step #3 creat marker that will be placed on map
  var geocoords1 ={
    lat:jsonData[i].lat,
    lng:jsonData[i].lng ,
  };

  google.maps.Marker(
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
}; */