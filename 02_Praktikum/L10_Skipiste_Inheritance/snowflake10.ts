namespace L10_Skipiste_Inheritance {
    export class Snowflake {
        position: Vector;
        velocity: Vector;
        size: number;

constructor(_size?: number, _position?: Vector) {
            if (_position)
                this.position = _position;
            else {
                this.position = new Vector(800, 600); 
                this.position.random(800, 600);
            }
            if (_size)
                this.size = _size;
            else
                this.size = Math.random() * (3 - 0.1) + 0.1;
            
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);
        }

        move(_timeslice: number): void {
            // console.log("snowflake is moving");
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += crc.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc.canvas.height;
            if (this.position.x > crc.canvas.width)
                this.position.x -= crc.canvas.width;
            if (this.position.y > crc.canvas.height)
                this.position.y -= crc.canvas.height;
        }
        
        draw(): void {
            let x: number = Math.random() * window.innerWidth;
            let y: number = Math.random() * window.innerHeight;
            let radiusSnowflake: number = Math.random() * 2.5 + 1;
            crc.beginPath();
            crc.arc(x, y, radiusSnowflake, 0, Math.PI * 2, false);
            crc.fillStyle = "white";
            crc.fill();
        }
    }
}