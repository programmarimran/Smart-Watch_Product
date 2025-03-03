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
//***************************************** */
const sizeButtons =document.getElementsByClassName("size-btn")
for(const sizeButton of sizeButtons){
    sizeButton.addEventListener("click",function(event){

        for(const sizeButton2 of sizeButtons){
            sizeButton2.classList.remove("border-red-700") 
            sizeButton2.classList.remove("border-green-700")
        }
        
        
        event.target.classList.add("border-red-700")
        event.target.classList.add("bg-red-100")
    })
}
//****************************************** */
document.getElementById("quantity-plus")
.addEventListener("click",function(event){
   const quantity=convertedElemetInnerText("quantity")
   console.log(quantity)
    document.getElementById("quantity").innerText=quantity+1;
})
//************************************************* */
document.getElementById("quantity-minus")
.addEventListener("click",function(event){
   const quantity=convertedElemetInnerText("quantity")
   document.getElementById("quantity").innerText=Math.max(0,quantity-1);
    
})
//***************************************** */
document.getElementById("add-to-cart")
.addEventListener("click",function(event){
    
})