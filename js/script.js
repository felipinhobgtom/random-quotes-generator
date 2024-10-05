function generate(){
    let quotes = {
        "- Sócrates" : '"Só sei que nada sei."',
        "- Aristóteles" : '"A esperança é o sonho do homem acordado."',
        "- Friedrich Nietzsche" : '"Eu não sei o que quero ser, mas sei muito bem o que não quero me tornar."',
        "- Albert Camus" : '"Toda a infelicidade dos homens provém da esperança."'
    }

    let authors = Object.keys(quotes);

    let author = authors[Math.floor(Math.random() * authors.length)];

    let quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}