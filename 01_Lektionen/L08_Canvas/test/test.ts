namespace test8 {
    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.canvas.width = 500;
        crc2.canvas.height = 300;

        crc2.fillStyle = "#FF0000";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        crc2.beginPath();
        crc2.arc(100, 80, 60, 40, 2 * Math.PI);
        crc2.strokeStyle = "white";
        crc2.strokeStyle = "dotted";
        crc2.closePath();
        crc2.stroke();

        // crc2.beginPath();
        // crc2.ellipse(100, 70, 80, 40, 1, 40, 80);
        // crc2.closePath();
        // crc2.stroke();

        // crc2.beginPath();
        // crc2.moveTo(30, 30);
        // crc2.lineTo(50, 50);
        // crc2.lineTo(40, 30);
        // crc2.closePath();
        // crc2.stroke();

        // let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 100);

        // gradient.addColorStop(0.4, "black");
        // gradient.addColorStop(0.4, "red");
        // gradient.addColorStop(0.6, "red");
        // gradient.addColorStop(0.6, "gold");

        // crc2.fillStyle = gradient;
        // crc2.fillRect(0, 0, 200, 100);

        // let pattern: CanvasRenderingContext = document.createElement("canvas").getContext("2d");
        // pattern.canvas.width = 40;
        // pattern.canvas.height = 20;

        // pattern.fillStyle = "#fec";
        // pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        // pattern.moveTo(0, 10);
        // pattern.lineTo(10, 10);
        // pattern.lineTo(20, 0);
        // pattern.lineTo(30, 0);
        // pattern.lineTo(40, 10);
        // pattern.lineTo(30, 20);
        // pattern.lineTo(20, 20);
        // pattern.lineTo(10, 10);
        // pattern.stroke();

        // crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat");
        // crc2.fillRect(0, 0, canvas.width, canvas.height);
    }
}