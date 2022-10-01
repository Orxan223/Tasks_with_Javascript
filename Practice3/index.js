class MineSweeper {
    qutular = document.querySelectorAll('#boxes .box');
    minalar = [];
    oyunBitib = false;

    constructor () {
        this.minalariDuz();
        console.log(this.minalar);
        this.minalarinSayiniGoster();
        this.qutularaClickleriYapishdir();
    }

    minalariDuz () {
        for(let i = 0; i < this.qutular.length; i++) {
            const tesadufiMina = Math.round(Math.random()) === 1;
            this.minalar.push(tesadufiMina);
        }
    }

    minalarinSayiniGoster () {
        document.querySelector('#say').innerHTML = this.minalar.filter(x => x).length;
        document.querySelector('#temiz-say').innerHTML = this.minalar.filter(x => !x).length;
    }

    qutularaClickleriYapishdir () {
        for(let i = 0; i < this.qutular.length; i++) {
            const qutu = this.qutular[i];

            qutu.addEventListener('click', (e) => {
                if (this.oyunBitib) {
                    alert("Oyun bitib!!!");
                    return;
                }

                if (this.minalar[i]) {
                    e.target.classList.add('qirmizi');
                    this.oyunBitib = true;
                } else {
                    e.target.classList.add('yashil');
                }
            });
        }
    }
}

const game = new MineSweeper();