import React from "react";

function Cards() {
  return (
    <div id="our-services">
      <h3 className="welcome-h3" style={{ textAlign: "center", marginTop: "30px" }}>
        Our Services
      </h3>
      <div className="welcome-heading" style={{ textAlign: "center", margin: "30px 0" }}>
        Why choose us ?
      </div>
      <div className="row1-container">
        <div className="box box-down cyan">
          <img
            src="https://preview.colorlib.com/theme/restauco/assets/img/icon/services1.svg"
            alt=""
            style={{ marginBottom: '20px' }}
            
          />
          <h2>Various Menus</h2>

          <p>
          Discover culinary excellence through our diverse menus, thoughtfully curated to satisfy every palate with exquisite flavors.
          </p>
        </div>

        <div className="box box-down cyan">
          <img
            src="https://preview.colorlib.com/theme/restauco/assets/img/icon/services2.svg"
            alt=""
            style={{ marginBottom: '20px' }}
          />
          <h2>Pocket Friendly Delivery</h2>
          <p>
          Affordable gourmet at your fingertips! Unleash a palate-pleasing experience with our delivery menus, where flavor meets savings effortlessly.
          </p>
        </div>
        <div className="box box-down cyan">
          <img
            src="https://preview.colorlib.com/theme/restauco/assets/img/icon/services3.svg"
            alt=""
            style={{ marginBottom: '20px' }}
          />
          <h2>Best Offers</h2>
          <p>
          Experience top-notch dining without breaking the bank! Our Best Offers bring you deliciousness and savings effortlessly.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
