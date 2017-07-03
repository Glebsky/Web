class fish{
  constructor(image){
    this.HorDirection = 1;
    this.VerDirection = null;
    this.stopTimer = null;
    this.image = image;
    this.fish = document.createElement("div");
    this.fish.classList.add("fish");
    this.fish.style.top = Math.floor(Math.random()*window.innerHeight)+"px";
    this.fish.style.left = Math.floor(Math.random()*window.innerWidth)+"px";
    if (parseInt(this.fish.style.top) >= window.innerHeight - 32) {
      this.fish.style.top = parseInt(this.fish.style.top)-32+"px";
    }

    if (parseInt(this.fish.style.left) >= window.innerWidth - 32) {
      this.fish.style.left = parseInt(this.fish.style.left)-32+"px";
    }

    this.fish.style.backgroundImage = "url('"+image+"')";
    document.body.appendChild(this.fish);
  }
  Direction(){
    this.HorDirection = Math.floor(Math.random()*2);
    this.VerDirection = Math.floor(Math.random()*4);
    this.stopTimer = null;

  }



  Move() {
      if(this.HorDirection == 0){
        if(this.fish.classList.contains("toRight")){this.fish.classList.remove("toRight");}
        this.fish.classList.add("toLeft");
        this.fish.style.left = parseInt(this.fish.style.left)-1+"px";
        if(this.fish.style.left = parseInt(this.fish.style.left) <= 0){this.HorDirection = 1}
      } else {
        if(this.fish.classList.contains("toLeft")){this.fish.classList.remove("toLeft");}
        this.fish.classList.add("toRight");
        this.fish.style.left = parseInt(this.fish.style.left)+1+"px";
        if(this.fish.style.left = parseInt(this.fish.style.left) >= window.innerWidth-32){this.HorDirection = 0}
      }

      if(this.VerDirection == 0){
        this.fish.style.top = parseInt(this.fish.style.top)-1+"px";
        if(this.fish.style.top = parseInt(this.fish.style.top) <= 0){this.VerDirection = 1}
      } else if(this.VerDirection == 1) {
        this.fish.style.top = parseInt(this.fish.style.top)+1+"px";
        if(this.fish.style.top = parseInt(this.fish.style.top) >= window.innerHeight-32){this.VerDirection = 0}
      }
 }
}

function FishClick(fish) {
  if(fish.classList.contains("toRight")){fish.style.left = parseInt(fish.style.left)+5+"px";}
  if(fish.classList.contains("toLeft")){fish.style.left = parseInt(fish.style.left)-5+"px";}
  runcount++;
  if(runcount ==10){
     clearTimeout(runCountTimer);
     runcount = 0;
   }
}

var fishCount = 20;
var FishArr = new Array();
var fishImg;
var TimerArr = new Array();
var runcount = 0;
var runCountTimer = new Array();
//Create 10 fishes
for (var i = 0; i < fishCount; i++) {
  //get random value for image.
  var fishImgRand =  Math.floor(Math.random()*4);
  // Get random image
  switch (fishImgRand) {
    case 0:
        fishImg = "images/fish-blue.png";
      break;
    case 1:
        fishImg = "images/fish-green.png";
        break;
    case 2:
        fishImg = "images/fish-red.png";
        break;
    case 3:
        fishImg = "images/fish-yellow.png";
        break;
    default:
        fishImg = "images/fish-red.png";
  }
  FishArr[i] = new fish(fishImg);
}
for (var i = 0; i < fishCount; i++) {
  TimerArr[i] = null;
}
for (var i = 0; i < FishArr.length; i++) {
  FishArr[i].fish.addEventListener("click",function(event){
      var item = this;
      runCountTimer = setInterval(function(){FishClick(item)},50);
  },false);
}
//set Interval Function;
var rnd = Math.floor((Math.random()*10000)+3000);
  setInterval(ChangeDirectionAll,rnd);
  setInterval(MoveAll, 50);


function MoveAll(){
  for (var i = 0; i < fishCount; i++) {
    FishArr[i].Move();
  }
}

function ChangeDirectionAll(){
  for (var i = 0; i < fishCount; i++) {
    if (!FishArr[i].stopTimer) {
        setTimeout(FishArr[i].Direction(), rnd);
    }
  }
}
