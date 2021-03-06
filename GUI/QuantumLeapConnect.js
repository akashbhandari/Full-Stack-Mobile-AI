//JS for the QuantumLeapConnet.html

//Variables defined

  // Student defined
      var lat ;//=  42.920250;
      var lng ;//= -73.239190;
      var title; // = "Ursula's Office";
      var contentBlub; //"Oliver can be found here";
      var essayLink;
      var essayTitle;
      var goElseWhereLink;
      var goElseWhereTitle;
      

  // Map necessary (only in intiMap?)
      var map;
      var marker;

      //function defined to fetch the infomration given by the ids
      function processInfo() {
           lat = Number(document.getElementById("lat").value);
           lng = Number(document.getElementById("lng").value);
          initMap();   

} 
  //initializing the map with the respective ids: lat and lng
      function initMap() {
           lat = Number(document.getElementById("lat").value);
           lng = Number(document.getElementById("lng").value);
           title = document.getElementById("title").value;
           contentBlurb = document.getElementById('contentBlurb').value;
           essayLink = document.getElementById('essay').value;
           essayTitle = document.getElementById('essayTitle').value;
           goElseWhereLink = document.getElementById('goElseWhereLink').value;
           goElseWhereTitle = document.getElementById('goElseWhereTitle').value;

        //variable called place that contains a dicionanry of lat and lng
        var place = {lat: lat,  lng: lng};
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 3,
          center: place
        });
        
        marker = new google.maps.Marker({
          position: place,
          map: map,
          title: title
        });
        
        var contentString =  BuildInfoContent(contentBlurb,essayLink,essayTitle,goElseWhereLink,goElseWhereTitle);

        
         var infowindow = new google.maps.InfoWindow({
          content: contentString});

        marker.addListener('click', function() {
          infowindow.open(map, marker);});

        
        //function that sets the zoom out limits and prevents the user from zooming out of the scope of the world. Reduces the repetition of continents.
        var opt = {minZoom: 2, maxZoom: 4};
          
        map.setOptions(opt);  
        
  
  }

  //function that's building the content/info in the pagec
  function BuildInfoContent(blurb, url,urlText,aurl,aurlText) {

          var heading = document.createElement("h3");
          heading.appendChild(document.createTextNode(blurb));
// First link
          var txt = document.createTextNode('More information: ');
          var anchor = document.createElement("A");
          anchor.href = url;
          var node = document.createTextNode(urlText);
          anchor.appendChild(node);

// Second link:
          var txt2 = document.createTextNode('A related link: ');
          var anchor2 = document.createElement("A");
          anchor2.href = aurl;
          var node2 = document.createTextNode(aurlText);
          anchor2.appendChild(node2);

          var element = document.createElement("div");
          element.appendChild(heading);
          element.appendChild(txt);
          element.appendChild(anchor);
          element.appendChild(document.createElement("p"));
          element.appendChild(txt2);
          element.appendChild(anchor2);
          return element;

}
  
    