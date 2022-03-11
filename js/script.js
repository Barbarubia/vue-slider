// Definizione delle impostazioni di Vue
const settings = {
    el: '#root',
    data: {
        activeIndex: 0, // Definisco un indice di partenza a cui applicare la classe active
        arrLocations: [
            {
                title: 'Svezia',
                img: '01.jpg',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
                title: 'Svizzera',
                img: '02.jpg',
                text: 'Lorem ipsum'
            },
            {
                title: 'Gran Bretagna',
                img: '03.jpg',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
            },
            {
                title: 'Germania',
                img: '04.jpg',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.'
            },
            {
                title: 'Paradise',
                img: '05.jpg',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.'
            }
        ],
    },
    methods: {
        // Funzione che al click del bottone seleziona la thumb precedente. Se la thumb attiva è la prima, il click riporta all'ultima thumb
        previous() {
            if (this.activeIndex == 0) {
                this.activeIndex = this.arrLocations.length -1;
            } else {
                this.activeIndex--;
            }
        },
        // Funzione che al click del bottone seleziona la thumb successiva. Se la thumb attiva è l'ultima, il click riporta alla prima thumb
        next() {
            if (this.activeIndex == this.arrLocations.length -1) {
                this.activeIndex = 0;
            } else {
                this.activeIndex++;
            }
        },
        // Funzione che incrementa l'indice attivo ogni 3 secondi e lo fa riportare a zero quando arriva all'ultimo elemento
        autoplay() {
            this.interval = setInterval(this.next, 3000);
        },
        // Funzione che stoppa l'incremento dell'indice attivo
        stopAutoplay() {
            clearInterval(this.interval);
        }
    },
    // Esecuzione della funzione autoplay quando viene creata l'app
    created() {
        this.autoplay();
    }
};

// Avvio Vue.js
const app = new Vue (settings);