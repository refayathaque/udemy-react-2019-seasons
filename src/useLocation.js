import { useState, useEffect } from 'react';

const useLocation = () => {
  const [lat, setLat] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
      },
      (err) => {
        setErrorMessage(err.message)
      }
    );
  }, []);
  // We want to call `useEffect` just once (when the component mounts), so we will pass in an empty array as the second argument to `useEffect`

  return [lat, errorMessage]
  // Current Hooks community convention advocates for the use of Arrays instead of Objects when returning values (outputs) from Custom Hooks (not ideal however, because what if you change the signature and add another element to the Array?)
};
// Custom Hook

export default useLocation;
