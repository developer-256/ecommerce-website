const productSection = document.getElementById("allProducts");

document.getElementById("openBtn").addEventListener("click", () => {
    let sideBar = document.getElementById("sideBar");
    let main = document.getElementById("main");
    let logo = document.getElementById("logo");
    let closeBtn = document.getElementById("closeBtn");

    sideBar.classList.remove("hidden");
    closeBtn.classList.remove("hidden");
    setTimeout(() => {
        sideBar.classList.remove("w-0", "p-0");
        sideBar.classList.add("w-[50%]", "p-3", "md:p-4");
        document.body.classList.add("overflow-hidden");
        main.classList.add("blur-lg");
        logo.classList.add("blur-lg");
    }, 10);
})
document.getElementById("closeBtn").addEventListener("click", () => {
    let sideBar = document.getElementById("sideBar");
    let main = document.getElementById("main");
    let logo = document.getElementById("logo");
    let closeBtn = document.getElementById("closeBtn");

    sideBar.classList.remove("w-[50%]");
    sideBar.classList.add("w-0");
    document.body.classList.remove("overflow-hidden");
    main.classList.remove("blur-lg");
    logo.classList.remove("blur-lg");
    setTimeout(() => {
        sideBar.classList.remove("p-3", "md:p-4");
        sideBar.classList.add("p-0");
        closeBtn.classList.add("hidden");
        sideBar.classList.add("hidden");
    }, 100);
})


class Product {
    constructor(name, price, img) {
        this.name = name;
        this.price = price;
        this.img = img;
    }

    display() {
        console.log(`Name: ${this.name}\nPrice: ${this.price}\nImage URL: ${this.img}`);
    }
}

class Stack {
    allProducts = [];

    addProduct(name, price, img) {
        this.allProducts.push(new Product(name, price, img));
    }

    exportAllProducts() {
        for (const Product of this.allProducts) {

        }
    }
}