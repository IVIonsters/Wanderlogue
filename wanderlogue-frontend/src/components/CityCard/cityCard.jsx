/* eslint-disable react/prop-types */
import "./cityCard.css";

function CityCard({city}) {

  console.log(city);
  return (
    <div className="cityCard">
      <img className="cityImg" src={city.imageUrl} alt="Location Destination Photo" />
      <div className="cityInfo">
        <div className="location">
          <img className="locationIcon" src="/images/location.png" alt="location icon" />
          <p className="countryLocation">{city.location}</p>
          <a className="googleMaps" href={city.googleMapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
        </div>
        <h2 className="title">{city.title}</h2>
        <p className="dates">{city.startDate} - {city.endDate}</p>
        <p className="description">{city.description}</p>
      </div>
    </div>
  );
}

export default CityCard;