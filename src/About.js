import React from 'react';

const About = () => {
  return (
    <div style={{ 
        backgroundImage: 'url(https://wallpapers.com/images/hd/restaurant-in-the-dupont-circle-hotel-washington-dc-cpm1y5c7yfvbyfjj.jpg)', 
        height: '100vh', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px', maxWidth: '600px', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '20px' }}>About Us</h1>
        <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
        We created Eat Enough with a simple goal in mind: help you create healthier eating habits by making it easy and enjoyable to manage your diet. Our small but mighty team is obsessed with making Eat Enough better and we're constantly working on exciting new ways to help you get the most out of the product. As an independent, founder-led business, we deeply appreciate all of our loyal customers, and we're always open to feedback. If you have questions or suggestions, please don't hesitate to reach out!
        </p>
        <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
        Eat Enough is an online platform where we help your diet and nutritional needs customized for your body.All you need to do is enter the amount of calories you want to eat and no of meals you have per day.
        </p>
      </div>
    </div>
  );
};

export default About;
