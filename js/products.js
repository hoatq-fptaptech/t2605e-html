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
const url = "https://dummyjson.com/products/search?q=phone&limit=12";
fetch(url).then(rs=>rs.json()).then(data=>{
    var old_data = localStorage.getItem("heart");
    var arr = [];
    if(old_data){
        arr = JSON.parse(old_data);
    }
    var prs = data.products;
    prs.map(x=>{
        // kiểm tra sản phẩm này đã like hay chưa?
        var color = arr.includes(x.id)?"text-danger":"";// toán tử 3 ngôi
        
        var item = `<div class="item col-3">
                        <img class="img-fluid" src="${x.thumbnail}"/>
                        <h3>${x.title}</h3>
                        <p>${x.description}</p>
                        <p>${x.price}€</p>
                        <p><i class="bi bi-heart ${color}" onclick="favorite(${x.id})" 
                            id="heart-${x.id}"></i></p>
                    </div>`;
        document.getElementById("list_product").innerHTML +=  item;
    })
})

function favorite(id){
    
    var old_data = localStorage.getItem("heart");
    var arr = [];
    if(old_data){
        arr = JSON.parse(old_data);
    }
    if(arr.includes(id)){
        // remove id from arr
    }else{
        arr.push(id);
        var heart = document.getElementById(`heart-${id}`);
        heart.classList.add("text-danger");
    }
    var data_text = JSON.stringify(arr);
    localStorage.setItem("heart",data_text);
}


// var prs = data.products;
// prs.map(x=>{
//     var item = `<div class="item col-3">
//                     <img class="img-fluid" src="${x.thumbnail}"/>
//                     <h3>${x.name}</h3>
//                     <p>${x.description}</p>
//                     <p>${x.price}€</p>
//                     <p><i class="bi bi-heart"></i></p>
//                 </div>`;
//     document.getElementById("list_product").innerHTML +=  item;
// })