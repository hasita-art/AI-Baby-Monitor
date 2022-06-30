objects = [];
img = "";
status = "";
alert = "";

function preload(){
    alert = loadSound("alert.mp3");
}

function setup(){
    canvas = createCanvas(600,600);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(600,600);
    video.hide();

}

function draw(){
    image(video, 0, 0, 600, 600);
    for (i = 0; i < objects.length; i++) {
        fill(r,g,b);
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke(r,g,b);
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
      }
      if(objects[i].label == person){
        document.getElementById("status").innerHTML = "Status : Baby Detected";
        console.log("stop");
        alert.stop();
      }
      else{
        document.getElementById("status").innerHTML = "Status : Baby Not Detected";
        console.log("play");
        alert.play();
      }
      if(objects[i].length < 0){
        document.getElementById("status").innerHTML = "Status : Baby Not Detected";
        console.log("play");
        alert.play();
      }
}