function preload() {

}

function setup() {
    Canvas = createCanvas(500, 250);
    Canvas.position(590,200);
    Video = createCapture(VIDEO);
Video.size(500,250);
Video.hide();
s = ml5.poseNet(Video, Load);
s.on('pose', gotNoses);
}
function gotNoses(result) {
    if (result.length >0) {
        console.log(result);
        console.log(result[0].pose.nose.x);
        console.log(result[0].pose.nose.y);
    }
    }
function draw() {
    image(Video, 0,0,500,250);
}
function savingmachine() {
    save("Moustache.png");
}

function Load() {
    console.log("poseNet connection Successful");
}