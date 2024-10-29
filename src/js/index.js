export class Js {
    constructor() {
        this.initPhoneMask();
    }

    initPhoneMask() {
        const phoneInput = document.getElementById('phone');
        Inputmask({ mask: "+375 (99) 999-99-99" }).mask(phoneInput);
    }
}