import '../style.css'
import p5 from "p5";

console.log("001");

const sketch = (p) => {
  p.setup = () => {
    p.createCanvas(400, 400);
  };

  p.draw = () => {
    // p.background(200, 200, 200);
    // p.fill(255,0,0);
    // p.ellipse(100, 200, 100);
    // p.fill(0, 0, 255); 
    // p.ellipse(300, 200, 100);
    
    p.createCanvas(400, 400);
    p.background(200, 200, 200);
    p.noStroke();
    p.rect(50, 100, 300, 200);
    p.fill(188, 0, 45);
    p.ellipse(200, 200, 120);
  };
};

new p5(sketch);