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
            console.log("Sizin cavabiniz dogrudur", "d:", dogru, "s:", sehv);

        } else {
            sehv++
            console.log("Sizin cavabiniz sehvdir!!!", "d:", dogru, "s:", sehv);

        }
    }
    if (i === suallar.length) {
        // sona geldikde bitsin
        alert("Oyun bitdi!!! Dogru cavablarin sayi: " + dogru + "; sehv cavablarin sayi: " + sehv);
        return
    }

    var sual = suallar[i]

    console.log(sual.text)
    if (i < suallar.length) {
        i++
    }
}
sualiGoster(suallar) // consolu acan kimi cavabin dusmesi ucun bele serbest sekilde cagirirq 1 defe


// 3) Event yaziriq ki, el ile yox , clickliyende islesin
// Isdenilen duymeni click etdikde sualiGoster() isleyecek
window.onkeyup = function (e) {
    // 4) Biz isdenilen duymeni sixdiqda isleyirdi , indi ise sert veririk ki, 
    // ancaq f, t duymeleri sixildiqda islesin
    if (e.key == 'f' || e.key == 't')
        // 5) a. istifadecinin secimini,funksiyaya gondermek lazimdir, ona gore arqumentnen gonderirik e.key olaraq
        sualiGoster(suallar, e.key)
    // 6) e.key ya f ve ya t herfi dusecek bunuda funcsiyanin icerisine gonderirik
}