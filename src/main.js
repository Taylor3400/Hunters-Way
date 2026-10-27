import './style.css';

// The Maps key is read from .env (see .env.example). Vite only exposes
// variables that start with VITE_ to the browser.
const mapsKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

if (!mapsKey) {
  console.info('No Google Maps key yet. Add one to .env in Step 2.');
}
