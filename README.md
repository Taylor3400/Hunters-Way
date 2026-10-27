# Hunter's Way

A phone-friendly web app that shows where and when you can legally hunt in Florida.
See `CLAUDE.md` for the full project brief.

## Run it on your computer

1. Install [Node.js](https://nodejs.org) (the LTS version).
2. In this folder, run:
   ```
   npm install
   npm run dev
   ```
3. Open the `Local:` link it prints (usually http://localhost:5173).
   To try it on your phone, connect to the same Wi-Fi and open the `Network:` link.

## Project layout

```
index.html      the page itself
src/main.js     the app code (map, filters, tap panel will live here and in src/)
src/style.css   how it looks
public/         icons and files served as-is (app icon comes in Step 8)
.env.example    copy to .env and add your Google Maps key (Step 2)
```

Always verify seasons and rules with FWC at https://myfwc.com/hunting/.
