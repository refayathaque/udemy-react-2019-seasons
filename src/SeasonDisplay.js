import React from 'react';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
    // JS Ternary Expression
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const seasonConfig = {
  summer : {
    text : "Let's hit the beach!",
    iconName: 'sun'
  },
  winter : {
    text : "Burr it's cold!",
    iconName : 'snowflake'
  }
};

const SeasonDisplay = (props) => {
  const { lat, long } = props
  const season = getSeason(props.lat, new Date().getMonth());
  console.log(season)
  // const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach';
  // const icon = season === 'winter' ? 'snowflake' : 'sun';
  // Another example of JS Ternary Expression
  // ^ Refactored using design pattern above with seasonConfig object and ES6 Destructuring
  const { text, iconName } = seasonConfig[season]
  // When referencing the keys of key-value pairs within an object with a VARIABLE (e.g., const/let) we have to use the syntax objectName[variableName], otherwise, if we know the key we are looking for we can simply do objectName.keyName
  return (
    <div>
      <i className={`${iconName} icon`} />
      {/* ES6 Template Strings */}
      <h1>{text}</h1>
      <i className={`${iconName} icon`} />
    </div>
  );
}

export default SeasonDisplay;
