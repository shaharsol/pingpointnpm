# PingPoint API for nodejs

## PingPoint

[PingPoint](https://pingpoint.io) is a SaaS that helps you notify stakeholders of important business logic events that occur in your organization. You can think of it as a nagios for people who are not in IT, but rather sales, marketing, support etc.

## Installing

```js
npm install pingpoint
```

## Usage
```js
var pingpoint = require('pingpoint');

pingpoint.ping('YOUR_API_KEY','Important user signup',{
  name: 'Mark Zuckerberg'
})
```

You can also add a callback:
```js
var pingpoint = require('pingpoint');

pingpoint.ping('YOUR_API_KEY','Important user signup',{
  name: 'Mark Zuckerberg'
},function(err){
  if(err){
    console.log(err);
  }else{
    // ping was successful
  }
})
```
