const products = [
    { 
        id: '1', 
        name: 'Remera1', 
        price: 1000, 
        category: 'remeras', 
        img:'https://d2r9epyceweg5n.cloudfront.net/stores/399/451/products/20201130_1529361-2ad548fcb1b02c442b16072990392883-640-0.jpg', 
        stock: 25, 
        description:'Remera Algodón Peinado 24.1, excelente calidad.'
    },
    { id: '2', name: 'pantalones', price: 800, category: 'Pantalones', img:'https://cdn.shopify.com/s/files/1/0594/7506/7048/products/2231109025-35_3_1.jpg?v=1675399614', stock: 16, description:'Pantalon1 esta compuesta de tela anti-desgarro impermeable.'},
    { id: '3', name: 'buzos', price: 1200, category: 'Buzos', img:'https://www.comoquieres.com.ar/uploads/picture/image/29224/W2201681_70_1.jpg', stock: 10, description:'Buzo1 contiene algodon y viene de varios colores. El mejor del mercado'},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}


export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}