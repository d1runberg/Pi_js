var five = require("johnny-five");
var pi = require("raspi-io");

var board = new five.Board({
   io = new pi()
});

board.on("ready",function(){
   var led = new five.Led('P1-7');

   led.blink();
});
