"use strict";

class Samples {
    constructor(src, alt, title, descr, button, parentSelector, ...classes) {
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.button = button;
        this.classes = classes; //Это массив классов//
        this.parent = document.querySelector(parentSelector);
    }

    render() {
        const element = document.createElement('div');

        if (this.classes.length === 0) {
            this.element = 'modal-item';
            element.classList.add(this.element);
        } else {
            this.classes.forEach(className => {
                element.classList.add(className);
            });
        }

        element.innerHTML = `
            <div class="modal-item__image">
                <img src=${this.src} alt=${this.alt}>
            </div>
            <div class="modal-item__title">${this.title}</div>
            <div class="modal-item__descr">${this.descr}</div>
            <button class="button" type="button" data-modal="order">${this.button}</button>
        `;
        this.parent.append(element);

    }
}

// const div = new Samples();
// div.render();

new Samples(
    "images/10.jpg",
    "image_1",
    "Lorem ipsum dolor sit amet(test_1).",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque corporis ipsum consectetur eos. Nostrum inventore ratione rerum perferendis rem odit mollitia similique corrupti veniam aliquid!(test_1)",
    "Заказать",
    ".modals-container .modal-items"
).render();

new Samples(
    "images/11.jpg",
    "image_2",
    "Lorem ipsum dolor sit amet(test_2).",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque corporis ipsum consectetur eos. Nostrum inventore ratione rerum perferendis rem odit mollitia similique corrupti veniam aliquid!(test_2)",
    "Заказать",
    ".modals-container .modal-items"
).render();

new Samples(
    "images/12.jpg",
    "image_3",
    "Lorem ipsum dolor sit amet(test_3).",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque corporis ipsum consectetur eos. Nostrum inventore ratione rerum perferendis rem odit mollitia similique corrupti veniam aliquid!(test_3)",
    "Заказать",
    ".modals-container .modal-items"
).render();

new Samples(
    "images/12.jpg",
    "image_4",
    "Lorem ipsum dolor sit amet(test_4).",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque corporis ipsum consectetur eos. Nostrum inventore ratione rerum perferendis rem odit mollitia similique corrupti veniam aliquid!(test_4)",
    "Заказать",
    ".modals-container .modal-items"
).render();

new Samples(
    "images/12.jpg",
    "image_5",
    "Lorem ipsum dolor sit amet(test_5).",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque corporis ipsum consectetur eos. Nostrum inventore ratione rerum perferendis rem odit mollitia similique corrupti veniam aliquid!(test_5)",
    "Заказать",
    ".modals-container .modal-items"
).render();

new Samples(
    "images/13.jpg",
    "image_6",
    "Lorem ipsum dolor sit amet(test_6).",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque corporis ipsum consectetur eos. Nostrum inventore ratione rerum perferendis rem odit mollitia similique corrupti veniam aliquid!(test_6)",
    "Заказать",
    ".modals-container .modal-items"
).render();


// click on button and call modal window

$('.modal__close').click(function () {
    $('.overlay, #consultation, #sent').fadeOut('slow');
});

$('[data-modal="order"]').each(function (i) {
    $(this).click(function () {
        $('#consultation .modal_description').text($('.modal-item__title').eq(i).text());
        $('.overlay, #consultation').fadeIn('slow');
    });
});


