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

// Anytime you go from a single line JSX state to a multiline JSX statement make sure you get rid of the ; after the closing div tag
// return <div>helloWorld</div>;
// return(
//   <div>
//     hellWorld
//   </div>
// )

// Component Lifecycle functions are functions we can optionally (render is not optional) define in our class-based components
// constructor, render, componentDidMount, componentDidUpdate, componentWillUnmount

// Class-Based Component
class App extends Component {
  // Any time an instance of the class is created the constructor function is the first function that will be automatically called
  constructor(props) {
    // State must be initialized when a component is created, and that can be done here in the constructor function
    super(props); // Ensures that the React.Component's 'constructor' function, with all of it's necessary configuration, gets called
    // ^ Necessary, or else, you will get an error
    // This (below) is the only time we do a direct assignment to `this.state`, we are initializing state here
    this.state = {
      lat: null,
      long: null,
      errorMessage: ''
    }
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
      (err) => {
        this.setState({
          errorMessage: err.message
        })
        // Updating 'state' is an additive process, ^ won't affect `this.state.lon` or `this.state.lat`
        console.log(err)
      }
    );
  }
  componentDidMount() {
    // This lifecycle function will be automatically called once, when our component first gets rendered on to the screen
    console.log('My component was rendered to the screen');
  }
  componentDidUpdate() {
    // This lifecycle function will be automatically called when the component updates itself and re-renders because we called `setState`
    // Will get called every time the component gets updated
    console.log('My component was just updated - it re-rendered!');
  }
  render() {
    // Conditional Rendering
    if (this.state.errorMessage && (!this.state.lat && !this.state.long)) {
      return(
        <div>
          Error: {this.state.errorMessage}
        </div>
      );
    }
    if (!this.state.errorMessage && (this.state.lat && this.state.long)) {
      return(
        <div>
          Latitude: {this.state.lat}
          <br />
          Longtitude: {this.state.long}
          <br />
        </div>
      );
    }
    return(
      <div>
        Loading!
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
