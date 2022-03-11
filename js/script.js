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
        previous() {
            if (this.activeIndex == 0) {
                this.activeIndex = this.arrLocations.length -1;
            } else {
                this.activeIndex--;
            }
        },
        next() {
            if (this.activeIndex == this.arrLocations.length -1) {
                this.activeIndex = 0;
            } else {
                this.activeIndex++;
            }
        }
    }
};

// Avvio Vue.js
const app = new Vue (settings);