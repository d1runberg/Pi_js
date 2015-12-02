var five = require("johnny-five");
var pi = require("raspi-io");
var keypress = require("keypress");

var board = new five.Board({
   io: new pi()
});

board.on("ready",function(){
   var motor = new five.Moard({
      pins:{
         pwm: 'P1-12',
         dir: 'P1-7'
      }
   });

   function controller(ch, key) {
   var isThrottle = false;
   var speed = esc.last ? esc.speed : 0;

   if (key && key.shift) {
     if (key.name === "up") {
      speed += 1;
      isThrottle = true;
     }

     if (key.name === "down") {
      speed -= 1;
      isThrottle = true;
     }

     if (isThrottle) {
        if(speed > 0) {
           motor.forward(speed);
        }
        if(speed<0){
           motor.reverse(Math.abs(speed));
        }
      }
   }
  keypress(process.stdin);

  process.stdin.on("keypress", controller);
  process.stdin.setRawMode(true);
  process.stdin.resume();

});
