const wishlistContainer = document.querySelector('.wishlist')
const itemInput = document.querySelector('.input-item')
const itemInputBtn = document.querySelector('.add-item')

const wishlist = [
  "Macbook Air M2",
  "Jean Paul Perfume",
  "Scrimba Pro Subscription"
];

function displayWishlist() {
    wishlistContainer.innerHTML += wishlist.map((eachItem) => {
        return `<h4>${eachItem}</h4>`
    }).join(' ')
}

displayWishlist()

itemInputBtn.addEventListener('click', function() {
    wishlistContainer.innerHTML = ''
    if(!itemInput.value) alert('enter an item you wanna buy this christmas')
    else {
        wishlist.push(itemInput.value)
        itemInput.value = ''
    }
    displayWishlist()
})



