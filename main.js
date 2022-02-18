leftWristX=0;
rightWristX=0;
difference=0;

function setup() {
    video= createCapture(VIDEO);
    video.size(550, 500);

    canvas= createCanvas(600, 450);
    canvas.position(650, 100);

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}


  function modelLoaded(){
      console.log("PoseNet is initialised!");
  }

  function gotPoses(results){
      if(results.length > 0)
      {
          console.log(results);
          leftWristX= results[0].pose.leftWrist.x;
          rightWristX= results[0].pose.rightWrist.x;
          difference= floor(leftWristX-rightWristX);
      }
  }

  function draw(){
    background("powderblue");
    text("Adikshya", 50, 300)
    textSize(difference);
    fill("#002060");


  }
