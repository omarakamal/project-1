


window.addEventListener('load',()=>{
    const shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"))
    console.log(shoppingCart)


    console.log("SHO",shoppingCart)
    let cartNum = document.getElementById('cart-num')

    if(shoppingCart){

        cartNum.innerHTML = shoppingCart.length
    }
    else{
        cartNum.innerHTML = 0
    }


    shoppingCart.forEach(gotItem => {
        console.log(gotItem)

        const container = document.getElementById('shopping-cart-container')

        let contain = document.createElement('div')
        let image = document.createElement('img')
        let title = document.createElement('h2')
        let price = document.createElement('p')
        let button = document.createElement('button')

        button.onclick= function removeItem(title){
            let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"))
        
        
            const newShoppingCart = shoppingCart.filter((element)=>{
                return element.title != gotItem.title
            })
        
            
            localStorage.setItem('shoppingCart',JSON.stringify(newShoppingCart))

            location.reload()
        }
        
     
     
        image.src = gotItem.image;
        image.className='listing-images'
        title.innerHTML = gotItem.title;
        price.innerHTML = `$${gotItem.price}`
        button.innerHTML = `Remove Item`
        button.className = `btn`
     
     
     
     
        
     
        contain.appendChild(image)
        contain.appendChild(title)
        contain.appendChild(price)
        contain.appendChild(button)

        container.appendChild(contain)
     
    });
})



function checkout(){


   localStorage.removeItem("shoppingCart")

   alert("Congratulations Your Items will Arrive in 2-3 business Days")

   window.location.href = '../homepage/index.html'

}
 