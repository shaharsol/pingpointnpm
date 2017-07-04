# PingPoint API for nodejs

## PingPoint

(PingPoint)[https://pingpoint.io] is a SaaS that helps you notify stakeholders of important business logic events that occur in your business. Nagios for example serves your IT people. PingPoint serves all the rest.

## Installing

```
npm install pingpoint
```

## Usage
```
var pingpont = require('pingpont');

pingpoint.ping('YOUR_API_KEY','Important user signup',{
  name: 'Mark Zuckerberg'
})
```
