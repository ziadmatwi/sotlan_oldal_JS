export function egyReceptMegjelenit(recept,i){
    let receptekElem = document.querySelector(".receptek")
    receptekElem.innerHTML += `<div class='div${i}'>
    <img src='${recept.kep}' /><p class='ido'>${recept.ido}</p><p class="nehezseg">${recept.nehezseg}</p><h3><a href="#">${recept.nev}</a></h3><p>${recept.kcal}</p>
     <button class='div' id='${i}' type='button'>NYOMJ MEG KÉRLEK</button></div>`
}

export function receptekMegjelenit(lista){
    let hossz = lista.length
    for (let i = 0; i < hossz; i++){
        egyReceptMegjelenit(lista[i],i)
    }
}

export function receptekEsemeny(lista){
    let gombElemek = document.querySelectorAll(".receptek button")
    let hossz = gombElemek.length
    console.log(gombElemek[0])
    for (let i = 0; i < hossz; i++){
        gombElemek[i].addEventListener("click", kattintaskor);
    }
    function kattintaskor(event){
        
        console.log(lista[Number(event.target.id)])
    }
}
