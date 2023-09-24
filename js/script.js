// toggle class active untuk logo menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di click
document.querySelector("#logo-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// toggle class active unruk search form
const searchForm = document.querySelector(".search-form");
const searcBox = document.querySelector("#search-box");

document.querySelector("#search-btn").onclick = (e) => {
  searchForm.classList.toggle("active");
  searcBox.focus();
  e.preventDefault();
};

// toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#shopping-cart-btn").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

//klik di luar elemen
const logo = document.querySelector("#logo-menu");
const sb = document.querySelector("#search-btn");
const sp = document.querySelector("#shopping-cart-btn");

document.addEventListener("click", function (e) {
  if (!logo.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sp.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// model box
const itemDetailModel = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-btn1");

// looping
itemDetailButtons.forEach((btns) => {
  btns.onclick = (e) => {
    itemDetailModel.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModel.style.display = "none";
  e.preventDefault();
};

// model box 1
const itemDetailModel1 = document.querySelector("#item-detail-modal1");
const itemDetailButtons1 = document.querySelectorAll(".item-detail-btn2");

itemDetailButtons1.forEach((btns) => {
  btns.onclick = (e) => {
    itemDetailModel1.style.display = "flex";
    e.preventDefault();
  };
});

document.querySelector(".modal .close-icon1").onclick = (e) => {
  itemDetailModel1.style.display = "none";
  e.preventDefault();
};

// model box 2
const itemDetailButtons2 = document.querySelectorAll(".item-detail-btn3");
const itemDetailModel2 = document.querySelector("#item-detail-modal2");

itemDetailButtons2.forEach((btns) => {
  btns.onclick = (e) => {
    itemDetailModel2.style.display = "flex";
    e.preventDefault();
  };
});

document.querySelector(".modal .close-icon2").onclick = (e) => {
  itemDetailModel2.style.display = "none";
  e.preventDefault();
};

// klik diluar model
window.onclick = (e) => {
  if (e.target === itemDetailModel) {
    itemDetailModel.style.display = "none";
  }
  if (e.target === itemDetailModel1) {
    itemDetailModel1.style.display = "none";
  }
  if (e.target === itemDetailModel2) {
    itemDetailModel2.style.display = "none";
  }
};
