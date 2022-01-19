// import products from './products.js';
const products = [
    {
        id: 1,
        image: '../images/product-1.jpg',
        name: 'Mango',
        price: 50.00,
        sale: '30%',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nostrum magni eaque deserunt unde quis. Consequuntur eius itaque voluptate cumque error doloribus debitis, suscipit ipsum, nobis tempore adipisci, repudiandae eum?',
        categories: 'Mango',
        inCart: 0
    },
    {
        id: 2,
        image: '../images/product-2.jpg',
        name: 'Cai thao',
        price: 40.00,
        sale: '30%',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nostrum magni eaque deserunt unde quis. Consequuntur eius itaque voluptate cumque error doloribus debitis, suscipit ipsum, nobis tempore adipisci, repudiandae eum?',
        categories: 'Cai thao',
        inCart: 0
    },
    {
        id: 3,
        image: '../images/product-3.jpg',
        name: 'Kiwi',
        price: 60.00,
        sale: '30%',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nostrum magni eaque deserunt unde quis. Consequuntur eius itaque voluptate cumque error doloribus debitis, suscipit ipsum, nobis tempore adipisci, repudiandae eum?',
        categories: 'Kiwi',
        inCart: 0
    },
    {
        id: 4,
        image: '../images/product-4.jpg',
        name: 'Dua chuot',
        price: 10.00,
        sale: '30%',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nostrum magni eaque deserunt unde quis. Consequuntur eius itaque voluptate cumque error doloribus debitis, suscipit ipsum, nobis tempore adipisci, repudiandae eum?',
        categories: 'Dua chuot',
        inCart: 0
    },
    {
        id: 5,
        image: '../images/product-5.jpg',
        name: 'Nam',
        price: 30.00,
        sale: '30%',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nostrum magni eaque deserunt unde quis. Consequuntur eius itaque voluptate cumque error doloribus debitis, suscipit ipsum, nobis tempore adipisci, repudiandae eum?',
        categories: 'Nam',
        inCart: 0
    },
    {
        id: 6,
        image: '../images/product-6.jpg',
        name: 'Dua luoi',
        price: 50.00,
        sale: '30%',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nostrum magni eaque deserunt unde quis. Consequuntur eius itaque voluptate cumque error doloribus debitis, suscipit ipsum, nobis tempore adipisci, repudiandae eum?',
        categories: 'Dua luoi',
        inCart: 0
    },
    {
        id: 7,
        image: '../images/product-7.jpg',
        name: 'Khoai tay',
        price: 50.00,
        sale: '30%',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nostrum magni eaque deserunt unde quis. Consequuntur eius itaque voluptate cumque error doloribus debitis, suscipit ipsum, nobis tempore adipisci, repudiandae eum?',
        categories: 'Khoai tay',
        inCart: 0
    },
    {
        id: 8,
        image: '../images/product-8.jpg',
        name: 'Cai thia',
        price: 60.00,
        sale: '30%',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nostrum magni eaque deserunt unde quis. Consequuntur eius itaque voluptate cumque error doloribus debitis, suscipit ipsum, nobis tempore adipisci, repudiandae eum?',
        categories: 'Cai thia',
        inCart: 0
    },
];

const btnOpenNavMobile = document.querySelector('.open-btn');
const btnCloseNavMobile = document.querySelector('.btn-close');
const menu = document.querySelector('.list-menu');

btnOpenNavMobile.addEventListener("click", () => {
    menu.classList.add('show-nav-mobile');
});

btnCloseNavMobile.addEventListener("click", () => {
    menu.classList.remove("show-nav-mobile");
});

//search
let btnSearchIcon = document.querySelector('#icon-search');
let formSearch = document.querySelector('.form-inline');

btnSearchIcon.onclick = () => {
    formSearch.classList.toggle('show-form-search');
}



//show listItem in Featured Products

// function showItemSlide() {
//     let productSlide = document.querySelector('.productSlide');
//     if (productSlide) {
//         productSlide.innerHTML = '';
//         products.map(itemSlide => productSlide.innerHTML +=
//             `<div class="col-6 col-md-3 product-item">
//             <a href="productDetail.html">
//                 <img src=${itemSlide.image} class="d-block w-100" alt="..."></a>
//                 <div class="carousel-caption content-product">
//                     <span><i class="fas fa-search    "></i></span>
//                     <span><i class="fas fa-heart    "></i></span>
//                     <span><i class="fas fa-sliders-h    "></i></span>
//                 </div>
//                 <div class="addCart">
//                     <button type="submit" class="btn-addCart"><i class="fas fa-shopping-cart    "></i> </button>
//                 </div>
//                 <div class="bottom">
//                     <a href="productDetail.html">${itemSlide.name}</a>
//                     <div class="price">
//                         <span>$${itemSlide.price.toFixed(2)}</span>
//                     </div>
//                 </div>

//         </div>`
//         )
//     }
// }
// showItemSlide();

//show listItem in New Product

function showItem() {
    let productItem = document.querySelector(".productNew");
    if (productItem) {
        productItem.innerHTML = '';
        products.map(item => productItem.innerHTML +=
            `<div class="col-lg-3 col-md-4 col-6 product-item" id=${item.id}>
                <a href="#" onclick="showProductDetail('${item.id}')">
                    <img src=${item.image} class="d-block w-100" alt="...">
                </a>
                    <div class="carousel-caption content-product">
                        <span><i class="fas fa-search    "></i></span>
                        <span><i class="fas fa-heart    "></i></span>
                        <span><i class="fas fa-sliders-h    "></i></span>
                    </div>
                    <div class="addCart">
                        <button type="submit" class="btn-addCart" onclick="addCart('${item.id}')"><i class="fas fa-shopping-cart    "></i> </button>
                    </div>
                    <div class="bottom">
                        <a href="#">${item.name}</a>
                        <div class="price">
                            <span>$${item.price.toFixed(2)}</span>
                        </div>
                    </div>
            </div>`
        )
    }
}
showItem();


//add Cart
// - click vào nút giỏ hàng thì số trên biểu tượng tăng lên 1
// - luu sp vao localStorage
// - lay no len su dung thoi
// - vẫn ở trang chủ
var count = document.querySelector('.count')
function addCart(idItem) {
    let getItem = products.find(item => item.id == idItem)
    cartNumbers(getItem)
}

function onloadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        count.textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        count.textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        count.textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[product.categories] == undefined) {
            cartItems = {
                ...cartItems,
                [product.categories]: product
            }
        }
        cartItems[product.categories].inCart += 1;
    } else {
        product.inCart += 1;
        cartItems = {
            [product.categories]: product
        }
    }
    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function updateCartNumber() {
    const quanityItems = document.querySelectorAll('.quanity');
    const totalQuanity = () => {
        let totalQuanity = 0;
        for (let item = 0; item < quanityItems.length; item++) {
            totalQuanity += parseInt(quanityItems[item].value)
        }
        console.log(totalQuanity);
        return totalQuanity
    }
    localStorage.setItem('cartNumbers', JSON.parse(totalQuanity()));
    onloadCartNumbers();
}

function removeCart(idItem) {
    const arrProductsInCart = Object.values(JSON.parse(localStorage["productsInCart"]))
    const productsInCart = arrProductsInCart.filter(item => item.id != idItem)
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    cartItems = {
        ...productsInCart
    }
    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
    displayCart()

    updateCartNumber()
}

function onchangeQuanityItem(quanityAItem, idItem) {
    const quanityItems = document.querySelectorAll('.quanity');
    const cartItems = JSON.parse(localStorage.getItem('productsInCart'))
    const productsInCart = Object.values(cartItems)
    let itemInCart = productsInCart.find(item => item.id == idItem)

    //update inCart of productsInCart
    for (let item = 0; item < quanityItems.length; item++) {
        const quanityItem = quanityItems[item]
        if (quanityItem.id == itemInCart.id) {
            quanityAItem = quanityItem.value
            break;
        }
    }
    itemInCart.inCart = quanityAItem
    localStorage.setItem('productsInCart', JSON.stringify(cartItems))

    updateCartNumber()
    totalCost(itemInCart)
    displayCart();
}

function totalCost() {
    let productsIncart = localStorage.getItem('productsInCart')
    productsIncart = JSON.parse(productsIncart)
    let arrProductsIncart = Object.values(productsIncart)

    let totalCost = 0;
    for (const index in arrProductsIncart) {
        totalCost += arrProductsIncart[index].inCart * arrProductsIncart[index].price
    }
    return totalCost
}

function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector('#listItemCart');
    let totalPayment = document.querySelector('#totalPayment');

    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <tr>
                <td>
                    <div class="cart-item">
                        <img src=${item.image} alt="" onclick="showProductDetail('${item.id}')">
                        <div class="info-cart-item">
                            <span>${item.name}</span><br>
                            <span class="price">$${item.price.toFixed(2)}</span><br>
                            <p onclick="removeCart('${item.id}')">remove</p>
                        </div>
                    </div>
                </td>
                <td>
                    <input 
                        type="number" 
                        class="quanity"
                        id="${item.id}"
                        value=${item.inCart} 
                        pattern="[0-9]{2}" min="1" max="10" onchange="onchangeQuanityItem(${item.inCart}, ${item.id})">
                </td>
                <td>
                    <span>$${(item.price * item.inCart).toFixed(2)}</span>
                </td>
            </tr>`
        })
        totalPayment.innerHTML = `
            <tr>
                <td>Subtotal</td>
                <td>$${totalCost().toFixed(2)}</td>
            </tr>
            <tr>
                <td>Fee Ship</td>
                <td>$20.00</td>
            </tr>
            <tr>
                <td>Total</td>
                <td>$${(totalCost() + 20.00).toFixed(2)}</td>
            </tr>`
    }
}
onloadCartNumbers();
displayCart();


//===========JavaScript Login and Register ==============
const form = document.querySelector('#form-register');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
let login = document.querySelector('#login');
let register = document.querySelector('#register');

if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();

        checkInputs();
        alert('Register success!');
        register.style.display = 'none';
        login.style.display = 'block';

    });
}


function checkInputs() {
    // trim to remove the whitespaces
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccessFor(username);
        localStorage.setItem('username', username.value);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
        localStorage.setItem('email', email.value);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else {
        setSuccessFor(password);
        localStorage.setItem('password', password.value);
    }

    if (password2Value === '') {
        setErrorFor(password2, 'Confirm password cannot be blank');
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords does not match');
    } else {
        setSuccessFor(password2);
        localStorage.setItem('password2', password2.value);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

//check Sign in
const username1 = document.querySelector('#username1');
const password1 = document.querySelector('#password1');
const formSignIn = document.getElementById('form-signin');
const iconUser = document.querySelector('.fa-user');

function addUsernameNav() {
    if (localStorage.getItem('username') !== null) {
        const firsyCharUser = localStorage.getItem('username').charAt(0);
        iconUser.innerHTML =
            `<span>
            ${firsyCharUser}
            </span>`
    }
}

if (formSignIn) {
    formSignIn.addEventListener("submit", e => {
        e.preventDefault();
        checkInputSignIn();
        checkLogin();
        addUsernameNav();
    });
} else {
    addUsernameNav();
}

function checkInputSignIn() {
    const usernameValue1 = username1.value.trim();
    const passwordValue1 = password1.value.trim();

    if (usernameValue1 === '') {
        setErrorFor(username1, 'Username cannot be blank');
    } else {
        setSuccessFor(username1);
    }

    if (passwordValue1 === '') {
        setErrorFor(password1, 'Password cannot be blank');
    } else {
        setSuccessFor(password1);
    }
}

function checkLogin() {
    let getUsername = localStorage.getItem('username');
    let getPassword = localStorage.getItem('password');

    if (getUsername === username1.value && getPassword === password1.value) {
        setSuccessFor(username1);
        setSuccessFor(password1);
        history.back();
    } else if (getUsername !== username1.value) {
        setErrorFor(username1, 'Username is incorrect');
    } else if (getPassword !== password1.value) {
        setErrorFor(password1, 'Password is incorrect');
    }
}

// display Register
let linkRegister = document.querySelector('#link-register');
if (linkRegister) {
    linkRegister.addEventListener("click", () => {
        register.style.display = 'block';
        login.style.display = 'none';
    })
}

//========Search============
const search = document.querySelector('#search')
const slider = document.querySelector('.slider')
const collection = document.querySelector('.collection')
const featured = document.querySelector('.featured')
let productsSection = document.querySelector(".productNew");
const btnSearch = document.querySelector('#btn-search')

if (btnSearch) {
    btnSearch.addEventListener('click', () => {
        console.log(search.value);

        const checkItem = products.find((item) => item.name.toLowerCase().includes(search.value))
        const resultItem = products.filter((item) => item.name.toLowerCase().includes(search.value))

        if (checkItem) {
            search.value = ''

            slider.innerHTML = ''
            slider.style.height = '1vh'
            collection.innerHTML = ''
            featured.innerHTML = ''
            featured.style.padding = '0'

            const titleProducts = document.querySelector('#title-products');
            titleProducts.innerHTML = `<p>Result find: </p>`

            productsSection.innerHTML = ''
            resultItem.map(item => productsSection.innerHTML +=
                `
                <div class="col-lg-3 col-md-4 col-6 product-item" id=${item.id}>
                    <a href="productDetail.html">
                        <img src=${item.image} class="d-block w-100" alt="...">
                    </a>
                        <div class="carousel-caption content-product">
                            <span><i class="fas fa-search    "></i></span>
                            <span><i class="fas fa-heart    "></i></span>
                            <span><i class="fas fa-sliders-h    "></i></span>
                        </div>
                        <div class="addCart">
                            <button type="submit" class="btn-addCart"><i class="fas fa-shopping-cart    "></i> </button>
                        </div>
                        <div class="bottom">
                            <a href="productDetail.html">${item.name}</a>
                            <div class="price">
                                <span>$${item.price.toFixed(2)}</span>
                            </div>
                        </div>
                </div>`
            )
        } else {
            productsSection.innerHTML = "Your search can't be find !"
            setTimeout(() => location.reload(), 2000)
            // location.reload();
        }
    })
}



//=====Product detail=========
function showProductDetail(idItem) {
    let getIdItem = products.find(item => item.id == idItem)
    localStorage.setItem('productDetails', JSON.stringify(getIdItem));
    window.location.assign("http://127.0.0.1:5500/productDetail.html")
}

function displayProductDetail() {
    const product = JSON.parse(localStorage.getItem('productDetails'));
    const sectionDetail = document.querySelector('.product-detail')

    if (sectionDetail) {
        sectionDetail.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="img-product">
                        <div class="img-lagre">
                            <img src="${product.image}">
                        </div>
                        <div class="img-small row">
                            <div class="col-3">
                                <img src="${product.image}" alt="">
                            </div>
                            <div class="col-3">
                                <img src="${product.image}" alt="">
                            </div>
                            <div class="col-3">
                                <img src="${product.image}" alt="">
                            </div>
                            <div class="col-3">
                                <img src="${product.image}" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="des-product">
                    <span>Home/T-Shirt</span>
                    <h1>${product.name}</h1>
                    <h4>$${product.price.toFixed(2)}</h4>
                        <select name="quanity" id="quanity">
                            <option value="">Select Quanity</option>
                            <option value="">32</option>
                            <option value="">42</option>
                            <option value="">52</option>
                            <option value="">62</option>
                        </select>
                    <div class="btn-addCart d-flex">
                        <input type="text" name="amount" id="amount" placeholder="1">
                        <button onclick="addCart('${product.id}')">Add to Cart</button>
                    </div>
                    <h3>PRODUCT DETAIL</h3>
                    <p>${product.description}</p> 
                    </div>
                </div>
            </div>
        </div>
        `
    }
}
displayProductDetail()

//=================== Payment =======================
const btnCart = document.querySelector('#btn-cart');

if (btnCart) {
    btnCart.addEventListener("click", checkNextPaymentPage)
}
function checkNextPaymentPage() {
    const productsInCart = JSON.parse(localStorage.getItem('productsInCart'));
    if (productsInCart) {
        if (Object.keys(productsInCart).length !== 0) {
            //display Item
            console.log('kkkk');
            window.location.assign("http://127.0.0.1:5500/payment.html")

        } else {
            alert('Item in yout cart is empty !')
        }
    } else {
        alert('Item in yout cart is empty !')
    }
}

function displayItemPayment() {
    const productsInCarts = JSON.parse(localStorage.getItem('productsInCart'));
    if (productsInCarts) {
        if (Object.keys(productsInCarts).length !== 0) {
            //display Item
            const productsInCart = Object.values(productsInCarts);
            const formInfoItem = document.querySelector('#form-item')

            if (formInfoItem) {
                formInfoItem.innerHTML = ''
                productsInCart.map(item => formInfoItem.innerHTML += `
                    <div class="form-child d-flex">
                        <div class="d-flex align-items-center">
                            <img src=${item.image} alt="">
                            <div class="text-left pl-4">
                                <p>${item.name}</p>
                                <p>Unity: $${item.price.toFixed(2)}</p>
                                <p>Quanity: ${item.inCart}</p>
                            </div>
                        </div>
                        <span>${(item.price * item.inCart).toFixed(2)}</span>
                    </div>
                `)
            }

            const cartCost = document.querySelector('.cart-cost')
            if (cartCost) {
                cartCost.innerHTML = `
                    <div class="d-flex">
                        <div class="w-50">
                            <p>Subtotal: </p>
                            <p>Fee Ship: </p>
                            <p>Total: </p>
                        </div>
                        <div class="w-50 text-right">
                            <p>$${totalCost().toFixed(2)}</p>
                            <p>$20.00</p>
                            <p>$${(totalCost() + 20.00).toFixed(2)}</p>
                        </div>
                    </div>
                    <button id="btn-payment">Payment</button>
                `
            }
            const btnPayment = document.querySelector('#btn-payment');
            if (btnPayment) {
                btnPayment.addEventListener("click", () => {
                    alert('Your order is success !')
                    history.back();
                    localStorage.removeItem('productsInCart')
                    localStorage.removeItem('cartNumbers')
                })
            }
        }
    }
}
displayItemPayment()



