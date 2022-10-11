// PRIMO ESERCIZIO

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    ageComparison(user) {
        if (this.age > user.age) {
            console.log(`${this.name} è più vecchio di ${user.name}.`);
        }
        else {
            console.log(`${this.name} è più giovane di ${user.name}.`);
        }
    }
}

let p1 = new Person("Mario", 24);
let p2 = new Person("Luigi", 31);
let p3 = new Person("Giulia", 28);

p2.ageComparison(p1);
p3.ageComparison(p2);
p1.ageComparison(p2);
p2.ageComparison(p1);




// SECONDO ESERCIZIO

const DIV = document.querySelector('#content')
const ITEMS = ['rosso', 'verde', 'blu', 'giallo', 'rosa', 'viola', 'azzurro', 'lilla', 'arancione', 'indaco', 'marrone', 'grigio', 'nero', 'ocra', 'turchese', 'celeste', 'beige'];
let PAGINA_CORRENTE = 0

class Pagina {
    constructor(items = [], pageSize = 10) {
        this.items = items;
        this.pageSize = pageSize;
    }
    render(container, pagina = 0) {
        container.innerHTML = ''
        // mostro tutti gli elementi sulla pagina

        // let arrayCut = this.item.slice(0, 3) // il 3 è escluso
        // let arrayCut = this.item.slice(3, 6) // il 6 è escluso
        // let arrayCut = this.item.slice(6, 9) // il 9 è escluso

        let arrayTagliato = this.items.slice((this.pageSize * pagina), ((this.pageSize * pagina) + this.pageSize))

        for (const item of arrayTagliato) {
            let div = document.createElement('div')
            div.classList.add('lista')
            div.innerText = item;
            container.appendChild(div)
        }
    }
}

window.onload = () => {
    avantiPagina()
}

const avantiPagina = () => {
    let pag = new Pagina(ITEMS, 10)
    pag.render(DIV, PAGINA_CORRENTE)
    PAGINA_CORRENTE++
}

const indietroPagina = () => {
    let pag = new Pagina(ITEMS, 10)
    pag.render(DIV, PAGINA_CORRENTE)
    PAGINA_CORRENTE--
}





// QUESTO E' COME AVEVO TENTATO INIZIALMENTE
// class Pagination {
//     items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
//     pageSize = 10;
//     showList() {
//         for (let i = 0; i < this.items.length; i++) {
//             let div = document.createElement('div')
//             div.classList.add('lista')
//             div.innerHTML = this.items[i]
//             let box = document.querySelector('#content')
//             box.appendChild(div)
//         }
//     }
//     checkPage(e) {
//         if (e == 1) {
//             document.querySelector('#content').innerHTML = ''
//             for (let i = 0; i < this.pageSize; i++) {
//                 let div = document.createElement('div')
//                 div.classList.add('lista')
//                 div.classList.add('dblock')
//                 div.innerHTML = this.items[i]
//                 let box = document.querySelector('#content')
//                 box.appendChild(div)
//             }
//         }
//         if (e == 2) {
//             document.querySelector('#content').innerHTML = ''
//             for (let i = this.pageSize; i < this.items.length; i++) {
//                 let div = document.createElement('div')
//                 div.classList.add('lista')
//                 div.classList.add('dblock')
//                 div.innerHTML = this.items[i]
//                 let box = document.querySelector('#content')
//                 box.appendChild(div)
//             }
//         }
//     }
// }

// let prodotti = new Pagination()
// prodotti.showList()

// let button1 = document.getElementById('btn1')
// let button2 = document.getElementById('btn2')

// button1.addEventListener('click', prodotti.checkPage(1))
// button2.addEventListener('click', prodotti.checkPage(2))