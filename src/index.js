import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from 'SeasonDisplay';
import Spinner from 'Spinner';
import useLocation from 'useLocation';

const App = () => {
  const [lat, errorMessage] = useLocation();
  // Es6 Array Destructuring

  let content;
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />
  } else {
    content = <Spinner />
  }

  return (
    <div className="wrapper">
      {content}
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));
