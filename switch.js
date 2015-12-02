var five = require("johnny-five"),
var pi = require("raspi-io");

board = new five.Board({
   io: new pi()
});

board.on("ready", function() {

  // Create a new `switch` hardware instance.
  // This example allows the switch module to
  // create a completely default instance
 var  toggleSwitch = new five.Switch('P1-7');
 var led = new five.Led('P1-11');

  toggleSwitch.on("close", function() {
    console.log("closed");
    led.blink(500);
  });

  // "open" the switch is opened
  toggleSwitch.on("open", function() {
    console.log("open");
    led.blink(250);
  });
});
