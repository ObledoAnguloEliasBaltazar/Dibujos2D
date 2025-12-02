// Variable global para el canvas
let cnv; 

function setup() {
    cnv = createCanvas(600, 400); 
    cnv.parent(document.body); 
    noLoop(); 
}

function draw() {
    background(135, 206, 235); 

    fill(34, 139, 34);
    rect(0, 300, 600, 100); 


    fill(255, 255, 0)
    noStroke(); // Sin borde para el sol
    ellipse(70, 70, 80, 80); 
    fill(255, 100, 0); 
    rect(200, 200, 200, 150); 
    
    fill(139, 69, 19); 
    triangle(200, 200, 400, 200, 300, 100); 
    
    fill(173, 216, 230); 
    rect(240, 240, 40, 40); 
    
    fill(100, 50, 0); 
    rect(320, 260, 40, 90);
    
    fill(255); 
    noStroke(); 
    
    ellipse(450, 80, 80, 50);
    ellipse(480, 70, 70, 40);
    ellipse(420, 70, 60, 40);
    
    ellipse(180, 150, 60, 40);
    ellipse(200, 140, 50, 30);
    ellipse(160, 140, 40, 30);
    
}
