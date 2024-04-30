# Covid-Scheduler
[![Build Status](https://travis-ci.org/5tarlight/covid-scheduler.svg?branch=master)](https://travis-ci.org/5tarlight/covid-scheduler)
> 2020 HYU Gifted

## Requirements
- Node.js
- npm (or yarn)

## Installation
1. clone this repo and install all dependencies
2. rename `secret.inc.js` into `secret.js` (you can also copy and rename)
3. fill `secret.js` (Korean Covid-Service key, and your server's ip or domain)
4. build frontend (`yarn build` in /frontend)
5. launch backend (`yarn start` in /backend)
6. launch frontend (`serve -s build -l 80 in /frontend`)
