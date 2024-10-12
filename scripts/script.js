

const canvas=document.querySelector('.map');
const c=canvas.getContext('2d');

// canvas.width = innerWidth;
// canvas.height = innerHeight;

// import {Boundary} from "./map.js";



 
// const map=[
//     [ '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7' ],
//     [ '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7' ],
//     [ '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7' ],
//     [ '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7' ],
//     [ '7', '7', '7', '7', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '3', '3', '3', '3', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '7', '7', '7', '7' ],
//     [ '7', '7', '7', '7', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '3', '3', '3', '3', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '7', '7', '7', '7' ],
//     [ '7', '7', '7', '7', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '4', '4', '7', '7', '7', '7' ],
//     [ '7', '7', '7', '7', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '4', '4', '7', '7', '7', '7' ],
//     [ '7', '7', '7', '7', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '1', '1', '3', '3', '0', '0', '0', '0', '0', '0', '3', '3', '1', '1', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '7', '7', '7', '7' ],
//     [ '7', '7', '7', '7', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '1', '1', '3', '3', '0', '0', '0', '0', '0', '0', '3', '3', '1', '1', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '7', '7', '7', '7' ],
//     [ '7', '7', '7', '7', '4', '4', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '7', '7', '7', '7' ],
//     [ '7', '7', '7', '7', '4', '4', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '7', '7', '7', '7' ],
//     [ '7', '7', '7', '7', '0', '0', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '3', '3', '3', '3', '3', '3', '0', '0', '7', '7', '7', '7' ],
//     [ '7', '7', '7', '7', '0', '0', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '3', '3', '3', '3', '3', '3', '0', '0', '7', '7', '7', '7' ],
//     [ '7', '7', '7', '7', '0', '0', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '3', '3', '3', '3', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '0', '0', '7', '7', '7', '7' ],
//     [ '7', '7', '7', '7', '0', '0', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '3', '3', '3', '3', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '0', '0', '7', '7', '7', '7' ],
//     [ '7', '7', '7', '7', '0', '0', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '3', '3', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '0', '0', '1', '1', '3', '3', '7', '7', '7', '7' ],
//     [ '7', '7', '7', '7', '0', '0', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '3', '3', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '0', '0', '1', '1', '3', '3', '7', '7', '7', '7' ],
//     [ '7', '7', '7', '7', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '2', '2', '4', '4', '0', '0', '0', '0', '0', '0', '7', '7', '7', '7' ],
//     [ '7', '7', '7', '7', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '0', '0', '0', '0', '2', '2', '4', '4', '0', '0', '0', '0', '0', '0', '7', '7', '7', '7' ],
//     [ '7', '7', '7', '7', '2', '2', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '3', '3', '3', '3', '0', '0', '0', '0', '0', '0', '3', '3', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '7', '7', '7', '7' ],
//     [ '7', '7', '7', '7', '2', '2', '0', '0', '0', '0', '0', '0', '0', '0', '3', '3', '3', '3', '3', '3', '0', '0', '0', '0', '0', '0', '3', '3', '3', '3', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '7', '7', '7', '7' ],
//     [ '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7' ],
//     [ '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7' ],
//     [ '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7' ],
//     [ '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7' ],
// ]

// const border=[ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] ];
// const img =new Image();
// img.src="../images/wall.jpg";
// const bmg1 =new Image();
// bmg1.src="../images/wall.png";
// const bmg2 =new Image();
// bmg2.src="../images/wall.png";
// const bmg3 =new Image();
// bmg3.src="../images/wall.png";
// const bmg4 =new Image();
// bmg4.src="../images/wall.png";
// const images = [img, bmg1, bmg2, bmg3, bmg4];
// let loaded = 0;
// let bsize=25;
// images.forEach(image => {
//     image.onload = () => {
//         loaded++;
//         if (loaded == 5) {
            
//             map.forEach((row,i)=>{
//                     row.forEach((symbol,j)=>{
//                         switch(symbol){
//                             case '7':border[i][j]=new Boundary({position : {x:120+bsize*j,y:25+bsize*i},image:img});
//                              border[i][j].draw();
//                              border[i][j].blocked=true;
//                              break;
//                             case '1':border[i][j]=new Boundary({position : {x:120+bsize*j,y:25+bsize*i},image:bmg1});
//                              border[i][j].draw();
//                              border[i][j].blocked=true;
//                              break;
//                             case '2':border[i][j]=new Boundary({position : {x:120+bsize*j,y:25+bsize*i},image:bmg2});
//                              border[i][j].draw();
//                              border[i][j].blocked=true;
//                              break;
//                             case '3':border[i][j]=new Boundary({position : {x:120+bsize*j,y:25+bsize*i},image:bmg3});
//                              border[i][j].draw();
//                              border[i][j].blocked=true;
//                              break;
//                             case '4':border[i][j]=new Boundary({position : {x:120+bsize*j,y:25+bsize*i},image:bmg4});
//                              border[i][j].draw();
//                              border[i][j].blocked=true;
//                              break;
//                              case '@':border[i][j]=new Boundary({position : {x:120+bsize*j,y:25+bsize*i},image:bmg4});
                             
//                              border[i][j].blocked=true;
//                              break;
//                              default:  
//                              border[i][j] = new Boundary({position: {x: 120 + bsize * j, y: 25 + bsize * i}, image: null});
//                              border[i][j].blocked = false;  
//                              break;
                     
//                         }
                                   
//                     })
//          })}}})
let bsize=25;
import {Player} from "./player.js";
const char1=new Image;
char1.src="../images/walk with knife.png";
var p;
let path = [];
var targetIndex = 0;
let isMoving = false;
char1.onload=()=>{
p= new Player({position:{x:300,y:350},velocity:{x:0,y:0},image:char1}) 
p.build();}

import {border} from "./wall.js";
function move(){
    // c.save();
    // c.translate(p.position.x+40/2,p.position.y+50/2);
    // c.rotate(p.pangle);
    // c.clearRect(-20,-25,40,50);
    // c.restore();
    // p.update();
    // p.build();
    if (path.length > 0 && p) {
        // Get the next position to move to
        const target = path[targetIndex];

        // Calculate the difference between current position and target position
        const dx = target.position.x - p.position.x;
        const dy = target.position.y - p.position.y;
        
        // Define the speed of movement
        const speed = 2;

        // Normalize the direction
        const distance = Math.sqrt(dx * dx + dy * dy);
       
        if (distance > 1) {
            
            c.save();
            c.translate(p.position.x+40/2,p.position.y+50/2);
            c.rotate(p.pangle);
            c.clearRect(-20,-25,40,50);
            c.restore();
            var theeta=Math.atan2(target.position.y-p.position.y,target.position.x-p.position.x);
    
        if(target.position.x-p.position.x-20>=0){
            p.pangle=p.angle;
            p.angle=theeta;
        }
        else{
            p.pangle=p.angle;
            p.angle=theeta;
        }
            
            
       
            p.position.x += (dx / distance) * speed;
            p.position.y += (dy / distance) * speed;
            p.build();
        } else {
            // If close enough to the target, move to the next point in the path
            targetIndex++;
        }
       

        // If the player has reached the final target, stop moving
        if (targetIndex >= path.length) {
            console.log("Reached final destination.");
            path = [];  // Clear the path after reaching the destination
            targetIndex = 0;
        }
        
        

    }





    
    requestAnimationFrame(move);
}
move();


function findPath(start, target) {
    const openList = [];
    const closedList = [];
    openList.push(start);

    // Heuristic function using Octile distance (better for grids with diagonal movement)
    function heuristic(a, b) {
        const dx = Math.abs(a.position.x - b.x);
        const dy = Math.abs(a.position.y - b.y);
        const diagonalCost = 1.4;
        return (dx + dy) + (diagonalCost - 2) * Math.min(dx, dy);
    }

    while (openList.length > 0) {
        // Find node with the lowest f value (can be optimized with a priority queue)
        let lowestIndex = 0;
        for (let i = 0; i < openList.length; i++) {
            if (openList[i].f < openList[lowestIndex].f) {
                lowestIndex = i;
            }
        }

        let current = openList[lowestIndex];

        // Check if we've reached the target
        if (current.position.x <= target.x && current.position.x + bsize >= target.x &&
            current.position.y <= target.y && current.position.y + bsize >= target.y) {
            console.log("Path found!");

            // Reconstruct the path
            const visitedNodes = new Set();
            let temp = current;

            while (temp && temp.parent && !visitedNodes.has(temp)) {
                path.push(temp);
                visitedNodes.add(temp);
                temp = temp.parent;
            }
            path.reverse();  // Reverse the path to start from the beginning
            targetIndex = 0;  // Reset the index to start moving
            return;
        }

        // Remove current node from open list and add to closed list
        openList.splice(lowestIndex, 1);
        closedList.push(current);

        // Process neighbors of the current node
        current.neighbour.forEach(neighbour => {
            if (closedList.includes(neighbour) || neighbour.blocked || isNearObstacle(neighbour, current)) return;  // Skip blocked or already processed cells

            const tentativeG = current.g + 1;

            // Calculate heuristic only once per neighbor
            const heuristicValue = heuristic(neighbour, target);

            if (!openList.includes(neighbour)) {
                neighbour.g = tentativeG;
                neighbour.h = heuristicValue;
                neighbour.f = neighbour.g + neighbour.h;
                neighbour.parent = current;
                openList.push(neighbour);  // Add neighbor to the open list
            } else if (tentativeG < neighbour.g) {
                neighbour.g = tentativeG;
                neighbour.f = neighbour.g + heuristicValue;
                neighbour.parent = current;
            }
        });
    }

    console.log("No path found.");
}

addEventListener("click", (event) => {
    // Reset the path and targetIndex when a new click happens
    path.length = 0;
    targetIndex = 0;

    if (!p) return;  // Ensure player exists before attempting pathfinding

    // Reset heuristic values and neighbors for all grid cells
    border.forEach((row, i) => {
        row.forEach((grid, j) => {
            grid.f = 0;
            grid.g = 0;
            grid.h = 0;
            grid.neighbour = [];

            // Add neighboring cells (including diagonals)
            if (i - 1 >= 0) {
                grid.neighbour.push(border[i-1][j]);  // Top
                if (j - 1 >= 0) grid.neighbour.push(border[i-1][j-1]);  // Top-left
                if (j + 1 <= 44) grid.neighbour.push(border[i-1][j+1]);  // Top-right
            }
            if (i + 1 <= 24) {
                grid.neighbour.push(border[i+1][j]);  // Bottom
                if (j - 1 >= 0) grid.neighbour.push(border[i+1][j-1]);  // Bottom-left
                if (j + 1 <= 44) grid.neighbour.push(border[i+1][j+1]);  // Bottom-right
            }
            if (j - 1 >= 0) grid.neighbour.push(border[i][j-1]);  // Left
            if (j + 1 <= 44) grid.neighbour.push(border[i][j+1]);  // Right
        });
    });

    // Calculate player's current grid position
    const row = Math.floor((p.position.y - 25) / bsize);
    const column = Math.floor((p.position.x - 120) / bsize);

    const start = border[row][column];  // Starting position in the grid
    
    const target = {
        x: event.x,
        y: event.y
    };

    // Call the pathfinding function
    findPath(start, target);
});
// Check if a neighbor is blocked or near a blocked cell
function isNearObstacle(neighbour, grid, distanceThreshold = bsize) {
    // Loop through neighboring cells to check for blocked cells within a certain distance
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            let neighborX = neighbour.gridX + i;
            let neighborY = neighbour.gridY + j;
            
            if (neighborX >= 0 && neighborY >= 0 && 
                neighborX < border.length && neighborY < border[0].length) {
                if (border[neighborX][neighborY].blocked) {
                    // Calculate distance to the obstacle
                    const dx = border[neighborX][neighborY].position.x - neighbour.position.x;
                    const dy = border[neighborX][neighborY].position.y - neighbour.position.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < distanceThreshold) return true;
                }
            }
        }
    }
    return false;
}
