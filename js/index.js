const roundbtn= document.querySelectorAll(".ring-button")
for (const ring of roundbtn){

    ring.addEventListener("click",function(event){



        for(let i = 0 ; i < roundbtn.length ; i++){
            roundbtn[i].classList.remove("border-red-500")
            roundbtn[i].classList.remove("border-transparent")
            roundbtn[i].classList.add("border-blue-100")
        }

        // event.target.classList.remove("border-blue-500")
        event.target.classList.add("border-red-500")
    })
    
    
}