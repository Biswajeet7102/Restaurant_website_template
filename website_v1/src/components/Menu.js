import React, { useState, useEffect } from "react";
import "../App.css";

const MenuItem = ({ name, description, price, ingredients, nutritional_info, seasonal_availability, customizable_options, category }) => {
  const formatNutritionalInfo = (nutritional_info) => {
    const { calories, carbohydrates, fat, protein } = nutritional_info;
    return `Calories: ${calories}, Carbs: ${carbohydrates}, Fat: ${fat}, Protein: ${protein}`;
    
  }
  const getRandomImage = (itemName) => {
    
    const formattedName = itemName.replace(/\s+/g, '-').toLowerCase();
   
    return `https://source.unsplash.com/100x100/?${formattedName}`
  };
  const imageUrl = getRandomImage(name);
  return (
    <article className="menu-item" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'hidden',marginBottom:"20px",marginTop:"30px" }}>
      <div className="item-info" style={{ display: 'flex', alignItems: 'center', padding: '20px',background: 'rgba(240, 240, 240, 0.9)' }}>
        <img src={imageUrl} alt={name} style={{ marginRight: '20px', borderRadius: '8px', flex: '0 0 100px' }} />
        <div style={{ flex: '1', textAlign: 'left' }}>
          <header>
            <h4 className="price">{name} ${price}</h4>
          </header>
          <p className="item-text">{description}</p>
          <p>Ingredients: {ingredients.join(', ')}</p>
          <p>Nutritional Info: {formatNutritionalInfo(nutritional_info)}</p>
          <p>Seasonal Availability: {seasonal_availability.join(', ')}</p>
          {customizable_options && (
            <p>Customizable Options: {customizable_options.join(', ')}</p>
          )}
        </div>
  </div>
</article>

  );
};

const Menu = () => {
  const [restaurantData, setRestaurantData] = useState(null);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    
    fetch('http://127.0.0.1:5000/')
      .then(response => response.json())
      .then(data => {
        const restaurant = data[0]?.restaurant.menu;
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

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const filteredItems = restaurantData
    ? restaurantData.categories
      .flatMap(category => (selectedCategory === "All" || selectedCategory === category.name) ? category.items.map(item => ({ ...item, category: category.name })) : [])
      .concat(
        (selectedCategory === "All" || selectedCategory === restaurantData.seasonal_menu.name)
          ? restaurantData.seasonal_menu.items.map(item => ({ ...item, category: restaurantData.seasonal_menu.name }))
          : []
      )
    : [];

  return (
    <div id="menu" className="menu">
      <h3 className="welcome-h3" style={{ textAlign: "center",marginTop: "20px"}}>Discover</h3>
      <div className="welcome-heading" style={{ textAlign: "center",marginBottom: "20px"}}>Our Wildest Range of Food</div>
      
      {restaurantData ? (
        <div>
          <div className="menu-buttons" style={{ textAlign: "center",padding: "20px"}}>
          <button style={{ marginRight: '30px',padding: '10px 20px',fontSize: '1rem'}} onClick={() => handleCategoryClick("All")} className="hover-highlight">
            All
          </button>
          {restaurantData.categories.map(category => (
              <button key={category.name} style={{ marginRight: '30px',padding: '10px 20px',fontSize: '1rem' }} onClick={() => handleCategoryClick(category.name)} className="hover-highlight">
                {category.name}
              </button>
            ))}
          </div>
          <div className="section-center alternating-items">
            {filteredItems.map((item, index) => (
              <MenuItem
                key={item.name}
                {...item}
              />
            ))}
          </div>
        </div>
      ) : (
        <p>{error || "Loading..."}</p>
      )}
    </div>
  );
};

export default Menu;