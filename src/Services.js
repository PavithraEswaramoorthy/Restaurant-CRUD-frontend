import React from 'react';

const Services = () => {
  const backgroundImageUrl = 'https://i.pinimg.com/originals/5c/f3/dc/5cf3dc9b57ad28bc6434f828e11fd83f.jpg';

  const serviceStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: '#ffffff', 
    fontFamily: 'Arial, sans-serif', 
    textAlign: 'center' 
  };

  const menuContainerStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '600px', 
    marginBottom: '50px' 
  };

  const menuItems = [
    { name: 'Spaghetti Carbonara', description: 'Pasta with eggs, cheese, pancetta, and black pepper' },
    { name: 'Margherita Pizza', description: 'Pizza topped with tomatoes, mozzarella, and basil' },
    { name: 'Lasagna Bolognese', description: 'Layered pasta with Bolognese sauce and cheese' },
    { name: 'Tiramisu', description: 'Classic Italian dessert with coffee, mascarpone, and cocoa' }
  ];

  return (
    <div style={serviceStyle}>
      <div style={menuContainerStyle}>
        <h1>Italian Cuisine Menu</h1>
        {menuItems.map((item, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
