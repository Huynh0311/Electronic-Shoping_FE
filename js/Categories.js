
function categories() {
    // Tạo ra 1 request.
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
        },
        url: "http://localhost:8080/api/categories",
        success: function (data) {
            showCategory(data);
        },
        error: function (err) {
            console.log(err)
            // lỗi
        }
    });
}

categories();

function showCategory(categories) {
    let str = "";
    str += `
    `
    for (const c of categories) {
        str += `
                <li><a class="dropdown-item text-dark" href="category.html?id=${c.id}">${c.name}</a></li>
                
               `
    }
    document.querySelector(".categoryList").innerHTML = str;
}
var params = new window.URLSearchParams(window.location.search);
var idC = params.get('id');
function showProduct() {
    // Tạo ra 1 request.
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
        },
        url: "http://localhost:8080/api/productByCategory/" + idC,
        success: function (data) {
            showProductCategory(data);
        },
        error: function (err) {
            console.log(err)
            // lỗi
        }
    });
}

showProduct();

function showProductCategory(products) {
    let totalItem = products.length;
    let str = "";
    for (const p of products) {
        str += `<div class="col-lg-4 col-md-6 col-sm-6 d-flex">
                        <div class="card w-100 my-2 shadow-2-strong">
                            <img src="${p.imgProduct.thumbnail}" class="card-img-top" />
                            <div class="card-body d-flex flex-column">
                                <div class="d-flex flex-row">
                                    <h5 class="mb-1 me-1">$${p.price}</h5>
<!--                                    <span class="text-danger"><s>$${p.price}</s></span>-->
                                </div>
                                <p class="card-text">${p.name}</p>
                                <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                                    <a href="#!" class="btn btn-primary shadow-0 me-1">Add to cart</a>
                                    <a href="#!" class="btn btn-light border icon-hover px-2 pt-2"><i class="fas fa-heart fa-lg text-secondary px-1"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>`
    }
    document.querySelector(".category-product").innerHTML = str;
    document.querySelector(".total-item").innerHTML = totalItem + " Items found";
}
