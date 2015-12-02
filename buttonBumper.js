var five = require("johnny-five");
var pi = require("raspi-io");

var board = new five.Board({
   io: new pi()
});

board.on("ready", function(){
   var bumper = new five.Button('P1-11');
   var led = new five.LED('P1-7');

   bumper.on("hit",function(){
      led.on();
   });

   bumper.on("release", function(){
      led.off();
   });
});
