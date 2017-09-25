function init() {
        var marker_image = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzU5MEVENUI2ODY0MTFFN0EzNzZCMzdDNEEwN0E4MDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzU5MEVENUM2ODY0MTFFN0EzNzZCMzdDNEEwN0E4MDYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NTkwRUQ1OTY4NjQxMUU3QTM3NkIzN0M0QTA3QTgwNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NTkwRUQ1QTY4NjQxMUU3QTM3NkIzN0M0QTA3QTgwNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsJvA/sAAARuSURBVHja1FpNSFRRFD7WGGommZX/fwVGuhgYK2hZQbpxoWAqBZqEJEK1aWmEtROkNk0hxBiaNS2E2khqCiIDOlobS42mVFAwxR9ExIV1zpvzptfMvHGce+fvgw+f+t4957vv3nPPPe/GNDQ0gCRkIy8hzyHPIPOQx5GHkTHITeQy8hdyGmlHDiLnZRg3CD6fg6xFViML97j3GLMAeVXz96/IN8hXyNlAHTkQ4HNGpBX5E9nihwhfKOQ2HNymMRRCTiItyM/ISoGO0POlktu2sK2gCKnksV3LYz5YiGEb02xTmpBDyGf82o9C6HCUbZrZByEhicgPyEYIH26zD4mBCklAfnSLMOHCVfYlYb9CDnEvXITIAfnyXm+Y6Ql5grwMkYcryKf+CqkK85zwZ85U7yUkA/kcIh9m9lVXSGuIQ6xIaG7VE2JC1kD0oIZ99hDyIMgrdjAygAfuQnKRZaH2pKCgAEwmk0gT5HO+No2/ITkB9ImkpCSoq6uDoqIi5ffe3l7o6ekJNNG8SW9GFXJd1Lny8nLIzs6G+fl5mJychJmZGd23UF9fD8nJybL6pUoVQju7s6IiSktLlWvqZbpeXV2FhYUFRdjs7CxMTEwoIpqamiAuLs717Pb2NgwMDAiNUOQpg4wVnBx0B/U4UR0+5DBBK4IwNDQEGxsboi5cOlhcXHwLLy6ItDIyMgLr6+vK0IqPj/e+pzYYFGpht9uhq6tLxvCaIyH38OK0cEtzc9Df3w+xsbGQkpKiK0gror29XdY8WSchD7koIAVTU1MwOjqqDKHU1FSPt6Ciu7sbVlZWpO6TT8gOrzTmx8bGfN6Tn58vNWUhIUnBWOjco5NHHSknR6bJIwYZrZSUlCg/bTYbpKWl7SmCkJmZKbXzSMiGyFvRriEVFRVKmHUXQRN7eXnZdR8hPT1dWeElhF7CJg2t3zJ7xpsIik6UgiwuLv73P6PRKMvsKgn5IdICOdjZ2ela8HyFWPcVXOI8cZCQGdFWhoeHobm52aPHx8fHPe5zOByu37OysmQJmSYhdlkht62tTcmxVOTm5nrc19fX929fnZEhS8gXEvJJ5vphtVp95mCUPFJ2TII7OjpkmR6kqEXfJ76JZsBaR2l/QRPZbDZ7vcdisbiES8B3miPqOkKZ22NZ3UMBwNdGSZIAFW+1W10SsgvRB/L5pVbIL3CWSKMN5PNP9yrKI+SfKBJBvrZ4KwdR0O+OIiHk64Q3IYT7yLUoELHGvoKekAWI7AK2ikb2VVcIgT4VR3Ih+wX7CHsJIdyVueJLBPl0R2+r6w074CxH2iJIhI192tmPEMIW/Pt2F26o3zK3fBUffO68uBdehHlOlLEvEKgQdZjR565rIQ7NZKuKbe/4Uw7yF+/AeernVZAzgD9sg2xZ/X1ov58SlsB5vMLEwmQmmrvcpoltLO23ihLQjoyHmnrMqUZgPzOFfA2Cx5xE61pznGw+YlF08Ow8OEv9eeA8eJaoCRzqwTOqE1ApcpDbEMZfAQYA+MFBE3ZSwC8AAAAASUVORK5CYII=";
          var locations = [
        ['<b>United States,</b><br> WebPlanex Travel', 37.2756024, -104.6568059, 1, marker_image],
        ['<b>India,</b><br> WebPlanex Travel', 21.3696491, 76.86462, 2,  marker_image],
        ['<b>Austrlia,</b><br> WebPlanex Travel', -24.872942, 134.738207, 3,  marker_image],
        ['<b>China,</b><br> WebPlanex Travel', 34.5354888, 101.7707302, 4,  marker_image],
        ['<b>Egypt,</b><br> WebPlanex Travel', 26.7743593, 29.3029354, 5,  marker_image],
        ['<b>Russia,</b><br> WebPlanex Travel', 60.2818613, 100.6627919, 6,  marker_image],
        ['<b>South Africa,</b><br> WebPlanex Travel', -16.7357462, 24.6412633, 7,  marker_image],
        ['<b>Brazil,</b><br> WebPlanex Travel', -16.8096172,-56.9081813, 8,  marker_image]


      ];
      var map = new google.maps.Map(document.getElementById('reservation-map'), {
        zoom: 3,
        scrollwheel: false,
        center: new google.maps.LatLng(35.92, 100.25),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      var infowindow = new google.maps.InfoWindow();
      var marker, i;
      for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i][1], locations[i][2]),
          icon: locations[i][4],
          map: map
        });
        google.maps.event.addListener(marker, 'click', (function (marker, i) {
          return function () {
            infowindow.setContent(locations[i][0]);
            infowindow.open(map, marker);
          }
        })(marker, i));
      }
    }