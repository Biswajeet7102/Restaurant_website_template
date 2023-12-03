import React, { useState, useEffect } from "react";

function Awards() {
  const [awards, setAwards] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/")
      .then((response) => response.json())
      .then((data) => {
        const restaurantAwards = data[0]?.restaurant.awards;

        if (restaurantAwards) {
          setAwards(restaurantAwards);
        } else {
          setError("No restaurant awards found");
        }
      })
      .catch((error) => {
        setError(`Error fetching data: ${error.message}`);
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div id="restaurantAwards" style={{ textAlign: "center", padding: "20px" }}>
      <h3 className="welcome-h3" style={{ marginTop: "60px" }}>
        Awards and Recognitions
      </h3>
      <div className="welcome-heading" style={{ margin: "30px 0 60px 0" }}>
        Honors received by our restaurant
      </div>
      <div className="row1-container">
        {awards.map((award, index) => (
          <div className="box box-down cyan" style={{ width: "300px", height: "300px" }}>
            <h3 style={{ fontSize: "1.7rem", marginBottom: "5px" }}>{award.award}</h3>
            <br />
            <h2 style={{ fontSize: "1.7rem", marginBottom: "10px" }}>{`Year: ${award.year}`}</h2>
            <br />

            <p style={{ fontSize: "1.2rem" }}>{`Organization: ${award.organization}`}</p>
          </div>
        ))}
      </div>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Awards;
