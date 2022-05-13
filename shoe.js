function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
    objectdetector = ml5.objectDetector('cocossd',modelloded);
    document.getElementById("status").innerHTML = "Status = Detecting Object ";

}

objects = [];
 status1 = "";

function modelloded(){
    console.log("Modelloaded!!");
    status1 = true;
    objectdetector.detect(image1,gotresults);

}

function gotresults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}

function preload(){
    image1 = loadImage("shoe.jpg");
}
function draw(){
    image(image1,0,0,500,500);
    
        image(image1,0,0,500,500);
        if(status1!=""){
           
           for(i=0; i<objects.length; i++){
               document.getElementById("status").innerHTML = " 1 Object is Detected";
               noFill();
               stroke("red");
               persent = Math.floor(objects[i].confidence*100) ;
               rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
               textSize(22);
               textAlign(LEFT,BOTTOM);
               text(objects[i].label+" "+persent+"%",objects[i].x+15,objects[i].y);
           }
    
        }
    
        
        
    }
