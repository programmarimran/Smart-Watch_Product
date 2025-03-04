let arryOfObject =[]
let color ='';
let size='';
let price=''
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

        //*********** */
        const colorWatch=event.target.getAttribute("id");
        const colorName=colorWatch.replace("-color","")
color =colorName;
        document.getElementById("product-image").src=`./images/${colorName}.png`
        //********* */
        
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


        const size1=event.target.getAttribute("id").replace("size-","")
        size=size1;

        let price1=event.target.innerText.split("$")[1]
        price =price1;
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
    document.getElementById("checkout-container").classList.remove("hidden");
    let cardCount =convertedElemetInnerText("cart-count")
    const quantity=convertedElemetInnerText("quantity")
    console.log(cardCount ,quantity)
    document.getElementById("cart-count").innerText=cardCount+quantity;

const productName =document.getElementById("product-name").innerText;
const productColor=document.querySelectorAll(".ring-button")
console.log(productColor)


const object={item:productName,color:color,size:size,quantity:quantity,price:price}


arryOfObject.push(object)


})

//****************************** */
document.getElementById("checkout-container")
.addEventListener("click",function(){
    document.getElementById("cart-modal").classList.remove("hidden");







})
//************************** */
document.getElementById("continue-shopping")
.addEventListener("click",function(){
    document.getElementById("cart-modal").classList.add("hidden")
    
})