var sekiller = [
    {
        path: 's.jpg',
    },
    {
        path: 'se.jpg',
    },
    {
        path: 'sek.webp',
    }
]



var i = 0

function nex(){
    s.setAttribute('src', sekiller[i].path)
    if(i+1 < sekiller.length){
        i++
    }else{
        i = 0
    }
    
}

function pr(){
    s.setAttribute('src', sekiller[i].path)
    if(i > 0){
        i--
    }else{
        i = sekiller.length - 1
    }
 
}

const next = document.querySelector("#ireli")
const pre = document.querySelector("#geri")
const s = document.querySelector("#sekil")


next.onclick = function () {
    nex()
}


pre.onclick = function () {
    pr()
}