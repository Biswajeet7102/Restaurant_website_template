import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const RestaurantMap = () => {
  const [restaurantData, setRestaurantData] = useState({
    name: '',
    location: { lat: 0, lng: 0 },
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = 'AIzaSyDQr0v8MScl9Y1VkoRuzIws5sv_BBYHPfw'; 
    const apiUrl = 'http://127.0.0.1:5000/'; 

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const restaurant = data[0]?.restaurant;
        console.log(restaurant.location)

        if (restaurant) {
          const location = {
            lat: restaurant.location.latitude,
            lng: restaurant.location.longitude,
          };

          setRestaurantData({
            name: restaurant.address,
            location: location,
          });
        } else {
          setError('No restaurant data found');
        }
      })
      .catch(error => {
        setError(`Error fetching data: ${error.message}`);
        console.error('Error fetching data:', error);
      });
  }, []);

  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDQr0v8MScl9Y1VkoRuzIws5sv_BBYHPfw">
      <div>
        {error ? (
          <p>{error}</p>
        ) : (
          <>
            <h2>{restaurantData.name}</h2>
            <GoogleMap
              mapContainerStyle={mapStyles}
              center={restaurantData.location}
              zoom={15}
            >
              <Marker position={restaurantData.location} />
            </GoogleMap>
          </>
        )}
      </div>
    </LoadScript>
  );
};

export default RestaurantMap;
