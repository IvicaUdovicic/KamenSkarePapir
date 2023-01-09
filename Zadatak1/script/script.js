


//Dodavanje html za ispis izbora i ishoda

let parafr = document.getElementById("result");
parafr.innerHTML =
  `<p id=izbor></p>
<h3 id=rezultat></h3><br>
<span id=timovi></span><br>
<span id=score></span>`

let stringTimovi=`Računalo  -  Vi`
document.getElementById("timovi").innerText=stringTimovi;
//Dodavanje i brisanje klase active

document.getElementById("rock").addEventListener("click", () => {
  document.getElementById("rock").classList.toggle("active");
  document.getElementById("scissors").classList.toggle("active", false);
  document.getElementById("paper").classList.toggle("active", false);
});


document.getElementById("scissors").addEventListener("click", () => {
  document.getElementById("scissors").classList.toggle("active");
  document.getElementById("rock").classList.toggle("active", false);
  document.getElementById("paper").classList.toggle("active", false);
});


document.getElementById("paper").addEventListener("click", () => {
  document.getElementById("paper").classList.toggle("active");
  document.getElementById("rock").classList.toggle("active", false);
  document.getElementById("scissors").classList.toggle("active", false);

});

//poziv funkcije

document.getElementById("play").addEventListener("click", handleClick);
let ljudBrojac = 0;
let kompBrojac = 0;

function handleClick() {
  let machineIzbor = Math.floor(Math.random() * 3) + 1
  //zadavanje uloga u string
  if (machineIzbor == 1) {
    machineIzbor = "paper";
    altMachine = "Papir";
  }
  if (machineIzbor == 2) {
    machineIzbor = "scissors";
    altMachine = "Škare";
  }
  if (machineIzbor == 3) {
    machineIzbor = "rock";
    altMachine = "Kamen";
  }
  //Ispis nasumicnog izbora
  document.getElementById("izbor").innerText = "Igrate protiv: " + altMachine;

  let humanIzbor = document.getElementsByClassName("active")[0].id;


  //Ishodi igre i ispis ishoda

  if (machineIzbor == humanIzbor) {
    let ishod = "Izjednaceno"
    document.getElementById("rezultat").innerText = ishod;
  }
  if (humanIzbor == "rock" && machineIzbor == "scissors") {
    let ishod = "Pobjeda"
    document.getElementById("rezultat").innerText = ishod;
  }
  if (humanIzbor == "rock" && machineIzbor == "paper") {
    let ishod = "Izgubili ste"
    document.getElementById("rezultat").innerText = ishod;
  }
  if (humanIzbor == "paper" && machineIzbor == "rock") {
    let ishod = "Pobjeda"
    document.getElementById("rezultat").innerText = ishod;
  }
  if (humanIzbor == "paper" && machineIzbor == "scissors") {
    let ishod = "Izgubili ste"
    document.getElementById("rezultat").innerText = ishod;
  }
  if (humanIzbor == "scissors" && machineIzbor == "paper") {
    let ishod = "Pobjeda"
    document.getElementById("rezultat").innerText = ishod;
  }
  if (humanIzbor == "scissors" && machineIzbor == "rock") {
    let ishod = "Izgubili ste"
    document.getElementById("rezultat").innerText = ishod;
  }


  let provjera = document.getElementById("rezultat").innerText;
//brojac pobjeda
  if (provjera == "Pobjeda") {

    ljudBrojac++;
    console.log(ljudBrojac);
  }
  if (provjera == "Izgubili ste") {
    kompBrojac++;

  }
  let string = `${kompBrojac} : ${ljudBrojac}`
  document.getElementById("score").innerText = string;
}
