import React, { Component } from 'react';
// ^ ES6 Destructuring
import ReactDOM from 'react-dom';

// Functional Component
// const App = () => {
//
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );
//
//   return (
//     <div>
//       Hi there!
//     </div>
//   );
// };

// Class-Based Component
class App extends Component {
  render () {

    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );

    return (
      <div>
        Hi there!
      </div>
    );
  };
};

ReactDOM.render(<App />, document.querySelector('#root'));
