namespace L09_Skipiste_Classes {

    window.addEventListener("load", handleLoad);
    export let crc: CanvasRenderingContext2D;
    let imageData: ImageData;

    let skiers: Skier[] = [];
    let snowflakes: Snowflake[] = [];

    function handleLoad(): void {
        console.log("start");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawBackground();
        imageData = crc.getImageData(0, 0, canvas.width, canvas.height);
        
        createObjects();
        
        window.setInterval(animate, 100);
    }
    function createObjects(): void {
        for (let i: number = 0; i < 12; i++) {
            let skier: Skier = new Skier();
            skiers.push(skier);
        }

        for (let i: number = 0; i < 250; i++) {
            let snowflake: Snowflake = new Snowflake();
            snowflakes.push(snowflake);
        }
    }
    
    function animate(): void {
        crc.clearRect(0, 0, crc.canvas.width, crc.canvas.height);
        crc.putImageData(imageData, 0, 0);

        moveObjects();
        drawObjects();
    }

    function moveObjects(): void {
        for (let i: number = 0; i < skiers.length; i++) {
            skiers[i].move(1 / 50);
        }

        for (let i: number = 0; i < snowflakes.length; i++) {
            snowflakes[i].move(1 / 50);
        }
    }

    function drawObjects(): void {
        for (let i: number = 0; i < skiers.length; i++) {
            skiers[i].draw();
        }
        for (let i: number = 0; i < snowflakes.length; i++) {
            snowflakes[i].draw();
        }
    }
}