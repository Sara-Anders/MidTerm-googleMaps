'use strict'

//console.log('yo');

// declare the variables outside a function so they are global
let map1, markers;

let map, infoWindow;

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

function initMap() {
  //write jquery to load external JSON data


  $.getJSON("map.json",

    function (jsonData) {
      //console.log(jsonData);
      // the code in this function is run by jQuery after JSON loads
      // now perform the steps in javascript to create the map      

      // step 1. define the geocoord (lat,lng) for the center

      let geocoords = {
        lat: 38.46015,
        lng: -122.7357611
      };

      //step #2 create google Map Object 

      let map1 = new google.maps.Map(

        // tell gmaps to put map inside my id 

        document.getElementById('mapping'),
        {

          //give center in lat, lng 

          center: geocoords,
          //set zoom

          zoom: 2,

          //adding "Midnight Commander" map, style credit snazzy maps
          styles: [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 13
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#144b53"
            },
            {
                "lightness": 14
            },
            {
                "weight": 1.4
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#08304b"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#0c4152"
            },
            {
                "lightness": 5
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#0b434f"
            },
            {
                "lightness": 25
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#0b3d51"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "color": "#146474"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#021019"
            }
        ]
    }
]


        }
      );

     
      const image ="https://maps.google.com/mapfiles/kml/pushpin/";
      const locationButton = document.createElement("button");

      locationButton.textContent = "Pan to Current Location";
      locationButton.classList.add("custom-map-control-button");
      map1.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
      locationButton.addEventListener("click", () => {
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };

//custom marker for geolocation
               let marker2 = new google.maps.Marker(
         {
                    // 1. the position of the marker geocoord
                    position: pos,
                    // 2. which google map js var to place marker inside
                    map: map1,
                    // 3. title to show when user points at marker
                    title: 'Location found',
                    icon: image + 'wht-pushpin.png'
                }
      );

             marker2.setPosition(pos);
            // marker2.setContent("Location found.");
            // marker2.open(map1);
            map1.setCenter(pos);
            },
            () => {
              handleLocationError(true, marker2, map1.getCenter());
            }
          );
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, marker2, map1.getCenter());
        }
      });


      //console.log('blah');


      // make an empty array to fill up with markers
      markers = [];

      //add in js for loop to not exeed marker plots

      for (var i = 0; i < jsonData.length; i++) {

        //inside curlies, make a block of code associated with for loop

        //step #3 creat marker that will be placed on map

        let geocoords1 = {
          lat: jsonData[i].lat,
          lng: jsonData[i].lng,
        };
        //console.log(geocoords1);
        markers[i] = new google.maps.Marker(
          {
            //#1 the position of the marker geocoord
            position: geocoords1,
            //#2 which google map js var to place marker inside of 
            map: map1,
            //#3 title to show when user hovers at marker
            title: jsonData[i].title,

            //use discription from json file 
            custom_property: jsonData[i].description

          }
        );

        // step 4. define a click event on our marker to make + open iw
        markers[i].addListener(
          'click',
          function () {
            // make info window with content from this marker's custom property
            var info1 = new google.maps.InfoWindow(
              { content: this.custom_property }

            );
            // tell the info window to open inside of our map and center on this marker's geocoord
            info1.open(map1, this);

            //W3 school version of MAp.setcener
            map1.setZoom(15);
            //map.setCenter(marker2.getPosition());
            //google earth version
            map1.setCenter(new google.maps.LatLng(jsonData[1].lat, jsonData[1].lng));
          }
        );


        //can I add another click listener over info window click listener??
        //zoom in for markers
        /* markers[0].addEventListener(
                      'click',
                      function()
                       {
                      
                      }
                  );*/




      }



    }
  );
};

