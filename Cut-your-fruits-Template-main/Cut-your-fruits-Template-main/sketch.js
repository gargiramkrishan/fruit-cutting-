var player,pl,fruit,fr,cased;
var fruit2,fr2,fruit3,fr3,fruit4,fr4;
var obstacle;
var check,knifej,gameov,gameover,over
var score,play,end,game;
function preload()
{
  pl = loadImage("knife.png")
  fr = loadImage("fruit1.png")
  fr2 = loadImage("fruit2.png")
  fr3 = loadImage("fruit3.png")
  fr4 = loadImage("fruit4.png")
  check = loadSound("checkpoint.mp3")
  knifej = loadSound("knifeSwoosh.mp3")
  gameov = loadSound("gameover.mp3")
  over = loadImage("gameover.png")
  score = 0;
  play = 1;
  end = 0;
  game = play;
}



function setup() 
{
  createCanvas(600, 600);
  player = createSprite(200,200)
  player.addImage("ggggggt",pl)
  obstacle = new Group();
  gameover = createSprite(200,200)
  gameover.addImage("fjffffffffffffff",over)
  gameover.visible = false
}

function draw() 
{
  background("lightblue");
  if(game == play)
  {
    player.y = World.mouseY;
    
    player.x = World.mouseX;


    if(obstacle.isTouching(player))
    {
      score = score + 10
      knifej.play();
      fruit.destroy()
    }
    if(score == 200)
    {
      gameover.visible = true
      gameov.play()
      game = end;
    }
    else if(game == end)
    {
      obstacle.velocityX = 0
      fruit.destroy();
    }
    fruits();
  }
  drawSprites();
  text("Score : " + score,200,60)
}
function fruits()
{
  if(frameCount%60==0)
  {
    fruit = createSprite(600,200)
    fruit.y = Math.round(random(90,600))

    cased = Math.round(random(1,4))
    fruit.velocityX = -(16 + score/100);
    fruit.lifetime = 600;
    console.log(fruit.velocityX);
    fruit.scale = 0.2
    switch(cased)
    {
      case 1 : fruit.addImage(fr)
      break
      case 2 : fruit.addImage(fr2)
      break
      case 3 : fruit.addImage(fr3)
      break
      case 4 : fruit.addImage(fr4)
      break
      default:
        break
    }
    obstacle.add(fruit);
  }
}