

const canvas=document.querySelector('.map');
const c=canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;
const offscreenCanvas = document.createElement('canvas');
const offscreenCtx = offscreenCanvas.getContext('2d');
offscreenCanvas.width = canvas.width;
offscreenCanvas.height = canvas.height;
import {Boundary} from "./map.js";
import {Coin} from "./coins.js";


 
const map=[
    
    [  '7', '7',  '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7',  ],
    [  '7', '7',  '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7',  ],
    [  '7', '7',  '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '3', '3', '3', '3', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '7', '7',  ],
    [  '7', '7',  '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '3', '3', '3', '3', '0', '0', '0', '0', '0', '3', '0', '0', '0', '0', '7', '7',  ],
    [  '7', '7',  '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '4', '4', '7', '7',  ],
    [  '7', '7',  '0', '0', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '4', '4', '7', '7',  ],
    [  '7', '7',  '0', '0', '0', '0', '3', '3', '1', '1', '3', '3', '0', '0', '0', '0', '0', '0', '3', '3', '1', '1', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '7', '7',  ],
    [  '7', '7',  '0', '0', '0', '0', '3', '3', '1', '1', '3', '3', '0', '0', '0', '0', '0', '0', '3', '3', '1', '1', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '7', '7',  ],
    [  '7', '7',  '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '7', '7',  ],
    [  '7', '7',  '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '7', '7',  ],
    [  '7', '7',  '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '0', '0', '0', '7', '7',  ],
    [  '7', '7',  '0', '0', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '3', '3', '3', '3', '3', '0', '0', '0', '7', '7',  ],
    [  '7', '7',  '0', '0', '0', '0', '3', '3', '3', '3', '3', '3', '0', '0', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '0', '0', '7', '7',  ],
    [  '7', '7',  '0', '0', '0', '0', '3', '3', '3', '3', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '0', '0', '7', '7',  ],
    [  '7', '7',  '0', '0', '0', '0', '3', '3', '3', '3', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '0', '0', '7', '7',  ],
    [  '7', '7',  '0', '0', '0', '0', '3', '3', '3', '3', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '0', '0', '0', '1', '3', '3', '7', '7',  ],
    [  '7', '7',  '0', '0', '0', '0', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '2', '2', '4', '4', '0', '0', '0', '0', '0', '0', '7', '7',  ],
    [  '7', '7',  '0', '0', '0', '0', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '7', '7',  ],
    [  '7', '7',  '0', '0', '3', '3', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '7', '7',  ],
    [  '7', '7',  '0', '0', '3', '3', '3', '3', '3', '3', '0', '0', '0', '0', '0', '0', '3', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '7', '7',  ],
    [  '7', '7',  '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7',  ],
    [  '7', '7',  '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7',  ],
    
]

const border=[ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] ];
const img =new Image();
img.src="../images/wall.jpg";
const bmg1 =new Image();
bmg1.src="../images/wall.png";
const bmg2 =new Image();
bmg2.src="../images/wall.png";
const bmg3 =new Image();
bmg3.src="../images/wall.png";
const bmg4 =new Image();
bmg4.src="../images/wall.png";
const images = [img, bmg1, bmg2, bmg3, bmg4];
let loaded = 0;
let bsize=25;

images.forEach(image => {
    image.onload = () => {
        loaded++;
        if (loaded == 5) {
            
            map.forEach((row,i)=>{
                    row.forEach((symbol,j)=>{
                        switch(symbol){
                            case '7':border[i][j]=new Boundary({position : {x:120+bsize*j,y:25+bsize*i},image:img});
                             border[i][j].draw(offscreenCtx);
                             border[i][j].blocked=true;
                             break;
                            case '1':border[i][j]=new Boundary({position : {x:120+bsize*j,y:25+bsize*i},image:bmg1});
                             border[i][j].draw(offscreenCtx);
                             border[i][j].blocked=true;
                             break;
                            case '2':border[i][j]=new Boundary({position : {x:120+bsize*j,y:25+bsize*i},image:bmg2});
                             border[i][j].draw(offscreenCtx);
                             border[i][j].blocked=true;
                             break;
                            case '3':border[i][j]=new Boundary({position : {x:120+bsize*j,y:25+bsize*i},image:bmg3});
                             border[i][j].draw(offscreenCtx);
                             border[i][j].blocked=true;
                             break;
                            case '4':border[i][j]=new Boundary({position : {x:120+bsize*j,y:25+bsize*i},image:bmg4});
                             border[i][j].draw(offscreenCtx);
                             border[i][j].blocked=true;
                             break;
                             
                             default:  
                             border[i][j] = new Boundary({position: {x: 120 + bsize * j, y: 25 + bsize * i}, image: null});
                             border[i][j].blocked = false;  
                             break;
                     
                        }
                                   
                    })
         });
        c.drawImage(offscreenCanvas, 0, 0);}}})
         function render() {
            c.clearRect(0, 0, canvas.width, canvas.height); 
            c.drawImage(offscreenCanvas, 0, 0); 
          }
          
          
          render();
          var rst=false;      
import {Player} from "./player.js";
import{Bullet} from "./bullet.js"
const char1=new Image;
char1.src="../images/walk with knife.png";
char1.frameIndex=1;
var p;
var lev=1;
var coincount=0;
const coinarr=[];
char1.onload=()=>{
p= new Player({position:{x:200,y:350},velocity:{x:0,y:0},image:char1}) 
p.build();
healthupdate(p);
const blast = new Image();
  
blast.src = "../images/blast.png";

function move(){
    
 end(); 
 nextlev(); 
 
c.clearRect(0,0,canvas.width,canvas.height);
render();
p.build();
if(boundary_check(p)==false){
    
    
    p.update();
    p.build();
}   
coinarr.forEach((m)=>{m.build()});  
villains.forEach((vill)=>{
    
    vill.bullets.forEach((bullet, index) => {
        if(boundary_check(bullet) || kill_check(p,bullet)){
            vill.bullets.splice(index, 1);
            if(kill_check(p,bullet)){
                p.health--;
                healthupdate(p);
                if(p.health==0){
                    p.position.x=-1000;
                    p.position.y=-1000;
                    game_end();
                }
            }
            return;
        }
        bullet.update();})

    villran();
    vill.update();
    vill.build();
    })
  coinarr.forEach((l,i)=>{if(kill_check(p,l)){coinarr.splice(i,1); coincount++;
    const d=document.querySelector(".coins");
    d.innerHTML=`Coins:${coincount}`;
  }})
    
  dragon.forEach((drag) => {
    drag.update();
    drag.build();

    if (drag.position.y > 10 && drag.position.y < window.innerHeight) {
        villains.forEach((vill)=>drag.startShooting(vill));  
         playgunAudio('../audio/dragon.mp3');
    } else {
        drag.stopShooting();
    }

    drag.bullets = drag.bullets.filter((bull, i) => {
        let hit = false;
        villains.forEach((vill,j) => {
            if (kill_check(vill, bull)) {
                drag.bullets.splice(i, 1); 
                villains.splice(j,1); 
                vill.image = blast;  
                hit = true;
            }
        });
        return !hit;  
    });
});

    


    requestAnimationFrame(move);
}

move();}


addEventListener("keydown",(event)=>{
    
    if(event.key=="ArrowDown" || event.key=="s"){
        p.velocity.y=3;
        char1.frameIndex=6;
    }
    if(event.key=="ArrowUp" || event.key=="w"){
        p.velocity.y=-3;
        char1.frameIndex=6;
    }
    if(event.key=="ArrowRight" || event.key=="d"){
        p.velocity.x=3;
        char1.frameIndex=6;
    }
    if(event.key=="ArrowLeft" || event.key=="a"){
        p.velocity.x=-3;
        char1.frameIndex=6;
    }
    if(event.key==" "){
        const kn=new Image;

        kn.src="../images/knife.png";
        kn.frameIndex=8;
        p.image=kn;
        p.off=5;
        kill();
    }
    p.angle=Math.atan2(p.velocity.y,p.velocity.x);
})
addEventListener("keyup",(event)=>{
    
    if(event.key=="ArrowDown" || event.key=="s"){
        p.velocity.y=0;
        char1.frameIndex=1;
    }
    if(event.key=="ArrowUp" || event.key=="w"){
        p.velocity.y=0;
        char1.frameIndex=1;
    }
    if(event.key=="ArrowRight" || event.key=="d"){
        p.velocity.x=0;
        char1.frameIndex=1;
    }
    if(event.key=="ArrowLeft" || event.key=="a"){
        p.velocity.x=0;
        char1.frameIndex=1;
    }
    if(event.key==" "){
        
        p.image=char1;
    }
})
function boundary_check(p) {
    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[i].length; j++) {
        if (map[i][j] != 0) {
          const wallX = 120 + 25 * j;
          const wallY = 25 + 25 * i;
          const wallWidth = 25;
          const wallHeight = 25;
  
          if (
            p.position.x+p.velocity.x <= wallX + wallWidth &&
            p.position.x +p.velocity.x+ 50 >= wallX &&
            p.position.y +p.velocity.y<= wallY + wallHeight &&
            p.position.y +p.velocity.y+ 50 >= wallY
          ) {
            return true; 
          }
        }
      }
    }
    return false;
  }
  import { Villain } from "./villain.js";
  const villainImage = new Image();
  
villainImage.src = "../images/newvill.png";
villainImage.frameIndex=6; 

let villains = [];


villainImage.onload = () => {
    villains.push(new Villain({ position: { x: 500, y: 150 }, velocity: { x: 1, y: 0 }, image: villainImage }));
    villains.push(new Villain({ position: { x: 180, y: 120 }, velocity: { x: 1, y: 0 }, image: villainImage }));
    villains.push(new Villain({ position: { x: 650, y: 300 }, velocity: { x: 1, y: 0 }, image: villainImage }));
    villains.forEach((vill)=>{ vill.build();})}
    let bullets = [];
const bulletImage = new Image();
bulletImage.src = "../images/bullet.png";
    function villran(){
        var arr=[1,2,3,4];
        var arr= shuffleArray(arr);
        let s=Math.ceil(Math.random*3);
        
        villains.forEach((vill)=>{
            if (getDistance(vill, p) < 95 && !(behind(p,vill))) {
                
               vill.startShooting(p);
               playgunAudio('../audio/shots.mp3');
            }
            else{vill.stopShooting();
                
                    
                
            }
            
            if(boundary_check(vill)){
                if(arr[0]==1){
            vill.velocity.x=1;
                vill.velocity.y=0;}
                if(arr[0]==2){vill.velocity.y=-1;
                    vill.velocity.x=0;}
                if (arr[0]==3){ vill.velocity.x=-1;
                    vill.velocity.y=0;}
                if(arr[0]==4){
                    vill.velocity.y=1;
                    vill.velocity.x=0;
                }
                if(boundary_check(vill)){
                    if(arr[1]==1){
                        vill.velocity.x=1;
                            vill.velocity.y=0;}
                            if(arr[1]==2){vill.velocity.y=-1;
                                vill.velocity.x=0;}
                            if (arr[1]==3){ vill.velocity.x=-1;
                                vill.velocity.y=0;}
                            if(arr[1]==4){
                                vill.velocity.y=1;
                                vill.velocity.x=0;
                            }
                    
                    if(boundary_check(vill)){
                        if(arr[2]==1){
                            vill.velocity.x=1;
                                vill.velocity.y=0;}
                                if(arr[2]==2){vill.velocity.y=-1;
                                    vill.velocity.x=0;}
                                if (arr[2]==3){ vill.velocity.x=-1;
                                    vill.velocity.y=0;}
                                if(arr[2]==4){
                                    vill.velocity.y=1;
                                    vill.velocity.x=0;
                                }
                      if(boundary_check(vill)){
                        if(arr[3]==1){
                            vill.velocity.x=1;
                                vill.velocity.y=0;}
                                if(arr[3]==2){vill.velocity.y=-1;
                                    vill.velocity.x=0;}
                                if (arr[3]==3){ vill.velocity.x=-1;
                                    vill.velocity.y=0;}
                                if(arr[3]==4){
                                    vill.velocity.y=1;
                                    vill.velocity.x=0;
                                }
                      }
                    }
                }
            } vill.angle= Math.atan2(vill.velocity.y, vill.velocity.x);
        })
            
            }
            function shuffleArray(array) {
                for (var i = array.length - 1; i > 0; i--) { 
               
                    
                    var j = Math.floor(Math.random() * (array.length));
                               
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
                   
                return array;
             }
             function getDistance(vill, player) {
                const dx = vill.position.x - player.position.x;
                const dy = vill.position.y - player.position.y;
                return Math.sqrt(dx * dx + dy * dy); 
            }

            function kill_check(p,b) {
                
                    
                      const wallX = p.position.x;
                      const wallY = p.position.y;
                      const wallWidth = 40;
                      const wallHeight = 50;
              
                      if (
                        b.position.x+b.velocity.x < wallX + wallWidth &&
                        b.position.x +b.velocity.x+ 10 > wallX &&
                        b.position.y +b.velocity.y< wallY + wallHeight &&
                        b.position.y +b.velocity.y+ 10 > wallY
                      ) {
                        return true; 
                      }
                    
                  
                
                return false;
            }
            function kill(){
                villains.forEach((vill,i)=>{
                    if(p.position.x+50>vill.position.x&& p.position.x<vill.position.x+40&& p.position.y<vill.position.y+50 && p.position.y+50>vill.position.y){
                        villains.splice(i,1);
                    }
                })
            }
            
            let audio;

function playgunAudio(audioSrc) {
    if (!audio) {
        audio = new Audio(audioSrc);
    }
    audio.play();
}

function pausegunAudio() {
    if (audio) {
        audio.pause();
    }
}

function stopgunAudio() {
    if (audio && !audio.paused) {
        audio.pause();
        audio.currentTime = 0; 
    }
}
function healthupdate(p) {
    var d = document.querySelector(".health");
    d.innerHTML = ""; 
    
    
    for (let j = 1; j <= p.health; j++) {
        var img = document.createElement("img");
        img.src = "../images/hp.png"; 
        img.className = "heart"; 
        d.appendChild(img); 
    }
}
function end(){
    if (villains.length==0){
        const d=document.querySelector(".canvas-box");
        d.style.filter="blur(10)";
    }
}

export function reset(){
    
        
        p.position = { x: 200, y: 350 }; 
        p.velocity = { x: 0, y: 0 };     
        p.health = 3;                    
        p.image = char1;                 
        p.angle = 0;                     
        healthupdate(p);                 
    
        
        villains = [];
        villains.push(new Villain({ position: { x: 500, y: 150 }, velocity: { x: 1, y: 0 }, image: villainImage }));
        villains.push(new Villain({ position: { x: 180, y: 120 }, velocity: { x: 1, y: 0 }, image: villainImage }));
        villains.push(new Villain({ position: { x: 650, y: 300 }, velocity: { x: 1, y: 0 }, image: villainImage }));
    
        
        villains.forEach(vill => {
            vill.bullets = []; 
        });
    
        const canvas = document.querySelector("canvas");
        const c = canvas.getContext("2d");

        c.clearRect(0, 0, canvas.width, canvas.height);
        coincount=0;
        const d=document.querySelector(".coins");
        d.innerHTML=`Coins:${coincount}`;
        coinarr.length=0;
     const coinPositions = RandomCoinPositions(ZeroPositions(map),10);

    coinPositions.forEach((pos) => {
        coinarr.push( new Coin({position:pos, image:coinImage}));
         
    });
    }
    
    
    function behind(player, villain) {
        
        const playerMovingLeft = player.velocity.x <= 0;
        const playerMovingRight = player.velocity.x >= 0;
        const playerMovingUp = player.velocity.y <= 0;
        const playerMovingDown = player.velocity.y >= 0;
    
        const villainMovingLeft = villain.velocity.x < 0;
        const villainMovingRight = villain.velocity.x > 0;
        const villainMovingUp = villain.velocity.y < 0;
        const villainMovingDown = villain.velocity.y > 0;
    
        const b =
            (player.position.x < villain.position.x && playerMovingRight && villainMovingRight) ||
            (player.position.x > villain.position.x && playerMovingLeft && villainMovingLeft) ||
            (player.position.y < villain.position.y && playerMovingDown && villainMovingDown) ||
            (player.position.y > villain.position.y && playerMovingUp && villainMovingUp);
    
        return b; 
    }
    const coinImage = new Image();
coinImage.src = '../images/coin.png'; 
coinImage.onload = () => {
    
    const coinPositions = RandomCoinPositions(ZeroPositions(map),10);

    coinPositions.forEach((pos) => {
        coinarr.push( new Coin({position:pos, image:coinImage}));
         
    });
};


    
function ZeroPositions(map) {
    const zeroarr = [];
    map.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            if (cell ==='0') {
                zeroarr.push({ x: colIndex*25+120 , y: rowIndex*25+25 });
            }
        });
    });
    return zeroarr;
}

function RandomCoinPositions(zeroPositions, totalCoins) {
    
    totalCoins = Math.min(totalCoins, zeroPositions.length);

    
    const shuffledPositions = zeroPositions.sort(() => Math.random() - 0.5);
    
    
    return shuffledPositions.slice(0, totalCoins);
}
export function playgame(){
        
    const d=document.querySelector(".over")
    d.innerHTML="";
    const l=document.querySelector(".canvas-box");
        l.style.filter="none";
        cli++;
        reset();

}
function game_end(){
    const d=document.querySelector(".over");
    const p=document.createElement('div');
    p.className="title";
    p.innerHTML="YOU LOST"
    d.appendChild(p);
    const butt=document.createElement("button");
    butt.className="sub-title";
    butt.textContent = "START AGAIN";
    butt.addEventListener("click", playgame);
    d.appendChild(butt);
    
    const l=document.querySelector(".canvas-box");
        l.style.filter="blur(100px)";
}
var cli=0;
function nextlev(){
    if(villains.length==0 && cli!=0){
        const d=document.querySelector(".over");
    const p=document.createElement('div');
    p.className="title";
    p.innerHTML="YOU WON"
    d.appendChild(p);
    const butt=document.createElement("button");
    butt.className="sub-title";
    
    butt.textContent = "NEXT LEVEL";
    // if (lev==10){butt.textContent = "START AGAIN";}
    butt.addEventListener("click", playgame);
    d.appendChild(butt);
    
    const l=document.querySelector(".canvas-box");
        l.style.filter="blur(100px)";

    }
    lev++;
}
import {Dragon} from "../scripts/dragon.js";
var dragon=[];
export function callhelp(){


var drimg=new Image();
drimg.src="../images/dragon.png";if(coincount==10){
dragon.push(new Dragon({position:{x:500,y:25},velocity:{x:0,y:3},image:drimg}));
coincount-=10;}
else{alert("insufficient coins");}
}
