export class Validation {
    constructor() {
        this.nameInputElement = document.getElementById('name');
        this.emailInputElement = document.getElementById('email');
        this.phoneInputElement = document.getElementById('phone');
        this.messageInputElement = document.getElementById('message');
    }

    validateForm() {
        let isValid = true;
        let textInputArray = [this.nameInputElement, this.phoneInputElement,
            this.messageInputElement];
        textInputArray.forEach(input => {
            if (input.value.trim()) {
                input.nextElementSibling.style.display = 'none';
                input.style.borderColor = '';
            } else {
                input.nextElementSibling.style.display = 'block';
                input.style.borderColor = 'red';
                isValid = false;
            }
        });

        if (this.emailInputElement.value && this.emailInputElement.value.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)) {
            this.emailInputElement.nextElementSibling.style.display = 'none';
            this.emailInputElement.style.borderColor = '';
        } else {
            this.emailInputElement.nextElementSibling.style.display = 'block';
            this.emailInputElement.style.borderColor = 'red';
            isValid = false;
        }

        return isValid;
    }
}