
export function Router(){

    let {hash} = location;


    if(hash === "#/" || hash === ""){

        
        

        document.addEventListener("click", (e)=>{

            if(e.target.matches("#tolink")){
                e.preventDefault(e)

                getData("https://api.github.com/users/IducSoft/repos")

            }
        })


    }else if(hash === "#/skillAndServices"){

        document.querySelector("nav").insertAdjacentElement("afterend", skills());
        document.querySelector(".skills").insertAdjacentElement("afterend", services());
    }
}