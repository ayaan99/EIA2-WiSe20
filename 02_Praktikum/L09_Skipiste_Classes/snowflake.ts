namespace L09_Skipiste_Classes {
    export class Snowflake {
        position: Vector;
        velocity: Vector;
        
        move(_timeslice: number): void {
            // console.log("snowflake is moving");
            
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