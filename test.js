"use strict";

var Cylon = require("cylon");

Cylon.robot({
  connections: {
    joystick: { adaptor: "joystick" }
  },

  devices: {
    controller: { driver: "dualshock-3" }
  },

  work: function(my) {
    ["square", "circle", "x", "triangle"].forEach(function(button) {
      my.controller.on(button + ":press", function() {
        console.log("Button " + button + " pressed.");
      });

      my.controller.on(button + ":release", function() {
        console.log("Button " + button + " released.");
      });
    });

    my.controller.on("left_x:move", function(data) {
      console.log("Left Stick - X:", data);
    });

    my.controller.on("right_x:move", function(data) {
      console.log("Right Stick - X:", data);
    });

    my.controller.on("left_y:move", function(data) {
      console.log("Left Stick - Y:", data);
    });

    my.controller.on("right_y:move", function(data) {
      console.log("Right Stick - Y:", data);
    });
  }
}).start();
