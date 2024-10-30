import "./style/style.scss"
import {Js} from "./js";
import {SubmitForm} from "./js/submitForm";

document.addEventListener('DOMContentLoaded', () => {
    new Js();
    new SubmitForm();
});