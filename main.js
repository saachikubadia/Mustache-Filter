x=0;
y=0;

function preload(){
    mustache=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotResult);
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(mustache, x-15, y, 40, 30);
    
}

function take_snapshot(){
    save('my_mustache.png');
}

function modelLoaded(){
     console.log('PoseNet is Initiallized');
}

function gotResult(results){

    if(results.length>0){
        console.log(results);
        console.log("x=" + results[0].pose.nose.x);
        console.log("y=" + results[0].pose.nose.y);
        x=results[0].pose.nose.x;
        y=results[0].pose.nose.y;
        
    }

}
