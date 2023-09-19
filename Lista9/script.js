let input = document.getElementById("nazwaListy")


input.addEventListener("input", function () {
    input.value = input.value.replace("\.", ",");
  });

let input2 = document.getElementById("nazwaProduktu")


input.addEventListener("input", function () {
    input.value = input.value.replace("\.", ",");
  });

let input3 = document.getElementById("ilosc")


input.addEventListener("input", function () {
    input.value = input.value.replace("\.", ",");
  });


const dodajListe = () =>{
    let nazwaListy = document.getElementById("nazwaListy").value;
    let nazwaProduktu = document.getElementById("nazwaProduktu").value;
    let typ = document.getElementById("typ").value;
    let ilosc = document.getElementById("ilosc").value
    const date = new Date();
    
    let lista = nazwaListy + "." + nazwaProduktu + "." + typ + "." + ilosc + "." + date.getFullYear()+"-"+ (date.getMonth()+1) +"-"+ date.getDate();

    if(localStorage.getItem('counter') == null){
        localStorage.setItem('counter', 1)
    }else{
        let counerNr = parseInt(localStorage.getItem('counter'))
        localStorage.setItem('counter', counerNr+=1)
    }

    localStorage.setItem('lista'+localStorage.getItem('counter'), lista);

    console.log(lista)
    wyswietlListe()
    window.location.reload();
}

const wyswietlListe = () =>{

    const items = { ...localStorage };

    console.log(items)

    let word = [];

    for (let i = 1; i <= localStorage.getItem('counter'); i++) {

        let newH1 = 0;
        text = localStorage.getItem('lista'+i);
        const myArray = text.split(".");
        if(!(word.includes(myArray[0]))){
            newH1 = 1;
            console.log("tutaj")
        };
        word.push(myArray[0]);
        console.log(myArray[0]);

        if(newH1 && !document.getElementById(myArray[0])){
            const div = document.createElement("h1");
            div.setAttribute('id',myArray[0])
            div.style.background = "#DBBADD";
            div.style.color = "white";
            div.innerHTML = myArray[0];
            
            document.getElementById("lista").appendChild(div)

            const date = document.createElement("p");
            date.setAttribute('id',myArray[4])
            date.style.background = "#DBBADD";
            date.style.float = "right"
            date.style.color = "white";
            date.innerHTML = myArray[4];
            
            document.getElementById(myArray[0]).appendChild(date)
        }
    }

    for (let i = 1; i <= localStorage.getItem('counter'); i++) {

        let newH1 = 0;
        text = localStorage.getItem('lista'+i);
        const myArray = text.split(".");
        if(!(word.includes(myArray[1]))){
            newH1 = 1;
            console.log("tutaj")
        };
        word.push(myArray[1]);
        console.log(myArray[1]);

        if(newH1 && (document.getElementById(myArray[0]))){
            const div = document.createElement("p");
            div.setAttribute('id',myArray[1])
            div.style.background = "#DBBADD";
            div.style.textAlign = "center"
            div.style.fontSize = "24px"
            div.style.color = "white";
            div.innerHTML = "<br/>" + myArray[1]+ " ilość: " + myArray[3] + " kat: " + myArray[2];
            
            document.getElementById(myArray[0]).appendChild(div)
        }
    }
}

const czysc = () =>{
    localStorage.clear();
    window.location.reload();
}