// document.addEventListener("DOMContentLoaded", loadDOM)
// function loadDOM(){ 
//     displaySearch()
// }
// function displaySearch(){
//   document.getElementById('btn').addEventListener ("click",()=> {
//     fetch("superheroes.php")
//     .then(response => response.text())
//     .then( (data) =>alert(data))
// });}

document.addEventListener("DOMContentLoaded", loadDOM)
function loadDOM(){ 
    displaySearch()
}
function displaySearch(){
  document.getElementById('btn').addEventListener ("click",()=> {
    var input = document.getElementById("input").value;
    let fData = new FormData();
    let hed = new Headers();

    fData.append('heroname', Sanitize(input));
    let reqst = new Request("superheroes.php", {
        method: 'POST',
        headers: hed,   
        mode: 'same-origin',
        body: fData});
    fetch(reqst)
    .then( (response)=>
         response.text()
        )
    .then( (data) =>{
    console.log(data)
    document.getElementById('result').innerHTML= data;})
})};

function Sanitize(str) {
    str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, " ");
    return str.trim();
}
