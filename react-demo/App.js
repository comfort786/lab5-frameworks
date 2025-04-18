import { useState } from "react";

function EventCard({ event }) {
  // Convert USD to ZMW (approximate rate: 1 USD = 25 ZMW)
  const priceInZMW = (event.price * 25).toFixed(2);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        margin: "10px",
        width: "300px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ color: "#093145", marginBottom: "8px" }}>{event.name}</h2>
      <p style={{ color: "#7f8c8d", marginBottom: "8px" }}>
        📅 {event.date} | 📍 {event.location}
      </p>
      <p style={{ marginBottom: "16px" }}>{event.description}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontWeight: "bold", color: "#e67e22" }}>
          ZMW {priceInZMW}
        </span>
        <button
          style={{
            padding: "8px 16px",
            backgroundColor: "#e67e22",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

function ToggleEvents() {
  const [showEvents, setShowEvents] = useState(false);
  const [events] = useState([
    {
      id: 1,
      name: "Zambian Music Festival",
      date: "15 June 2024",
      location: "Lusaka Showgrounds",
      description: "Featuring Chef 187, Macky 2, and other Zambian artists",
      price: 49.99, // USD
    },
    {
      id: 2,
      name: "Victoria Falls Adventure Expo",
      date: "22 July 2024",
      location: "Livingstone",
      description: "Outdoor activities and cultural performances",
      price: 39.99, // USD
    },
    {
      id: 3,
      name: "Copperbelt Trade Fair",
      date: "10 August 2024",
      location: "Kitwe",
      description: "Annual business exhibition and networking event",
      price: 19.99, // USD
    },
  ]);

  return (
    <div style={{ margin: "20px 0" }}>
      <button
        onClick={() => setShowEvents(!showEvents)}
        style={{
          padding: "12px 20px",
          backgroundColor: showEvents ? "#c0392b" : "#27ae60",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginBottom: "15px",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        {showEvents ? "Hide Zambian Events" : "Show Zambian Events"}
      </button>

      {showEvents && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "1200px",
        margin: "0 auto",
        backgroundColor: "#f5f5f5",
      }}
    >
      <h1
        style={{
          color: "#093145",
          borderBottom: "2px solid #e67e22",
          paddingBottom: "10px",
          textAlign: "center",
        }}
      >
        ChainTicket
      </h1>
      <ToggleEvents />
    </div>
  );
}
