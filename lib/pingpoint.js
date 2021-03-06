var request = require('request');
var util = require('util');
var _ = require('underscore')

const baseUrl = 'https://pingpoint.io/api/v1';
// const baseUrl = 'http://localhost:3000/api/v1';

module.exports = function(apiKey){
  this.apiKey = apiKey;

  this.ping = function(event,payload,callback){
    request.post(baseUrl + '/ping',{json: {api_key: this.apiKey, event: event, payload: payload}},function(error,response,body){
      if(_.isFunction(callback)){
        if(error){
          callback(error)
        }else if(response.statusCode < 200 || response.statusCode > 299){
          callback(response.statusCode + ': ' + JSON.stringify(body))
        }else{
          callback(null,body)
        }
      }
    })
  }

  return this;
}
