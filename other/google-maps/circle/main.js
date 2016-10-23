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
    
    circleOptions = {
        center: centerPoint,
        fillColor: "#00AAFF",
        fillOpacity: 0.5,
        strokeColor: "#FFAA00",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        clickable: false,
        radius: radius*1000
    }

    //рисуем окружность
    circle = new google.maps.Circle(circleOptions);
    circle.setMap(map);

    //устанавливаем маркеры организаций
    // organizations_markers = [];
    // for (var i = 0; i < organizations.length; i++) {
        // var ll = organizations[i].coordinates.split(',');
        var latlng = new google.maps.LatLng(56.0163521, 92.8888366);
        if (distHaversine(latlng, centerPoint) < radius) {
            organizations_markers = new google.maps.Marker({
                    position:latlng,
                    clickable:true
                });
            organizations_markers.setMap(map);
        }
    // }
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