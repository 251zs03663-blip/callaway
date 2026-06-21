// list.js の中身
const savedProduct = JSON.parse(localStorage.getItem('myProduct'));


if (savedProduct) {
    const listDiv = document.getElementById('productList');
    listDiv.innerHTML = `
        <div style="border: 1px solid #ccc; padding: 10px; width: 200px;">
            <img src="${savedProduct.image}" style="width: 100%;">
            <h3>${savedProduct.name}</h3>
            <p>価格: ${savedProduct.price}円</p>
        </div>
    `;
}
const products = JSON.parse(localStorage.getItem('myProductsList')) || [];
const listDiv = document.getElementById('productList');

// リストの中身を一つずつ順番に処理する
products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.style = "border: 1px solid #ccc; padding: 10px; margin: 10px; width: 200px;";
    
    productCard.innerHTML = `
        <img src="${product.image}" style="width: 100%;">
        <h3>${product.name}</h3>
        <p>価格: ${product.price}円</p>
    `;
    
    listDiv.appendChild(productCard);
});
