# PingPoint API for nodejs

## PingPoint

[PingPoint](https://pingpoint.io) is a SaaS that helps you notify stakeholders of important business logic events that occur in your organization. You can think of it as a nagios for people who are not in IT, but rather sales, marketing, support etc.

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
