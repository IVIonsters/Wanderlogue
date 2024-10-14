import "./cityCard.css";

function CityCard() {
  return (
    <div className="cityCard">
      <img className="cityImg" src="https://images.unsplash.com/photo-1522582324369-2dfc36bd9275?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Paris" />
      <div className="cityInfo">
        <div className="location">
          <img className="locationIcon" src="/images/location.png" alt="location icon" />
          <p className="countryLocation">France</p>
          <a className="googleMaps" href="https://example.com" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
        </div>
        <h2 className="title">Eiffel Tower</h2>
        <p className="dates">5 Apr, 2023 - 12 Apr, 2023</p>
        <p className="description">Paris, the City of Lights, is renowned for its art, culture, and romance. From the grandeur of the Eiffel Tower to the charm of Montmartre, every corner of Paris tells a timeless story of beauty and elegance.</p>
      </div>
    </div>
  );
}

export default CityCard;