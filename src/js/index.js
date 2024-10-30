export class Js {
    constructor() {
        this.initPhoneMask();
        document.getElementById('open-popup').addEventListener('click', this.openPopup);
        document.getElementById('close-popup').addEventListener('click', this.closePopup);
    }

    initPhoneMask() {
        const phoneInput = document.getElementById('phone');
        Inputmask({ mask: "+375 (99) 999-99-99" }).mask(phoneInput);
    }

    openPopup() {
        document.body.classList.add('modal-open');
        const popup = document.getElementById('popup');
        popup.style.display = 'flex';
    }

    closePopup() {
        const popup = document.getElementById('popup');
        popup.style.display = 'none';
        document.body.classList.remove('modal-open');
    }
}