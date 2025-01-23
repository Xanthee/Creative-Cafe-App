import React, { useEffect } from 'react';

const Map = () => { // Function component that displays Google Map with a marker
  useEffect(() => { // Hook used to run code that loads Google Maps script + initialise the map [ONLY RUNS ONCE COMPONENT MOUNTS]
    const loadMap = () => { // Checks if Google Maps script is already loaded, IF NOT THEN IT CREATES AND APPENDS A SCRIPT ELEMENT TO LOAD THE API
      if (!document.querySelector(`script[src*="maps.googleapis.com"]`)) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
      }
    };

    window.initMap = () => { // initialises the map.
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 50.787109, lng: -1.124131 },
        zoom: 15, // map centered at the specific latitude and longitude with a zoom level of 15
      });
      // Adding a marker
      new google.maps.Marker({
        position: { lat: 50.787109, lng: -1.124131 },
        map: map,
        title: '13 James Lind Avenue, PO12 2FB',
      });
    };

    loadMap();
  }, []);

  return <div id="map" style={{ height: '100vh', width: '100%' }} />;
};

export default Map;
