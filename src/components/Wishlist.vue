<script setup>

// Wishlist array
let wishlist = [];

// Add item to wishlist
function addToWishlist(item) {
    if (!wishlist.includes(item)) {
        wishlist.push(item);
        console.log(`${item} added to wishlist`);
    } else {
        console.log(`${item} is already in wishlist`);
    }
}

// Remove item from wishlist
function removeFromWishlist(item) {
    wishlist = wishlist.filter(wishlistItem => wishlistItem !== item);
    console.log(`${item} removed from wishlist`);
}

// Display wishlist
function showWishlist() {
    console.log("Wishlist:");
    wishlist.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
    });
}

// Example usage
addToWishlist("book1.jpg");
addToWishlist("book-1 (1).jpg");
addToWishlist("book-1 (2).jpg");

showWishlist();

removeFromWishlist("book1.jpg");

showWishlist();
</script>





 
 

    

 
    
    