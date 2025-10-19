import React from 'react';
import './TicketCards.css';

const TicketCards = ({ tickets = [] }) => {
  // Default tickets if none provided - these look pretty good
  const defaultTickets = [
    {
      id: 1,
      title: "VIP Experience",
      description: "Premium seating, meet & greet, exclusive merchandise",
      price: "$299",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      featured: true
    },
    {
      id: 2,
      title: "General Admission",
      description: "Standing room, general access to the venue",
      price: "$89",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      featured: false
    },
    {
      id: 3,
      title: "Premium Seating",
      description: "Reserved seating with great views",
      price: "$149",
      image: "https://www.hdwallpapers.in/download/american_rapper_travis_scott_is_sitting_on_brown_couch_wearing_white_dress_hd_travis_scott-2560x1440.jpg",
      featured: false
    }
  ];

  const ticketsToUse = tickets.length > 0 ? tickets : defaultTickets;

  return (
    <section className="ticket-cards">
      <div className="container">
        <h2 className="ticket-cards-title">Choose Your Experience</h2>
        <p className="ticket-cards-subtitle">Select the perfect ticket for your Travis Scott concert experience</p>
        
        <div className="ticket-cards-grid">
          {ticketsToUse.map((ticket) => (
            <div key={ticket.id} className={`ticket-card ${ticket.featured ? 'featured' : ''}`}>
              <div className="ticket-card-image">
                <img src={ticket.image} alt={ticket.title} />
                {ticket.featured && <div className="featured-badge">Most Popular</div>}
              </div>
              
              <div className="ticket-card-content">
                <h3 className="ticket-card-title">{ticket.title}</h3>
                <p className="ticket-card-description">{ticket.description}</p>
                
                <div className="ticket-card-price">
                  <span className="price-amount">{ticket.price}</span>
                  <span className="price-period">per ticket</span>
                </div>
                
                <button className="ticket-card-button">
                  Select Tickets
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TicketCards;

