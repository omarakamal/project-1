
function addToCart(){
   let shoppingCart =JSON.parse(localStorage.getItem("shoppingCart"))

   let currentItem =JSON.parse(localStorage.getItem("currentItem"))
   // console.log(shoppingCart)
   if(shoppingCart){
    shoppingCart.push({title:currentItem.title,price:currentItem.price,image:currentItem.image})
    console.log("New SHop",shoppingCart)
    localStorage.setItem("shoppingCart",JSON.stringify(shoppingCart))
   }
   else{
      let itemTobeShopping = JSON.stringify([currentItem])
      console.log(itemTobeShopping)
    localStorage.setItem('shoppingCart',itemTobeShopping)
   }

   window.location.href = '../shopping-cart/shoppingCart.html'

}

window.addEventListener('load',()=>{

    const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'))

    console.log("SHO",shoppingCart)
    let cartNum = document.getElementById('cart-num')

    if(shoppingCart){

        cartNum.innerHTML = shoppingCart.length
    }
    else{
        cartNum.innerHTML = 0
    }
   let gotItem =  JSON.parse(localStorage.getItem("currentItem"))

   console.log(gotItem)

   const container = document.getElementById('one-item-container')

   let image = document.createElement('img')
   let title = document.createElement('h2')
   let price = document.createElement('p')
   let button = document.createElement('button')



   image.src = gotItem.image;
   image.className= 'listing-images'
   title.innerHTML = gotItem.title;
   price.innerHTML = `$${gotItem.price}`
   button.innerHTML = `Add to Shopping Cart`
   button.className = `btn`
   button.onclick= addToCart




   

   container.appendChild(image)
   container.appendChild(title)
   container.appendChild(price)
   container.appendChild(button)

})



