let shoppingCart=document.querySelector('.fa-cart-shopping');
let dropdown=document.querySelector('.shopping-cart-dropdown')
let closedropdown=document.getElementById('close-drop-down')
shoppingCart.addEventListener("click",(eo)=>{
    dropdown.classList.add("show-dropdown")

})
closedropdown.addEventListener("click",(eo)=>{
    console.log("asd")

    dropdown.classList.remove("show-dropdown")
})


// store
const body=document.getElementById('body')
const buyBtns=document.querySelectorAll('.buy')
const showProducts=document.createElement("div")
const backScreen=document.querySelector('.back-screen')
buyBtns.forEach((item,index) => {
    item.addEventListener("click",(eo)=>{
        item.setAttribute("disabled","")
        item.classList.add("active-buy")
        item.innerHTML="&#10004 Done"

        body.append(showProducts)
        showProducts.innerHTML=  `Cart    <i class="fa-solid fa-cart-shopping"></i>`              

        showProducts.classList.add("show-products")
        const product=item.parentElement;
    const backScreenProductImgSrc=product.getElementsByClassName('product-img')[0].src;
    const backScreenProductTitle=product.getElementsByClassName('product-title')[0].innerText;
    const backScreenProductPrice=product.getElementsByClassName('price')[0].innerText;




const backScreenProduct=`
        <div class="backscreen-product">
                <div class="backscreen-img">
                    <img src="${backScreenProductImgSrc}" alt="">
                    <p class="backscreen-product-title">${backScreenProductTitle}</p>
                </div>
               
                <div class="parent-of-quantityNumber">
                    <input class="input-quantity" type="number" min="1" name="" id="">
                    <p class="quantity">Quantity</p>
                  </div>
                  <div class="backscreen-product-price">
                    ${backScreenProductPrice}
                  </div>
                  <div id="delete-btn" class="delete-btn">
                    Delete
                  </div>

            </div>`

    const parentOfBackScreenProducts=document.querySelector('.parent-of-backscreen-products');
    parentOfBackScreenProducts.innerHTML+=backScreenProduct;
    })
    
});
showProducts.addEventListener("click",(eo)=>{
    backScreen.style.transform="translateX(0)"
    showProducts.remove();
})

let closeBackScreen=document.getElementById('close-backscreen')
closeBackScreen.addEventListener("click",(eo)=>{
    backScreen.style.transform="translateX(-120%)"
})


const updateTotalPrice=()=>{
    let allBackScreenProducts=document.querySelectorAll('.backscreen-product')
    let totalPrice=document.getElementById('total-price')
    let total=0;
    allBackScreenProducts.forEach(ele => {
        let price=Number(ele.getElementsByClassName('backscreen-product-price')[0].innerText.replace("$",""))
        let quantity =Number(ele.getElementsByClassName('input-quantity')[0].value)
        total=total+(price*quantity)
    });
    totalPrice.innerText=`$ ${total}`
}
backScreen.addEventListener("click",(eo)=>{
    updateTotalPrice();
    })

    backScreen.addEventListener("click",(eo)=>{
        if(eo.target.classList.contains('delete-btn')){
            eo.target.parentElement.remove();
            updateTotalPrice()
            const nameOfDeletedProduct=eo.target.parentElement.getElementsByClassName('backscreen-product-title')[0].innerText;
         let allProducts=document.querySelectorAll('.product');
        allProducts.forEach(item => {
            let nameOfProduct=item.getElementsByClassName('product-title')[0].innerText;
            if(nameOfDeletedProduct==nameOfProduct)
            {
                let buttonOfdeletedProduct=item.getElementsByClassName('buy')[0];
                buttonOfdeletedProduct.classList.remove("active-buy");
                buttonOfdeletedProduct.innerText="Buy"
                buttonOfdeletedProduct.removeAttribute("disabled")
            }       
        });
        }
        
    })

    let menuBarBtn=document.querySelector('.fa-bars');
    let navBar=document.querySelector('.nav')
    let closeMenuBar=document.getElementById("close-menu-bar")
    menuBarBtn.addEventListener("click",(eo)=>{
        navBar.classList.add("show-menu-bar")
       menuBarBtn.classList.add("menuBar-active")

    })
    closeMenuBar.addEventListener("click",(eo)=>{
        navBar.classList.remove("show-menu-bar")
        menuBarBtn.classList.remove("menuBar-active")
    })