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

          //adding "Mostly Grayscale" map, style credit snazzy maps
          styles: [
            {
              "featureType": "administrative",
              "elementType": "all",
              "stylers": [
                {
                  "visibility": "on"
                },
                {
                  "lightness": 33
                }
              ]
            },
            {
              "featureType": "administrative",
              "elementType": "labels",
              "stylers": [
                {
                  "saturation": "-100"
                }
              ]
            },
            {
              "featureType": "administrative",
              "elementType": "labels.text",
              "stylers": [
                {
                  "gamma": "0.75"
                }
              ]
            },
            {
              "featureType": "administrative.neighborhood",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "lightness": "-37"
                }
              ]
            },
            {
              "featureType": "landscape",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#f9f9f9"
                }
              ]
            },
            {
              "featureType": "landscape.man_made",
              "elementType": "geometry",
              "stylers": [
                {
                  "saturation": "-100"
                },
                {
                  "lightness": "40"
                },
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "landscape.natural",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "saturation": "-100"
                },
                {
                  "lightness": "-37"
                }
              ]
            },
            {
              "featureType": "landscape.natural",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "saturation": "-100"
                },
                {
                  "lightness": "100"
                },
                {
                  "weight": "2"
                }
              ]
            },
            {
              "featureType": "landscape.natural",
              "elementType": "labels.icon",
              "stylers": [
                {
                  "saturation": "-100"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                {
                  "saturation": "-100"
                },
                {
                  "lightness": "80"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels",
              "stylers": [
                {
                  "saturation": "-100"
                },
                {
                  "lightness": "0"
                }
              ]
            },
            {
              "featureType": "poi.attraction",
              "elementType": "geometry",
              "stylers": [
                {
                  "lightness": "-4"
                },
                {
                  "saturation": "-100"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#c5dac6"
                },
                {
                  "visibility": "on"
                },
                {
                  "saturation": "-95"
                },
                {
                  "lightness": "62"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "on"
                },
                {
                  "lightness": 20
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "all",
              "stylers": [
                {
                  "lightness": 20
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels",
              "stylers": [
                {
                  "saturation": "-100"
                },
                {
                  "gamma": "1.00"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.text",
              "stylers": [
                {
                  "gamma": "0.50"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.icon",
              "stylers": [
                {
                  "saturation": "-100"
                },
                {
                  "gamma": "0.50"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#c5c6c6"
                },
                {
                  "saturation": "-100"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "lightness": "-13"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.icon",
              "stylers": [
                {
                  "lightness": "0"
                },
                {
                  "gamma": "1.09"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e4d7c6"
                },
                {
                  "saturation": "-100"
                },
                {
                  "lightness": "47"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "lightness": "-12"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "labels.icon",
              "stylers": [
                {
                  "saturation": "-100"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#fbfaf7"
                },
                {
                  "lightness": "77"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "lightness": "-5"
                },
                {
                  "saturation": "-100"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "saturation": "-100"
                },
                {
                  "lightness": "-15"
                }
              ]
            },
            {
              "featureType": "transit.station.airport",
              "elementType": "geometry",
              "stylers": [
                {
                  "lightness": "47"
                },
                {
                  "saturation": "-100"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "all",
              "stylers": [
                {
                  "visibility": "on"
                },
                {
                  "color": "#acbcc9"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "saturation": "53"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "lightness": "-42"
                },
                {
                  "saturation": "17"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "lightness": "61"
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

               let marker2 = new google.maps.Marker(
         {
                    // 1. the position of the marker geocoord
                    position: pos,
                    // 2. which google map js var to place marker inside
                    map: map1,
                    // 3. title to show when user points at marker
                    title: 'Location found',
                    icon: image + 'blue-pushpin.png'
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

