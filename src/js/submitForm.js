import {Validation} from "./validation";
import {CustomHttp} from "../services/custom-http";
import config from "../config/config";

export class SubmitForm {
    constructor(form) {
        document.getElementById('button').addEventListener('click', this.sendMessage.bind(this));

        this.validation = new Validation();
        this.form = document.getElementById('form');
        this.loader = document.getElementsByClassName('loader-main')[0];
    }

    async sendMessage(e) {
        e.preventDefault();

        this.loader.style.display = 'flex';
        document.querySelectorAll('.error-input').forEach(element => {
            element.style.display = 'none';
        })

        if (this.validation.validateForm()) {
            const createData = {
                name: this.validation.nameInputElement.value,
                email: this.validation.emailInputElement.value,
                phone: this.validation.phoneInputElement.value,
                message: this.validation.messageInputElement.value,
            };

            const response = await CustomHttp.request(config.api + '/registration', "POST", createData);

            if (response.status === 'success') {
                alert(response.msg);
                this.form.reset();
            } else if (response.status === 'error') {
                this.displayErrors(response.fields);
            }
        }
        this.loader.style.display = 'none';
    }

    displayErrors(fields) {
        this.textInputArray = [this.validation.nameInputElement, this.validation.phoneInputElement,
            this.validation.messageInputElement, this.validation.emailInputElement];
        this.textInputArray.forEach(input => {
            const errorMessageElement = input.nextElementSibling;
            if (errorMessageElement) {
                errorMessageElement.style.display = 'none';
                input.classList.remove('error');
                input.style.borderColor = '';
            }
        });

        for (const field in fields) {
            const input = this.textInputArray.find(input => input.name === field);
            const errorMessageElement = input ? input.nextElementSibling : null;

            if (input) {
                input.classList.add('error');
                input.style.borderColor = 'red';
            }

            if (errorMessageElement) {
                errorMessageElement.style.display = 'block';
                errorMessageElement.innerText = fields[field];
            }
        }
    }
}