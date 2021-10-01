import {Router} from "./components/Router.js";
import { Calculator } from "./components/Calculator.js";


export function APP(){

    const $root = document.getElementById("root");
    $root.innerHTML = null;
    $root.appendChild(Calculator());

    Router();
}

