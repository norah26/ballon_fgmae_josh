var ballonred
var ballongreen
var groundImage
var ground
var bow1
var bow
var red1
var ballonblue
var ballonpink
var blue1
var pink1
var green1
var arrow
var arrow1
var ballon, ballonGroup, arrowgroup



var score

function preload(){
 //load your images here 
  
  ballonred=loadImage("red_balloon0.png")
  ballongreen=loadImage("green_balloon0.png")
  groundImage=loadImage("background0.png")
  bow1=loadImage("bow0.png")
  ballonblue=loadImage("blue_balloon0.png")
  ballonpink=loadImage("pink_balloon0.png")
  arrow1=loadImage("arrow0.png")
  


 
}

function setup() {
  createCanvas(600, 600);
  
  ground=createSprite(300,300,1200,1200)
  bow=createSprite(500,300,50,50)
  
  ballonGroup=createGroup()
  
  arrowgroup=createGroup()
  

  
  //add code here
  ground.scale=3
  
 score=0
 
  
}

function draw() {
  background("white")
  

  ground.addImage(groundImage)
  bow.addImage(bow1)
  


  bow.y=World.mouseY
 
  
 
  createred()
  //add code here
  

  
  

    
    
  

  
  drawSprites()
  
  

  
  
  
  text("player score" + score,500,50)
  

  
  ground.velocityX=-2
  if(ground.x<0){
    ground.x=300
  }
  
 
  
  if(keyDown("space")){
    
    createarrow ()
    
  }
  
  

if(arrowgroup.isTouching(ballonGroup)){
  score=score+1
  
  
  arrowgroup.destroyEach()
  ballonGroup.destroyEach()
  
} 
  
  

}
function createarrow (){ 
  

 arrow=createSprite(475,300,50,50)
   arrow.addImage(arrow1)
   arrow.scale=0.2
    arrow.velocityX=-6
   arrow.y=bow.y
    
    arrow.lifetime=100
  
  arrowgroup.add(arrow)
  
}
  
  


function createred () {
  if (frameCount%80===0){
     var ballonchoice=Math.round(random(1,4))
     
    switch(ballonchoice){
        
   
      case 1:
       
      ballon=createSprite(0,100,25,25) 
      ballon.y=Math.round(random(20,380))
      //red1.x=Math.round(random(20,380))
      ballon.addImage(ballonred)
      ballon.velocityX= 3
      ballon.scale=0.08
        
        break
        
        
        case 2:
    
    
     ballon=createSprite(0,100,25,25) 
      ballon.y=Math.round(random(20,380))
      //green1.x=Math.round(random(20,380))
      ballon.addImage(ballongreen)
      ballon.velocityX=3
      ballon.scale=0.08
        break
        
        
        case 3:
    
     ballon=createSprite(0,100,25,25) 
      ballon.y=Math.round(random(20,380))
      //blue1.x=Math.round(random(20,380))
      ballon.addImage(ballonblue)
      ballon.velocityX=3
      ballon.scale=0.08
        break
    
        
        case 4:
    ballon=createSprite(0,100,25,25) 
      ballon.y=Math.round(random(20,380))
     // pink1.x=Math.round(random(20,380))
      ballon.addImage(ballonpink)
      ballon.velocityX=3
      ballon.scale=1
        
        break
        
        
    }
    
    ballon.lifetime=200   
        
    ballonGroup.add(ballon)
    
     
  }
  
  
   
  
}

 
      
 
  
  

