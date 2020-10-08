namespace L00_Preface {

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
    
        var person: string | null = prompt("What's your name?");

        if (person == null || person == "") {
            window.alert("I don't know your name yet.");
        } else {
            window.alert("Hello " + person + "! Have a nice day :)");
        }
    }
}