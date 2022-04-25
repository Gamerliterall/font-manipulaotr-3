nosex = 0;
nosey = 0;
left_wrist_x = 0;
right_wrist_x = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    
    canvas = createCanvas(550, 460);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function modelLoaded(){
    console.log('PoseNet Is Successfully Loaded');
}

function gotPoses(results, error){
    if(error){
        console.error(error);
    }
    if(results.length > 0){
        console.log(results);

        right_wrist_x = results[0].pose.rightWrist.x;
        left_wrist_x = results[0].pose.leftWrist.x;

        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;

        difference = floor(left_wrist_x - right_wrist_x);

        console.log("rightwrist_x = " + results[0].pose.rightWrist.x+" rightwrist_y = " + results[0].pose.rightWrist.y);
        console.log("leftwrist_x = " + results[0].pose.leftWrist.x+" leftwrist_y = " + results[0].pose.leftWrist.y);
    }
}

function draw(){
    background('#6C91C2');
    fill('FFE787');
    textSize(difference);
    text('Hi! I am SolarDragon1X1', nosex, nosey);
}