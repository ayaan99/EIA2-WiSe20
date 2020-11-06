namespace L04_PotionMaker {
    export interface Item {
        name: string;
        price: number;
    }

    export interface Data {
        [category: string]: Item[];
    }

    export let data: Data = {
        Ingredient: [
            { name: "Spider-Webs", price: 250},
            { name: "Dragon-Blood", price: 1325},
            { name: "Mouse-Hair", price: 85},
            { name: "Unicorn-Tears", price: 650},
            { name: "Fly-Eyes", price: 345},
            { name: "Salt & Pepper", price: 28},
            { name: "Pixy-Dust", price: 735},
            { name: "Frog-Legs", price: 455}
        ]
    };
}