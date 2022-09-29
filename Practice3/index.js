const boxes = document.querySelectorAll(" .box")


function rengiDeyis(qutu){
    if (qutu.classList.contains('qirmizi')) {
        qutu.classList.remove('qirmizi')
    } else {
        qutu.classList.add('qirmizi')
    }       
}

for (let box of boxes) {
    box.addEventListener('click', function (e) {
        rengiDeyis(e.target)
    })
}