var five = require("johnny-five");
var pi = require("raspi-io");

var board = new five.Board({
   io: new pi()
});

board.on("ready",function(){
   var motor = new five.Motor({
      pins:{
         pwm: #,
         dir: #
      }
   });

   motor.forward(255);

   board.wait(2000,function(){
      motor.stop();
   });

   motor.on("forward",function(){
      console.log("The motor is running forward!");
   });

   motor.on("stop",function(){
      console.log("The motor is stopped!")
   });
});
