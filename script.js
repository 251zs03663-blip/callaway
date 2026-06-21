function submitProduct() {
    // 1. HTMLの入力フォームから値を取得
    const name = document.getElementById('productName').value;
    const price = document.getElementById('productPrice').value;

    // 2. 入力内容を確認（デバッグ用）
    if (name === "" || price === "") {
        alert("名前と価格を入力してください！");
        return;
    }

    // 3. 結果をコンソールに表示（まずはここがスタート）
    console.log("出品データ:", {
        name: name,
        price: price
    });

    alert(name + " を出品しました！（価格: " + price + "円）");
}
document.getElementById('productImage').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            // 画像のデータをimgタグのソースに設定して表示
            document.getElementById('preview').src = event.target.result;
        };
        reader.readAsDataURL(file);
    }
});
function submitProduct() {
    const name = document.getElementById('productName').value;
    const price = document.getElementById('productPrice').value;
    
    // 商品データをひとまとめにする
    const product = { name: name, price: price };
    
    // ブラウザに保存（JSON形式に変換して保存します）
    localStorage.setItem('myProduct', JSON.stringify(product));
    
    alert("出品しました！一覧ページへ移動します。");
    window.location.href = 'list.html'; // 一覧ページに移動
}

let imageBase64 = ""; // 画像を一時的に保存する変数

// 画像選択時の処理に追加
document.getElementById('productImage').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
        imageBase64 = event.target.result; // ここで画像データを保存
        document.getElementById('preview').src = imageBase64;
    };
    reader.readAsDataURL(file);
});

function submitProduct() {
    const name = document.getElementById('productName').value;
    const price = document.getElementById('productPrice').value;
    
    // 画像データを含めて保存
    const product = { name: name, price: price, image: imageBase64 };
    localStorage.setItem('myProduct', JSON.stringify(product));
    
    window.location.href = 'list.html';
}
function submitProduct() {
    const name = document.getElementById('productName').value;
    const price = document.getElementById('productPrice').value;
    const image = imageBase64; // さっきの画像データ

    // 1. 既に保存されている商品リストを取得（なければ空のリストを作る）
    let products = JSON.parse(localStorage.getItem('myProductsList')) || [];

    // 2. 新しい商品を追加
    products.push({ name: name, price: price, image: image });

    // 3. 更新したリストを保存
    localStorage.setItem('myProductsList', JSON.stringify(products));

    alert("出品しました！");
    window.location.href = 'list.html';
}
