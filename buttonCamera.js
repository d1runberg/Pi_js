var five = require("johnny-five");
var pi= require("raspi-io");
var Cam = require("raspicam");

var cam = new Cam({
   mode: 'photo',
   output: 'path to directory to store with file name',
   height: ,
   width: ,
   quality:100, //best quality
   encoding: "jpg",
   timelapse:     //int in ms timing if timelapse
});

var board = new five.Board({
   io: new pi()
});

board.on("ready",function(){
   var button = new five.Button();
   var led = new five.Led();

   button.on("pressed",function(){
      cam.start();   //take a picture
      led.on();
   });

   cam.on("read",function(){
      led.off();
   });
   
});
