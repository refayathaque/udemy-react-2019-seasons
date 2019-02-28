import React, { Component } from 'react';
// ^ ES6 Destructuring
import ReactDOM from 'react-dom';

// Functional Component
// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );
//   return (
//     <div>
//       Hi there!
//     </div>
//   );
// };

// Class-Based Component
class App extends Component {
  // Any time an instance of the class is created the constructor function is the first function that will be called
  constructor(props) {
    // State must be initialized when a component is created, and that can be done here in the constructor function
    super(props); // Ensures that the React.Component's 'constructor' function, with all of it's necessary configuration, gets called
    // ^ Necessary, or else, you will get an error
    // This (below) is the only time we do a direct assignment to `this.state`, we are initializing state here
    this.state = {
      lat: null,
      long: null
    };
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // State can only be updated using the function 'setState'
        // And we NEVER want to do a direct assignment to a state object, e.g., `this.state.lat = position.coords.latitude`, unless we are initializing the state inside the constructor function
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude
        });
        console.log(position)
        // Updating 'state' on a component causes the component to (almost) instantly rerender the component
      },
      (err) => console.log(err)
    );
  }
  render() {
    return (
      <div>
        <p>Latitude: {this.state.lat}</p>
        <p>Longtitude: {this.state.long}</p>
      </div>
    );
  };
};

ReactDOM.render(<App />, document.querySelector('#root'));
