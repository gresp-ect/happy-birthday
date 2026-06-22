# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static Happy Birthday greeting page with animated effects (balloons, lights, cake, candles). Based on [AJLoveChina/birthday](https://github.com/AJLoveChina/birthday) with custom Chinese text and images.

## Running Locally

```bash
# Python
python -m http.server 8081

# Node.js (requires npm install first for assets/package.json dependencies)
npx http-server -p 8081
```

Visit http://localhost:8081

## Architecture

- **index.html** — Main page with sequential button-driven UI (turn on lights → play music → decorate → balloons → cake → candles → message)
- **config.js** — User-customizable content: `texts` (array of message lines), `imgs` (map of text→image path), `desc` (button labels)
- **custom.js** — Reads `config.js` and populates the DOM with text/image elements and button labels
- **assets/effect.js** — All animation logic: jQuery click handlers that trigger sequential fade-in/animation steps using `.animate()` and `.fadeIn()` with `.delay()` chains

## Key Implementation Details

- The flow is strictly sequential — each button fades out, delays, then reveals the next button via jQuery promise chains
- Balloon animations use recursive `loopN()` functions that call themselves on completion for continuous movement
- Styles use LESS (compiled client-side via `assets/less.min.js`) from `assets/cake.less`
- All vendor libraries are vendored in `assets/` (jQuery, Bootstrap, less.js) — no CDN dependencies at runtime
