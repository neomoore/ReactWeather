var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application built with React. I have built this for the Complete React Web App developer course.</p>
      <p>Here are some of the tools I used.</p>
      <ul>
        <li><a href="https://facebook.github.io/react">React</a> - This was the javascript framework used</li>
        <li><a href="http://weathermap.org">Open Weather Maps</a> - I used Open Weather Map to search for weather data by city name.</li>
      </ul>
    </div>
  )
}

module.exports = About;
