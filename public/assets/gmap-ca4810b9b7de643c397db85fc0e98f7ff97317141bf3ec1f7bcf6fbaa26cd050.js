function initialize_profile(t){null!=t&&""!=t||(t="Berlin");var e=document.getElementById("map_for_user_profile");geo=new google.maps.Geocoder,null!=e&&geo.geocode({address:t},function(t,n){if(n==google.maps.GeocoderStatus.OK){var i=t[0].geometry.location,r={zoom:5,center:i,mapTypeId:google.maps.MapTypeId.ROADMAP};map=new google.maps.Map(e,r);new google.maps.Marker({position:i,map:map})}else alert("Sorry. We are not able to display the location on Google Maps. Maybe you should edit your location.")})}var markers=new Array;