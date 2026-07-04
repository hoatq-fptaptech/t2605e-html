var p = {
    name: "Iphone 14",
    price: 100,
    thumbnail:"imgs/IMG_7593.jpeg",
    brand: {
        name: "Apple",
        madeIn: "CN"
    },
    options: [
        {
            option: "64GB",
            color:"Black"
        },
        {
            option:"128GB",
            color:"Gold"
        }
    ]
}
// alert(p.brand.name);
// p.options.map(o=>{
//     alert(o.option);
// })

// CALL API
const url = "https://dummyjson.com/products/search?q=phone";
fetch(url).then(rs=>rs.json()).then(data=>{
    var prs = data.products;
    prs.map(x=>{
        var item = `<div class="item col-3">
                        <img class="img-fluid" src="${x.thumbnail}"/>
                        <h3>${x.title}</h3>
                        <p>${x.description}</p>
                        <p>${x.price}€</p>
                    </div>`;
        document.getElementById("list_product").innerHTML +=  item;
    })
})



var prs = data.products;
prs.map(x=>{
    var item = `<div class="item col-3">
                    <img class="img-fluid" src="${x.thumbnail}"/>
                    <h3>${x.name}</h3>
                    <p>${x.description}</p>
                    <p>${x.price}€</p>
                </div>`;
    document.getElementById("list_product").innerHTML +=  item;
})