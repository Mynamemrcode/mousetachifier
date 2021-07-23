nosy = 0;
nosx = 0;
function preload() {
    masker = loadImage("https://i.postimg.cc/J0SqTgvS/mask.png");
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
        nosy = result[0].pose.nose.y + 20 - 40 - 10 + 5;
        nosx = result[0].pose.nose.x -50 - 20 - 30;
    }
    }
function draw() {
    image(Video, 0,0,500,250);
    image(masker,nosx,nosy, 200,100)
}
function savingmachine() {
    save("Moustache.png");
}

function Load() {
    console.log("poseNet connection Successful");
}