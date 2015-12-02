var five = require("johnny-five");
var pi = require("raspi-io");

var board = new five.Board({
   io: new pi()
});

board.on("ready",function(){
   var temp = new five.Thermometer({
      controller:"TMP102"
   });

   temp.on("data", function(){
      console.log("-----------Temperature-----------")
      console.log(this.celsius + " C" , this.fahrenheit + " F");
   });
});
