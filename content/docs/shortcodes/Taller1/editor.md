En esta sección está el editor de imagenes de luminosidad y visualización de histogramas de imagenes.



{{< details title="p5-instance-div markdown" open=false >}}
{{< highlight md >}}
{{</* p5-instance-div id="lilac-chaser" >}}
  // Adapted from [this](https://github.com/VisualComputing/Cognitive/blob/gh-pages/sketches/lilacChaser.js)
  let jump = 0;
  let count = 0;

  p5.setup = function() {
    p5.createCanvas(400, 400);
    p5.frameRate(7);
  };

  function drawBlurCircles(x, y, r) {
    p5.push();
    p5.noStroke();
    var opc = 0.4;
    var step = 3.0/r;

    for (var i = r; i > 0; i-=1.5) {
      if (opc < 5) {
        opc += step;
        p5.fill(255, 20, 180, opc);
      }
      p5.ellipse(x, y, i, i);
    }
    p5.pop();
  };

  p5.draw = function() {
    p5.background(200);
    var numCircles = 12;
    var stepAngle = 360.0/numCircles;
    p5.push();
    p5.translate(p5.width/2.0, p5.height/2.0);
    for (var i = 0; i < 360; i = i + stepAngle) {
      if (i != jump) {
        p5.push();
        p5.rotate(p5.radians(i));
        drawBlurCircles(120, 0, 60);
        p5.pop();
      }
    }
    if( !p5.mouseIsPressed ) {
      jump = (jump + stepAngle)%360;
    }
    p5.push();
    p5.strokeWeight(1.5);
    p5.line(-7, 0, 7, 0);
    p5.line(0, -7, 0, 7);
    p5.pop();
    p5.pop();
  }
{{< /p5-instance-div */>}}
{{< /highlight >}}
{{< hint warning >}}
Note that `p5` should be the name to be used for the sketch object variable.
{{< /hint >}}
{{< /details >}}

{{< p5-instance-div id="pacman" >}}
  let jump = 0;
  let count = 0;

  p5.setup = function() {
    p5.createCanvas(380, 380);
    p5.frameRate(7);
  };

  function drawBlurCircles(x, y, r) {
    p5.push();
    p5.noStroke();
    var opc = 0.4;
    var step = 3.0/r;

    for (var i = r; i > 0; i-=1.5) {
      if (opc < 5) {
        opc += step;
        p5.fill(255, 20, 180, opc);
      }
      p5.ellipse(x, y, i, i);
    }
    p5.pop();
  };

  p5.draw = function() {
    p5.background(200);
    var numCircles = 12;
    var stepAngle = 360.0/numCircles;
    p5.push();
    p5.translate(p5.width/2.0, p5.height/2.0);
    for (var i = 0; i < 360; i = i + stepAngle) {
      if (i != jump) {
        p5.push();
        p5.rotate(p5.radians(i));
        drawBlurCircles(120, 0, 60);
        p5.pop();
      }
    }
    if( !p5.mouseIsPressed ) {
      jump = (jump + stepAngle)%360;
    }
    p5.push();
    p5.strokeWeight(1.5);
    p5.line(-7, 0, 7, 0);
    p5.line(0, -7, 0, 7);
    p5.pop();
    p5.pop();
  }
{{< /p5-instance-div >}}

## Video on canvas

Adapted from [here](https://p5js.org/examples/dom-video-canvas.html). Don't forget to checkout also the [video on dom](https://p5js.org/examples/dom-video.html) example.

{{< details title="p5-instance-div markdown" open=false >}}
{{< highlight md >}}
{{</* p5-instance-div id="video" >}}
  let fingers;

  p5.setup = function() {
    p5.createCanvas(710, 400);
    // specify multiple formats for different browsers
    fingers = p5.createVideo(['/showcase/sketches/fingers.mov', '/showcase/sketches/fingers.webm']);
    fingers.hide(); // by default video shows up in separate dom
                    // element. hide it and draw it to the canvas instead    
  };

  p5.draw = function() {
    p5.background(150);
    p5.image(fingers, 10, 10); // draw the video frame to canvas
    p5.filter(p5.GRAY);
    p5.image(fingers, 150, 150); // draw a second copy to canvas
  };

  p5.mousePressed = function() {
    fingers.loop(); // set the video to loop and start playing  
  }
{{< /p5-instance-div */>}}
{{< /highlight >}}
{{< hint warning >}}
Note that `p5` should be the name to be used for the sketch object variable.
{{< /hint >}}
{{< /details >}}

{{< p5-instance-div id="video" >}}
  let fingers;

  p5.setup = function() {
    p5.createCanvas(710, 400);
    // specify multiple formats for different browsers
    fingers = p5.createVideo(['/showcase/sketches/fingers.mov', '/showcase/sketches/fingers.webm']);
    fingers.hide(); // by default video shows up in separate dom
                    // element. hide it and draw it to the canvas instead    
  };

  p5.draw = function() {
    p5.background(150);
    p5.image(fingers, 10, 10); // draw the video frame to canvas
    p5.filter(p5.GRAY);
    p5.image(fingers, 150, 150); // draw a second copy to canvas
  };

  p5.mousePressed = function() {
    fingers.loop(); // set the video to loop and start playing  
  }
{{< /p5-instance-div >}}