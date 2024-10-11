

const canvas=document.querySelector('.map');
const c=canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

import {Boundary} from "./map.js";

c.fillStyle = 'gray';
c.fillRect(0, 0, canvas.width, canvas.height); 
const map=[
    ['7','7','7','7','7','7','7','7','7','7','7','7','7','7','7','7','7','7','7','7','7','7','7'],   
    ['7','7','7','7','7','7','7','7','7','7','7','7','7','7','7','7','7','7','7','7','7','7','7'],   
    ['7','7','3','0','0','0','0','0','0','0','0','0','0','3','3','3','0','0','3','0','0','7','7'],   
    ['7','7','0','0','0','1','0','0','0','3','0','0','0','0','3','3','0','0','0','0','4','7','7'], 
    ['7','7','0','0','0','0','0','0','3','1','3','0','0','0','3','1','3','0','0','0','0','7','7'],   
    ['7','7','4','0','0','3','0','0','0','0','0','0','0','0','0','3','0','0','0','0','0','7','7'],
    ['7','7','0','0','0','3','0','0','0','3','0','0','0','0','3','3','0','3','3','3','0','7','7'],
    ['7','7','0','0','0','3','3','0','3','3','3','0','0','0','0','0','0','3','0','0','0','7','7'],
    ['7','7','0','3','0','0','0','0','3','3','3','0','0','0','0','0','0','3','0','1','3','7','7'],
    ['7','7','0','0','0','0','0','0','1','0','0','0','0','3','0','0','2','4','0','0','0','7','7'],
    ['7','7','2','0','0','0','0','3','3','3','0','0','0','3','3','0','0','0','0','0','0','7','7'],
    ['7','7','7','7','7','7','7','7','7','7','7','7','7','7','7','7','7','7','7','7','7','7','7'],
    ['7','7','7','7','7','7','7','7','7','7','7','7','7','7','7','7','7','7','7','7','7','7','7'],  
    
]


const img =new Image();
img.src="../images/wall.jpg";
img.onload=()=>{
map.forEach((row,i)=>{
    row.forEach((symbol,j)=>{
        switch(symbol){
            case '7':new Boundary({position : {x:180+50*j,y:50+50*i},image:img}).draw();}
                
                   
    })
})
}
const bmg1 =new Image();
bmg1.src="../images/block1.jpg";
bmg1.onload=()=>{
map.forEach((row,i)=>{
    row.forEach((symbol,j)=>{
        switch(symbol){
            case '1':new Boundary({position : {x:180+50*j,y:50+50*i},image:bmg1}).draw();}
                
                   
    })
})
}
const bmg2 =new Image();
bmg2.src="../images/block2.jpg";
bmg2.onload=()=>{
map.forEach((row,i)=>{
    row.forEach((symbol,j)=>{
        switch(symbol){
            case '2':new Boundary({position : {x:180+50*j,y:50+50*i},image:bmg2}).draw();}
                
                   
    })
})
}

const bmg3 =new Image();
bmg3.src="../images/block3.jpg";
bmg3.onload=()=>{
map.forEach((row,i)=>{
    row.forEach((symbol,j)=>{
        switch(symbol){
            case '3':new Boundary({position : {x:180+50*j,y:50+50*i},image:bmg3}).draw();}
                
                   
    })
})
}

const bmg4 =new Image();
bmg4.src="../images/block4.jpg";
bmg4.onload=()=>{
map.forEach((row,i)=>{
    row.forEach((symbol,j)=>{
        switch(symbol){
            case '4':new Boundary({position : {x:180+50*j,y:50+50*i},image:bmg4}).draw();}
                
                   
    })
})
}


    


