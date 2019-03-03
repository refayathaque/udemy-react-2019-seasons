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

// Component lifecycle functions are functions we can optionally (render is not optional) define in our class-based components
// constructor, render, componentDidMount, componentDidUpdate, componentWillUnmount

// Class-Based Component
class App extends Component {
  // Any time an instance of the class is created the constructor function is the first function that will be automatically called
  constructor(props) {
    // State must be initialized when a component is created, and that can be done here in the lifecycle constructor function
    super(props); // Ensures that the React.Component's 'constructor' function, with all of it's necessary configuration, gets called
    // ^ Necessary, or else, you will get an error
    // This (below) is the only time we do a direct assignment to `this.state`, since we are initializing state here
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
    // Perfect place to do some initial data loading! E.g., API calls to fetch data
    // React Community Best-Practice and Official React Documentation advise against data loading in the constructor lifecycle function, they suggest that initial data loading happen here in the componentDidMount lifecycle method. This is recommended to ensure more clear code, e.g., a new developer will know that all API calls/data loading code are in this lifecycle function and won't have to look elsewhere
    console.log('My component was rendered to the screen');
  }
  componentDidUpdate() {
    // This lifecycle function will be automatically called when the component updates itself and re-renders because we called `setState`
    // Will get called every time the component gets updated
    // Good place to do more data loading when state changes, or our component gets updated props from its parent. E.g., we want to execute an API call every single time a user clicks on a button, or enters text to an input
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
