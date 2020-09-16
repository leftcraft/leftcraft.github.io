//******************************** COLLAPSE MENU ON CLICK *******************************//

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

//******************************** FLEX SLIDER *******************************//

//************************* STELLAR SCROLLING STUFF *************************//

// $(function(){
//   $.stellar({
//     horizontalScrolling: false,
//     verticalOffset: 0
//   });
// });




//************************* TABLETOP STUFF *************************//

window.onload = function() { init(); };

var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1XZucdNCXWzRHNvXYdmCB_Bq3O2p5_6CSnKC5Izo9VLo/pubhtml?gid=0&single=true';

//share the spreadsheet with public. use the share link, change end to /pub instead of edit.

function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: showInfo,
                     simpleSheet: true } )
  }

function showInfo(data) {
  // data comes through as a simple array since simpleSheet is turned on
  // document.getElementById("data").innerHTML = JSON.stringify(data);
  JSON.stringify(data);
  for(var i=0; i<22; i++){
        var pitcherPrice = "";
          if(data[i].price2!=""){
            pitcherPrice = ' &#8857; ' + data[i].price2;
            } 
            else{
              pitcherPrice = "";
            }
        nextupPriceVar = "<span class='nextup_price'> " + data[i].nextprice + "</span>";    
        //console.log(pitcherPrice);    
        beer = ('<li class="beer_name">' + data[i].rowNumber + '. ' + data[i].beername +'</li>');
        brewery_abv = ('<li class="beer_description">' + data[i].brewerylocation + ' | ' + data[i].abv + ' abv</li>');
        next_up = ('<li class="nextup">Next up: ' +  data[i].nextup  + '</li>');
        line = ('<li class="spacemaker"></li>');
        beerprice = ('<li class="beer_price">' + data[i].price1 + '</li>');

        if(i<11){
        	document.getElementById('data1').innerHTML += '<ul>' + beer + brewery_abv + next_up + line + '</ul>';
        }
        else if(i>10){
        	document.getElementById('data2').innerHTML += '<ul>' + beer + brewery_abv + next_up + line + '</ul>';
        }
  }
  update_time = data[2].updated;
  document.getElementById("update").innerHTML = update_time;
}   


//************************* GOOGLE MAP STUFF *************************//
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCNuYFge8HYLm7Px0z1H0QmC91DTAKnIg8"

function initialize() 
{
    var myLatlng = new google.maps.LatLng(47.810624,-122.376625);

    var styles = [
      {
        "stylers": [
          { "invert_lightness": false }
        ]
      },{
      }
    ];

    var styledMap = new google.maps.StyledMapType(styles,
      {name: "Styled Map"});

    var mapOptions = {
      zoom: 16,                       // set the zoom level manually
      scaleControl: false,
      scrollwheel: false,
      center: myLatlng,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);


    var marker = new google.maps.Marker({
          position: myLatlng,
          icon: './img/pin_A.png',
          map: map,
          title: 'Leftcraft'
      });


    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
}

google.maps.event.addDomListener(window, 'load', initialize);
      



