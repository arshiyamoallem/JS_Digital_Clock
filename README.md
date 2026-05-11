# JS Digital Clock

A simple digital clock built with HTML, CSS, and JavaScript that displays the current local time in 12-hour format, updating every second.

## Features

- Displays current local time in 12-hour format (HH:MM:SS)
- Updates every second using `setInterval()`
- Leading zeros for single digit hours, minutes, and seconds
- Clean, minimal dark theme UI

## Files

- `index.html` — clock layout and structure
- `style.css` — styling and centering
- `script.js` — time logic and DOM updates

## How to Use

1. Open `index.html` in any modern browser
2. The clock will display immediately and update every second

## How to Run

No installation needed — just open `index.html` directly in your browser.

## What I Learned

- Using `setInterval()` to run code repeatedly every second
- Working with the `Date` object to get hours, minutes, and seconds
- Converting 24-hour time to 12-hour format using the modulo operator (`%`)
- Updating the DOM in real time
- Centering elements with flexbox

## Possible Improvements

- Add AM/PM indicator
- Add the current date below the clock
- Add a toggle between 12-hour and 24-hour format
- Add timezone support