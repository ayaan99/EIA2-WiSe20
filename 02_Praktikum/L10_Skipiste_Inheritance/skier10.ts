namespace L10_Skipiste_Inheritance {
    export class Skier {

        move(_timeslice: number): void {
            // console.log("skier is moving");
            
        }
        
        draw(): void {
            let x: number = Math.random() * 800;
            let y: number = (Math.random() * 600) + 200;
            
            if (x > 450) {
                y = (Math.random() * 650) + 500;
            }

            let color: string[] = ["#ff0000", "#04B404", "#0000ff", "#DF7401", "#04B4AE", "#ff00bf"];
            let randomColor: string = color[Math.floor(Math.random() * color.length)];
            let radius: number = 10;

            crc.save();
            crc.translate(x, y);
            crc.rotate(20 * Math.PI / 180);

            crc.beginPath();
            crc.arc(0, 0, radius, 0, 2 * Math.PI);
            crc.fillStyle = randomColor;
            crc.fill();
    
            crc.beginPath();
            crc.moveTo(0, 0);
            crc.lineTo(20, 50);
            crc.lineTo(-20, 50);
            crc.closePath();
            crc.fillStyle = randomColor;
            crc.fill();
    
            crc.translate(0, 50);
            crc.beginPath();
            crc.moveTo(0, 0);
            crc.lineTo(0, 25);
            crc.stroke();
    
            crc.translate(0, 25);
            crc.beginPath();
            crc.moveTo(-25, 0);
            crc.lineTo(25, 0);
            crc.lineTo(45, -20);
            crc.stroke();
            crc.restore();
        }
    }
}