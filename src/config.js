// YouTube Data API configuration.
//
// YOUTUBE_API_KEY: create one at https://console.cloud.google.com/apis/credentials
//   and enable "YouTube Data API v3". Set it as REACT_APP_YOUTUBE_API_KEY in a
//   local .env file (never commit the key). Remember to create it as a RESTRICTED
//   API key to limit abuse on a public site.
//
// YOUTUBE_CHANNEL_ID: the 24-character channel id (starts with "UC").
//   Find it at https://www.youtube.com/account_advanced
//
// Swap in your own values once you have them.
export const YOUTUBE_API_KEY =
  process.env.REACT_APP_YOUTUBE_API_KEY || "YOUR_YOUTUBE_API_KEY_HERE";

export const YOUTUBE_CHANNEL_ID =
  process.env.REACT_APP_YOUTUBE_CHANNEL_ID || "UC_x5XG1OV2P6uZZ5FSM9Ttw";

// Base URL of the site hosting the Netlify functions.
// Override with REACT_APP_API_URL when running locally or from another origin.
export const API_BASE_URL =
  process.env.REACT_APP_API_URL || "https://mern-stack-trial.netlify.app/";
