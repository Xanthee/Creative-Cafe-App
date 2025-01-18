import React, { useEffect } from 'react';

const Map = () => {
  useEffect(() => {
    const loadMap = () => {
      if (!document.querySelector(`script[src*="maps.googleapis.com"]`)) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
      }
    };

    window.initMap = () => {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 50.787109, lng: -1.124131 },
        zoom: 15,
      });

      // Add a marker at 13 James Lind Avenue, PO12 2FB
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
