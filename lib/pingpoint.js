var pingpoint = module.exports;

var request = require('request');
var util = require('util');

const baseUrl = 'https://pingpoint.io/api/v1';
// const baseUrl = 'http://localhost:3000/api/v1';

pingpoint.ping = function(apiKey,event,payload,callback){
  request.post(baseUrl + '/ping',{json: {api_key: apiKey, event: event, payload: payload}},function(error,response,body){
    if(error){
      callback(error)
    }else if(response.statusCode < 200 || response.statusCode > 299){
      callback(response.statusCode + ': ' + JSON.stringify(body))
    }else{
      callback(null,body)
    }
  })
}
