import React from 'react';

const Spinner = (props) => {
  const { message = "Loading..." } = props
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">
        {message}
      </div>
    </div>
  );
};

// Spinner.defaultProps = {
//   message : 'Loading...'
// };
// ^ Another way of setting default props, if you don't want to set default values when destructuring props

export default Spinner;
