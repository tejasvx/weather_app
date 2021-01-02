const request = require("request");

const getTemprature = (address, callback) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${address}&APPID=37fb118f6c530e1209a19df9d3416f&units=metric`;
  request({ url: url, json: true }, (error, res) => {
    if (error) {
      return callback("error while getting weather", null)
    } else if (res.body.cod != "200") {
      return callback(res.body.message, null)
    } else {
      console.log(res.body)
      return callback(null, res.body.main.temp);
    }
  });
};

module.exports =  getTemprature;