var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <p>{temp} degrees in {location}</p>
    </div>
  );
};

module.exports = WeatherMessage
