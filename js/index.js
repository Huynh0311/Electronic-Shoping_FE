let token = localStorage.getItem('account');

function getAll() {
    // Tạo ra 1 request.
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
        },
        url: "http://localhost:8080/api/imgProduct",
        success: function (data) {
            show(data);
        },
        error: function (err) {
            console.log(err)
            // lỗi
        }
    });
}

getAll();

function show(arr) {
    let str = "";
    for (const p of arr) {

        str += `
                  <div class="col-lg-3 col-md-6 col-sm-6 d-flex">
                    <div class="card w-100 my-2 shadow-2-strong">
                      <img src="${p.thumbnail}" class="card-img-top" style="aspect-ratio: 1 / 1" />
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${p.product.name}</h5>
                        <p class="card-text">$${p.product.price}</p>
                        <div class="card-footer d-flex align-items-end pt-3 pgix-0 pb-0 mt-auto">
                          <button type="button" class="btn btn-success" onclick="addToCart(${p.id})">Thêm vào Giỏ Hàng</button>
                          <a href="#!" class="btn btn-light border px-2 pt-2 icon-hover"><i class="fas fa-heart fa-lg text-secondary px-1"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
        `
    }
    document.getElementById("body-content").innerHTML = str;
}