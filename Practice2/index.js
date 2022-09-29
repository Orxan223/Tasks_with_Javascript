// 1) sualllari yaziriq

var suallar = [
    {
        text: 'filan sual1',
        dogru_cavab: true
    },

    {
        text: 'filan sual2',
        dogru_cavab: false
    },
    {
        text: 'filan sual3',
        dogru_cavab: true
    },
]

// 2) i deyiseni aciriq ve onu 1 vahid artiririq her dongude.
// Elimiz ile function isleden de novbeti suala kecid edir.


var i = 0
var dogru = 0
var sehv = 0
const p = document.querySelector('#netice');
const d = document.querySelector('#dogru-cavablar');
const s = document.querySelector('#sehv-cavablar');
function sualiGoster(suallar, istifadecininCavabi) {
    // a. Bura funcsiyanin girisinde 2 arqumentde yaziriiq ki ora duwsun

    // 7) Burda problem olacaq bele ki, 1 sualin cavabi undifined olacaq, 2 sualin cavabina ise 1 sualin
    // cavabi dusecek ve belece davam edecek. Bunun qarsini almaq ucun asagidaki kodlari yazacagiq
    if (istifadecininCavabi) {
        // 8) eger cavab varsa if-e girecek cunki true-dur
        let evvelkiIndex = i - 1
        // index indiki ucundur cavab ise 1 evvelki ucundur
        if (evvelkiIndex < 0) {
            // menfiye dusmusukse
            evvelkiIndex = suallar.length - 1
            // menfiye dusende axrinci suali menimsedirik
        }

        let evvelkiSual = suallar[evvelkiIndex]
        if (evvelkiSual.dogru_cavab == true && istifadecininCavabi == 't' || evvelkiSual.dogru_cavab == false && istifadecininCavabi == 'f') {
            // dogru cavabnan istifadecinin verdiyi cavablari yoxluyub neticemizi aliriq
            dogru++
            // console.log("Sizin cavabiniz dogrudur", "d:", dogru, "s:", sehv);
            p.innerHTML = "Sizin cavabiniz dogrudur!!!"; 
        } else {
            sehv++
            p.innerHTML = "Sizin cavabiniz sehvdir...";
            // console.log("Sizin cavabiniz sehvdir!!!", "d:", dogru, "s:", sehv);

        }
        d.innerHTML = dogru;
        s.innerHTML = sehv;
    }
    if (i === suallar.length) {
        p.innerHTML = "Oyun bitdi!!!";
        return;
    }

    var sual = suallar[i]
    const h1 = document.querySelector('#sual')
    h1.innerHTML = sual.text
    // console.log(sual.text)

    if (i < suallar.length) {
        i++
    }
}
sualiGoster(suallar) // consolu acan kimi cavabin dusmesi ucun bele serbest sekilde cagirirq 1 defe

const btnYes = document.querySelector('#yes');
const btnNo = document.querySelector('#no');

btnYes.onclick = function () {
    sualiGoster(suallar, 't');
}

btnNo.onclick = function () {
    sualiGoster(suallar, 'f');
}































// var suallar = [
//     {
//         text: "filan sual1?",
//         dogru_cavab: true
//     },
//     {
//         text: "filan sual2?",
//         dogru_cavab: false
//     },
//     {
//         text: "filan sual3?",
//         dogru_cavab: false
//     }
// ];

// var i = 0;
// var dogrular = 0;
// var sehvler = 0;

// const p = document.querySelector('#netice');
// const d = document.querySelector('#dogru-cavablar');
// const s = document.querySelector('#sehv-cavablar');

// function sualiGoster(suallar, istifadechininCavabi) {
//     if (istifadechininCavabi && i < suallar.length) {
//         let evvelkiIndex = i - 1;
//         if (evvelkiIndex < 0) {
//             evvelkiIndex = suallar.length - 1;
//         }

//         let evvelkiSual = suallar[evvelkiIndex];
//         if (evvelkiSual.dogru_cavab === true && istifadechininCavabi === 't' || evvelkiSual.dogru_cavab === false && istifadechininCavabi === 'f') {
//             dogrular++;
//             p.innerHTML = "Sizin cavabiniz dogrudur!!!"; 
//         } else {
//             sehvler++;
//             p.innerHTML = "Sizin cavabiniz sehvdir...";
//         }

//         d.innerHTML = dogrular;
//         s.innerHTML = sehvler;
//     }

//     if (i === suallar.length) {
//         p.innerHTML = "Oyun bitdi!!!";
//         return;
//     }

//     var sual = suallar[i];

//     const h1 = document.querySelector('#sual');
//     h1.innerHTML = sual.text;

//     if (i < suallar.length) {
//         i++;
//     }
// }

// sualiGoster(suallar);

// const btnYes = document.querySelector('#yes');
// const btnNo = document.querySelector('#no');

// btnYes.onclick = function () {
//     sualiGoster(suallar, 't');
// }

// btnNo.onclick = function () {
//     sualiGoster(suallar, 'f');
// }