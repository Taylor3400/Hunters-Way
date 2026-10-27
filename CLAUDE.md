# Florida Hunting App

A mobile-friendly web app that shows where and when I can legally hunt in Florida.

## Core features
- Google Maps in satellite/hybrid view, with a topo/terrain toggle
- Florida FWC boundary layers: Wildlife Management Areas (WMAs), WMA entrances, hunting zones (A, B, C, D) and Deer Management Units (DMUs)
- Filter by species, zone/DMU, WMA, season type and date to find where and when you can hunt
- Tap any spot: show which WMA or zone/DMU it is in, what species are in season there today, season type, and a link to the official FWC source
- Live weather for the tapped spot from the National Weather Service API (api.weather.gov)
- Use my phone GPS to show my location and the zone I am standing in

## Rules logic
- If a point is inside a WMA, show that WMA's info and brochure link; WMA rules override statewide zone seasons
- Otherwise, show the zone/DMU seasons from a local seasons data file
- Never present our data as the final word: always link to myfwc.com and show when the data was last updated

## Coverage and filtering
- Covers all of Florida: every hunting zone (A, B, C, D), every DMU and every WMA. No single "home zone".
- Covers all huntable species in the seasons data (e.g. deer, turkey, wild hog, small game, migratory birds, waterfowl, alligator, furbearers), not just a few.
- Users filter to find what they want to do:
  - by species (one or several)
  - by zone and DMU, and by WMA
  - by season type (archery, crossbow, muzzleloader, general gun, etc.)
  - by date ("in season today" or a chosen date)
- The map highlights the areas that match the active filters, and a list view shows the matching seasons/areas with FWC source links.

## Data sources
| Data | Source | Notes |
|---|---|---|
| WMA boundaries | https://gis.myfwc.com/mapping/rest/services/Open_Data/Wildlife_Management_Areas_Florida/MapServer | Can return GeoJSON; FWC calls it a general reference map |
| WMA entrances | https://gis.myfwc.com/mapping/rest/services/Open_Data/Wildlife_Management_Area_Entrances_Florida/MapServer | Points for gate/entrance pins |
| Hunting zones and DMUs | FWC open data portal: geodata.myfwc.com | Search for the hunting zone or deer management unit layer |
| Season dates and rules | myfwc.com hunting regulations pages | Updated yearly; entered by hand into the seasons file |
| WMA-specific rules | myfwc.com WMA brochures | Each WMA has its own dates and rules, separate from zone seasons |
| Live weather | National Weather Service API: api.weather.gov | Free, no key; requires a User-Agent header |
| Map and satellite view | Google Maps JavaScript API | Satellite/hybrid map type; needs an API key |

## Working style
- I am a beginner. Explain what you change in plain language.
- Build one feature at a time and tell me how to test it.
- Keep API keys in a .env file, never in the code, and make sure .env is in .gitignore.
- Commit to git after each working step.
