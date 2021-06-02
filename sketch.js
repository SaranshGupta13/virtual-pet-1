var dog,dogImg;
var happyDog;
var database;
var foodS =20;
var foodStock;



function preload()
{
	//load images here
 dogImg=loadImage("images/dog.png")
 happyDog=loadImage("images/dogImg1.png")
 
}

function setup() {
	createCanvas(500, 500);

  database = firebase.database();

  dog = createSprite(width/2, 400, 10,10);
  dog.addImage(dogImg);
  dog.scale = 0.2

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  
}


function draw() {
  background(46, 139, 87);  

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
   
    
    dog.addImage(happyDog);

  }

  drawSprites();
  textSize(20);
  fill("YELLOW");
  text("PRESS UP_ARROW TO FEED DRAGO MILK ",45,100);
  text("FOOD REMAINNING: "+foodS,150,150);

}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
   
    Food:x
  })
}

function readStock(data){
  foodS=data.val();
}









