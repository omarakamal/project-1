

// let myItems = [
//     {
//         image: "https://via.placeholder.com/300",
//         title: "Vintage Leather Jacket",
//         price: 99.99
//     },
//     {
//         image: "https://via.placeholder.com/300",
//         title: "Classic Blue Jeans",
//         price: 49.99
//     },
//     {
//         image: "https://via.placeholder.com/300",
//         title: "Stylish Sunglasses",
//         price: 29.99
//     },
//     {
//         image: "https://via.placeholder.com/300",
//         title: "Cozy Knit Sweater",
//         price: 79.99
//     },
//     {
//         image: "https://via.placeholder.com/300",
//         title: "Sporty Sneakers",
//         price: 69.99
//     }
// ];

// window.addEventListener("load",()=>{
//     const productsContainer = document.getElementById('products-container')

//     myItems.forEach((element)=>{
//         let newelement = document.createElement('div')
//         let image = document.createElement('img')
//         let h3 =  document.createElement('h3')
//         let p =  document.createElement('p')

//         // populating data
//         h3.innerHTML= element.title
//         image.src= element.image
//         image.alt = element.title
//         p.innerText = `$${element.price}`

//         // Add class

//         h3.className="prod"
//         p.className="prod"
//         image.className="prod"

       




//         // Appending data
//         newelement.appendChild(image)
//         newelement.appendChild(h3)
//         newelement.appendChild(p)


//         productsContainer.appendChild(newelement)

//     })
// })




// let clickable = document.getElementsByClassName('prod')

// console.log(clickable)

// let newClick = [...clickable]
// newClick.forEach((element)=>{
//     console.log(element)
// })




function goToIndividual(title,price, image){
    console.log(title)
    console.log(price)
    console.log(image)

    let myItem = {
        title,
        price,
        image
    }
    localStorage.setItem("currentItem",JSON.stringify(myItem))

    window.location.href = '../listingPage/listingPage.html'

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
})