import React, { useEffect } from "react";

const KeyMap = () => {
  useEffect(() => {
    const initializeMap = () => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: -1.286389, lng: 36.817223 }, // Coordinates for Nairobi, Kenya
        zoom: 6,
      });

      const input = document.getElementById("map-search");
      const searchBox = new window.google.maps.places.SearchBox(input);
      
      map.addListener("bounds_changed", () => {
        searchBox.setBounds(map.getBounds());
      });

      searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();
        if (places.length === 0) {
          return;
        }

        const bounds = new window.google.maps.LatLngBounds();
        places.forEach((place) => {
          if (!place.geometry || !place.geometry.location) {
            console.log("Returned place contains no geometry");
            return;
          }

          bounds.extend(place.geometry.location);
        });
        map.fitBounds(bounds);
      });
    };

    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places`;
      script.async = true;
      document.body.appendChild(script);
      script.addEventListener("load", initializeMap);
    } else {
      initializeMap();
    }
  }, []);

  return (
    <div className="map-container">
      <input id="map-search" type="text" placeholder="Search counties..." className="form-control mb-2" />
      <div id="map" style={{ height: "200px", width: "100%" }}></div>
    </div>
  );
};

export default KeyMap;
