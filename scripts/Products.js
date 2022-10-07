import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target
    if (itemClicked.id.startsWith("product")) {
        const [,productKey] =
        itemClicked.id.split("--")
        for (const product of products){
            if (product.id === parseInt(productKey)){
                window.alert(`${product.name} costs $${product.price}`)
            }
        }
    }
}
)