<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Dibujo Casa p5.js</title>
    <script src="https://cdn.jsdelivr.net/npm/p5@1.9.3/lib/p5.min.js"></script>
</head>
<body>
    <script>
        // Declaramos la variable para el canvas fuera de setup
        let cnv; 
        
        function setup() {
            // Creamos un canvas con el mismo tamaño que el ejemplo (600x400)
            cnv = createCanvas(600, 400); 
            // Esto asegura que el canvas se muestre en el cuerpo del documento
            cnv.parent(document.body); 
            // Dibujaremos solo una vez
            noLoop(); 
        }
        
        function draw() {
            // Fondo: Cielo azul claro (similar al ejemplo)
            background(135, 206, 235); 

            // --- Pasto ---
            fill(34, 139, 34); // Verde bosque
            // Dibuja un rectángulo para el pasto en la parte inferior (mismas coordenadas)
            rect(0, 300, 600, 100); 

            // --- Sol ---
            fill(255, 255, 0); // Amarillo
            noStroke(); // Sin borde
            // Dibuja el sol en la esquina superior izquierda
            ellipse(70, 70, 80, 80); 

            // --- Casa ---
            
            // Cuerpo de la casa
            fill(255, 100, 0); // Naranja
            rect(200, 200, 200, 150); 
            
            // Tejado
            fill(139, 69, 19); // Café
            // Dibuja un triángulo para el techo
            triangle(200, 200, 400, 200, 300, 100); 
            
            // Ventana (cuadrada)
            fill(173, 216, 230); // Azul claro para simular vidrio
            rect(240, 240, 40, 40); 
            
            // Puerta
            fill(100, 50, 0); // Café oscuro
            rect(320, 260, 40, 90);
            
            // --- Nubes ---
            fill(255); // Blanco
            noStroke(); // Sin borde para que parezcan nubes suaves
            
            // Nube 1
            ellipse(450, 80, 80, 50);
            ellipse(480, 70, 70, 40);
            ellipse(420, 70, 60, 40);
            
            // Nube 2
            ellipse(180, 150, 60, 40);
            ellipse(200, 140, 50, 30);
            ellipse(160, 140, 40, 30);
            
        }
    </script>
</body>
</html>
