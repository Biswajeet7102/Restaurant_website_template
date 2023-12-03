import React, { useState, useEffect } from "react";
import "../chef.css";
import signatureDish from "../signatureDish.jpg";

const Chef = () => {
  const [chefData, setChefData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/")
      .then((response) => response.json())
      .then((data) => {
        const chef = data[0]?.restaurant.chef;

        if (chef) {
          setChefData(chef);
        } else {
          setError("No chef data found");
        }
      })
      .catch((error) => {
        setError(`Error fetching data: ${error.message}`);
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="hero-container2 flex">
        <div className="hero-heading">Meet Our Chef</div>
        <p className="hero-para">{chefData && <p className="p__opensans">{chefData.bio}</p>}</p>
        {chefData && (
          <p className="p__opensans" style={{ textAlign: "center" }}>
            <p className="welcome-h4" style={{ color: "black" }}>
              Signature Dish
            </p>
            <p className="welcome-h4" style={{ fontSize: "2.2rem" }}>
              {" "}
              {chefData.signature_dish}
              <div>
                <img className="signatureDish" src={signatureDish} />
              </div>
            </p>
          </p>
        )}
        <p className="welcome-h5">{chefData?.name}</p>
        <h3 className="welcome-h4" style={{ color: "grey" }}>
          Chef & Founder
        </h3>
      </div>

      {error && <p>{error}</p>}
    </div>
  );
};

export default Chef;
