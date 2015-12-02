var five = require("johnny-five");
var pi = require("raspi-io");

var board = new five.Board({
   var servo = new five.Servo({
      id: "MyServo",     // User defined id
  pin: 10,           // Which pin is it attached to?
  type: "standard",  // Default: "standard". Use "continuous" for continuous rotation servos
  range: [0,180],    // Default: 0-180
  fps: 100,          // Used to calculate rate of movement between positions
  invert: false,     // Invert all specified positions
  startAt: 90,       // Immediately move to a degree
  center: true,      // overrides startAt if true and moves the servo to the center of the range
   });

   servo.sweep();

   //servo.min(); //defaults to 0
   //servo.max(); //defaults to 180
   //servo.center(); //defaults to 90
   //servo.to(120);  //set to degrees
   //servo.step(10);  //step servo by x degrees
});
