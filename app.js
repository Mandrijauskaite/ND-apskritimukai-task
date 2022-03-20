/* 
Reikalavimui JS kodui: turi būti sukurtas masyvas balls.
*/

/* 1. etapas. 
Kiekvienas apskritimukas yra objektas, turintis dvi savybes: color ir number. 
Kiekvienas sukurtas naujas objektas turi būti pridedamas į masyvą balls, o pats masyvas patalpinamas localStorage. 
*/

/* 2. etapas.  
Mygtukas “sukurti naują” turi inicijuoti kodą, kuris perskaitytų duomenis iš laukelių ir pagal juos sukurtų naują objektą. 
*/

/* 3. etapas. 
Masyvas turi būti atvaizduojamas vizualiai HTML’e. 
Jame esantys objektai turi būti atvaizduojami kaip atitinkamos spalvos apskritimai su numeriu viduryje.
*/

/* 4. etapas. 
Mygtukas “ištrinti seniausią” turi inicijuoti kodą, kuris iš masyvo pašaliną seniausią apskritimuką (seniausias yra masyvo pradžioje)
*/

/* 5. etapas. 
Pasikeitus masyvo elementams (pridėjus, ištrynus) vizualinis masyvo atvaizdas HTML’e turi keistis dinamiškai. Perkrovus puslapį, 
turi išlikti prieš tai įrašyti apskritimukai (informacija paimama iš localStorage)
*/


console.log('1.-------rezultato fiksavimas SAVE-----------');

// let gameCounter = localStorage.getItem('save'); //  tikriname ar yra save
// if (gameCounter === null) { // jei nera save, pirma karta atejai
//     localStorage.setItem('save', 0); // isirasome save
//     gameCounter = 0; // sakome, kad yra nulis
// }

console.log('-------duomenų GENERAVIMAS-----------pradžia');
console.log(JSON.parse(localStorage.getItem("save")));
if (localStorage.getItem("save") !== null) {
    const element = JSON.parse(localStorage.getItem("save"));
    element.forEach(domObject => {
        console.log(domObject);

        let div = document.querySelector('.spalva')
        let rutul = document.createElement('div')
        rutul.classList.add('rutul')
        let rutuliukoReiksme = domObject.number;
        rutul.innerHTML = rutuliukoReiksme;
        div.appendChild(rutul)
        rutul.style.backgroundColor = domObject.color
        const apskritimukas = {};
        apskritimukas.number = rutuliukoReiksme
        apskritimukas.color = rutul.style.backgroundColor
    })
}
console.log('-------duomenų GENERAVIMAS-----------pabaiga');


console.log('-------f-ja duomenų GENERAVIMUI-----------pradžia');
function rand(min, max) { // f-ja duomenų generavimui. 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log('-------f-ja duomenų GENERAVIMUI-----------pabaiga');


const balls = []; // masyvas balls, į kurį eis duomenys


console.log('-------mygtukų SKUKŪRIMAS-----------pradžia');
const button1 = document.querySelector('.create') // 2. etapas. Mygtukas “sukurti naują”
const button2 = document.querySelector('.delete') // 4. etapas. Mygtukas “ištrinti seniausią”
console.log('-------mygtukų SKUKŪRIMAS-----------pabaiga');

console.log('-------mygtuko PASPAUDIMAS-----------pradžia');
button1.addEventListener('click', () => {

    let div = document.querySelector('.spalva')
    let rutul = document.createElement('div')
    rutul.classList.add('rutul')
    let rutuliukoReiksme = rand (1, 100);
    rutul.innerHTML = rutuliukoReiksme;
    div.appendChild(rutul)
    rutul.style.backgroundColor = "" + `rgb(${rand(1, 255)}, ${rand(1, 255)}, ${rand(1, 255)})`
    const apskritimukas = {};
    apskritimukas.number = rutuliukoReiksme
    apskritimukas.color = rutul.style.backgroundColor
    balls.push(apskritimukas)

    console.log(balls);
    localStorage.setItem("save", JSON.stringify(balls))

});
localStorage.getItem("save") // issaugom local storage
console.log('-------mygtuko PASPAUDIMAS-----------pabaiga');


console.log('-------rutuliuko TRYNIMAS-----------pradžia');
button2.addEventListener('click', () => {
    balls.pop(); //ištrinti
    const paskutinis = document.querySelector('.rutul'); // rutuliuko pašalinimas
    paskutinis.remove();
    console.log(balls);
})
console.log('-------rutuliuko TRYNIMAS-----------pabaiga');
