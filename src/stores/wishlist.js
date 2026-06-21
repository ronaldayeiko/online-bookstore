class Wishlist {
    constructor() {
        this.items = JSON.parse(localStorage.getItem("wishlist")) || [];
    }

    save() {
        localStorage.setItem("wishlist", JSON.stringify(this.items));
    }

    add(item) {
        if (!this.items.includes(item)) {
            this.items.push(item);
            this.save();
        }
    }

    remove(item) {
        this.items = this.items.filter(i => i !== item);
        this.save();
    }

    getAll() {
        return this.items;
    }
}

// Usage
const wishlist = new Wishlist();

wishlist.add("Laptop");
wishlist.add("Headphones");

console.log(wishlist.getAll());

wishlist.remove("Laptop");

console.log(wishlist.getAll());