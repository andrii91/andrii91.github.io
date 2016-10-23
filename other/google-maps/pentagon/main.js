var map, circle, circleOptions, setCenter, marker, organizations_markers;

function initialize() {
    var centerPoint = new google.maps.LatLng(56.0163521, 92.8888366); //Волгоград
    var myOptions = {
        zoom: 12,
        center: centerPoint,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }
    map = new google.maps.Map(document.getElementById("my_map"), myOptions);
    
    //радиус окружности - 5 км
    var radius = 2;

    var pentagonCoords = [
    {lat: 56.00687565, lng: 92.87350416},
    {lat: 56.0105705, lng: 92.89324522},
    {lat: 56.01601627, lng: 92.89023135},
    {lat: 56.02050177, lng: 92.88469527},
    {lat: 56.0273969, lng: 92.88396571},
    {lat: 56.02690529, lng: 92.86808703},
    {lat: 56.00687565, lng: 92.87350416}
  ];

  // Construct the polygon.
  var bermudaPentagon = new google.maps.Polygon({
    paths: pentagonCoords,
    strokeColor: '#FFAA00',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#00AAFF',
    fillOpacity: 0.35
  });
  bermudaPentagon.setMap(map);

        var latlng = new google.maps.LatLng(56.0163521, 92.8888366);
        if (distHaversine(latlng, centerPoint) < radius) {
            organizations_markers = new google.maps.Marker({
                    position:latlng,
                    clickable:true
                });
            organizations_markers.setMap(map);
        }
}
  
function loadScript() {
    var script = document.createElement("script");
    script.src = "http://maps.google.com/maps/api/js?sensor=false&callback=initialize";
    document.body.appendChild(script);
}

rad = function(x) {return x*Math.PI/180;}

//эта функция используются для определения расстояния между точками на
//поверхности Земли, заданных с помощью географических координат
//результат возвращается в км
distHaversine = function(p1, p2) {
    var R = 6371; // earth's mean radius in km
    var dLat  = rad(p2.lat() - p1.lat());
    var dLong = rad(p2.lng() - p1.lng());
    
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(rad(p1.lat())) * Math.cos(rad(p2.lat())) * Math.sin(dLong/2) * Math.sin(dLong/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    
    return d.toFixed(3);
}

window.onload = loadScript;