import React, { useState, useEffect } from "react";
import chef from "../chef.jpg";

function Welcome() {
  const [restaurantData, setRestaurantData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/')
      .then(response => response.json())
      .then(data => {
        
        const restaurant = data[0]?.restaurant;

        if (restaurant) {
          setRestaurantData(restaurant);
        } else {
          setError('No restaurant data found');
        }
      })
      .catch(error => {
        setError(`Error fetching data: ${error.message}`);
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="hero flex welcome" id="about-us">
      <div className="welcome-img-container">
        <img src={chef} style={{ height: "450px", width: "350px" }} alt="Chef" />
      </div>
      <div className="welcome-container flex">
        <h3 className="welcome-h3">Who are we ?</h3>
        {error ? (
          <div className="error-message">{error}</div>
        ) : (
          <div className="welcome-heading">
            {restaurantData ? (
              <>
                {restaurantData.name}
              </>
            ) : (
              'Loading...'
            )}
          </div>
        )}
        {restaurantData && (
          <p className="welcome-para">
            {restaurantData.ambiance.description}
          </p>
        )}
        <button className="welcome-btn">Explore Our Story</button>
      </div>
    </div>
  );
}

export default Welcome;
