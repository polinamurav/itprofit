import {Validation} from "./validation";
import {CustomHttp} from "../services/custom-http";
import config from "../config/config";

export class SubmitForm {
    constructor() {
        document.getElementById('button').addEventListener('click', this.sendMessage.bind(this));

        this.validation = new Validation();
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
            } else if (response.status === 'error') {
            }
        }
        this.loader.style.display = 'none';
    }
}