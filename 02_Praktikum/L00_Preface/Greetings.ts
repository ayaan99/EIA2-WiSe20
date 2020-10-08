namespace L00_Preface {

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
    
        var person: string | null = prompt("What's your name?");

        if (person == null || person == "") {
            document.querySelector("#text").innerHTML = "I don't know your name yet.";
        } else {
            document.querySelector("#text").innerHTML = "Hello " + person + "! Have a nice day :)";
        }
    }
}