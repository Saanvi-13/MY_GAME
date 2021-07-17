var enemy1Img,enemy2Img,enemy3Img,shooterImg;
var noonImg,nightImg,eveningImg,morningImg;
var enemy,shooter;
var bullet;
var enemyGroup;
var score = 0;


function preload(){
    enemy1Img=loadImage("images/mainEnemy.png");
    enemy2Img=loadImage("images/assistantEnemy.png");
    enemy3Img=loadImage("images/juniorEnemy.png");
    shooterImg=loadImage("images/shooter.png");
    shooter2Img=loadImage("images/shooter2.png");
    shooter3Img=loadImage("images/shooter3.png");
    bulletImg=loadImage("images/bullet.png");

   
    nightImg=loadImage("images/night.jpg");
    noonImg=loadImage("images/noon.jpg");
    eveningImg=loadImage("images/evening.jpg");
    morningImg=loadImage("images/Morning.png");

}

function setup(){
    canvas = createCanvas(1240,600);
   
    // enemy1 = createSprite(400,250,50,50);
    // enemy1.addImage(enemy1Img);
    // enemy1.scale = 0.2

    // enemy2 = createSprite(300,300,50,50);
    // enemy2.addImage(enemy2Img);
    // enemy2.scale = 0.2
    
    // enemy3 = createSprite(800,310,50,50);
    // enemy3.addImage(enemy3Img);
    // enemy3.scale = 0.2

    shooter = createSprite(600,500,50,50);
    shooter.addImage(shooterImg);
    shooter.scale = 1

    bullet = createSprite(740,500);
    bullet.addImage(bulletImg);
    bullet.visible = false;



    enemyGroup = new Group();

    
}
    
   

function draw(){
    background(morningImg)

    fill("white");
    textSize(30);
    text("Score : "+score,1000,500)


if(keyDown("LEFT_ARROW")){
shooter.addImage(shooter2Img);
bullet.visible = true;

if (keyDown("UP_ARROW")){
    bullet.velocityX=2;
    enemyGroup.destroyEach();
    
}
}

if(keyDown("RIGHT_ARROW")){
    shooter.addImage(shooter3Img);
    bullet.visible = true;
    if (keyDown("UP_ARROW")){
        bullet.velocityX=2;
        
        
    }
    }

if(keyDown("DOWN_ARROW")){
    shooter.addImage(shooterImg);
     }




spawnEnemy();

drawSprites();
}

function spawnEnemy(){
    //for(var i = 0;i<3;i++){
        // w = random(400,800);
        // h = random(250,310);
        if(frameCount%200===0){

        
        enemy = createSprite(800,400);
        enemy.velocityX=-3;
        var rand = Math.round(random(1,3));
        switch(rand){
            case 1: enemy.addImage(enemy1Img);
            break;
            case 2: enemy.addImage(enemy2Img);
            break;
            case 3: enemy.addImage(enemy3Img);
            break;
        }
        enemy.scale = 0.4;
        enemyGroup.add(enemy);

        enemy.depth = shooter.depth;
        shooter.depth = shooter.depth+1;
    }

    }
//}
