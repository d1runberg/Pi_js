var five = require("johnny-five");
var pi = require("raspi-io");

var board = new five.Board({
   io: new pi()
});

board.on("ready", function(){
   var multi = new five.Multi({
      controller: "BMP180"
   });

   multi.on("change",function(){
      console.log("------Temperature-------");
      console.log("Celcius:  ", this.temperature.celcius);
      console.log("Fahrenheit:  ", this.temperature.fahrenheit);
      console.log("Kelvin:  ", this.temperature.kelvin);
      console.log("-------Pressure---------");
      console.log("Pressure: ", this.barometer.pressure);
      console.log("-------END REPORT--------");
   });
});
