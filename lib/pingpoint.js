var pingpoint = module.exports;

var request = require('request');

const baseUrl = 'https://pingpoint.io/api/v1';
// const baseUrl = 'http://localhost:3000/api/v1';

pingpoint.alert = function(apiKey,event,payload,callback){
  request.post(baseUrl + '/alert',{json: {api_key: apiKey, event: event, payload: payload}},function(error,response,body){
    if(error){
      callback(error)
    }else if(response.statusCode < 200 || response.statusCode > 299){
      callback(response.statusCode + ': ' + body)
    }else{
      callback(null,body)
    }
  })
}
