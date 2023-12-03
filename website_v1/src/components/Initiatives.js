import React, { useState, useEffect } from "react";

function SustainabilityInitiatives() {
  const [initiatives, setInitiatives] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/")
      .then((response) => response.json())
      .then((data) => {
        const sustainabilityInitiatives = data[0]?.restaurant.sustainability?.initiatives;

        if (sustainabilityInitiatives) {
          setInitiatives(sustainabilityInitiatives);
        } else {
          setError("No sustainability initiatives found");
        }
      })
      .catch((error) => {
        setError(`Error fetching data: ${error.message}`);
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div id="sustainabilityInitiatives" style={{ textAlign: "center", padding: "20px" }}>
      <h3 className="welcome-h3" style={{ marginTop: "60px" }}>
        Sustainability Initiatives
      </h3>
      <div className="welcome-heading" style={{ margin: "30px 0 60px 0" }}>
        Initiatives performed by our restaurant
      </div>
   
      <div className="row1-container">
        {initiatives.map((initiative, index) => (
          <div className="box box-down cyan" style={{ width: "300px", height: "300px" }}>
            <h3 style={{ fontSize: "1.7rem", marginBottom: "30px" }}>{initiative.name}</h3>

            <p style={{ fontSize: "1.1rem" }}>{initiative.description}</p>
          </div>
        ))}
      </div>
      {error && <p>{error}</p>}
    </div>
  );
}

export default SustainabilityInitiatives;
