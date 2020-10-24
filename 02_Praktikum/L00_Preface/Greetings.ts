namespace L00_Preface {

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
    
        let person: string | null = prompt("What's your name?");

        let text: HTMLElement = <HTMLElement>document.querySelector("#text");

        if (person == null || person == "") {
            text.innerHTML = "I don't know your name yet.";
        } else {
            text.innerHTML = "Hello " + person + "! Have a nice day :)";
        }
    }
}