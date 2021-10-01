import {APP} from "./app.js";
import { ProcedureMath } from "./components/ProcedureMath.js";



document.addEventListener("DOMContentLoaded", (e)=>{

    APP();
})

window.addEventListener("hashchange", (e)=>{

    APP();
})




document.addEventListener("click", (e)=>{

    ProcedureMath(e.target.id)
})