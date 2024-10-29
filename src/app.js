import "./style/style.scss"
import {Js} from "./js";
import {Validation} from "./js/validation";

document.addEventListener('DOMContentLoaded', () => {
    new Js();
    new Validation();
});